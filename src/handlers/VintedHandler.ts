import HttpsProxyAgent from "https-proxy-agent";
import fetch from "node-fetch";
import type { VintedSearchResult } from "../types/VintedSearchResult.js";
import ProxyHandler from "./ProxyHandler.js";
import type { VintedUserResponse } from "../types/VintedUser.js";
import type { VintedUserItemsResponse } from "../types/VintedUserItems";
import type { VintedItemResponse } from "../types/VintedItem.js";
import getQueryParameters from "./getQueryParameters.js";

export default class VintedScraper {
  /**
   * Handler for proxy.
   */
  #proxyHandler?: ProxyHandler;

  /**
   * Cookie for Vinted session.
   */
  #sessionCookie?: string;

  constructor(proxies?: string[]) {
    /**
     * Check if user has given proxies.
     */
    if (proxies instanceof Array<string>) {
      this.#proxyHandler = new ProxyHandler(proxies);
    }
  }

  /**
   * Search for new products.
   *
   * @param url { string } URL to search.
   * @returns { VintedSearchResult } Result of search.
   */
  async search(url: string): Promise<VintedSearchResult> {
    const queryString = getQueryParameters(url);
    return this.#request<VintedSearchResult>(`https://www.vinted.be/api/v2/catalog/items?${queryString}`);
  }

  /**
   * Search for user data.
   *
   * @param id { number } ID of user.
   * @returns { VintedUserResponse } Data of user.
   */
  async fetchUser(id: number): Promise<VintedUserResponse> {
    return this.#request<VintedUserResponse>(`https://www.vinted.de/api/v2/users/${id}`);
  }

  async fetchUserItems(id: number): Promise<VintedUserItemsResponse> {
    const itemsPerPage = 200000;
    const url = `https://www.vinted.be/api/v2/users/${id}/items?page=1&per_page=${itemsPerPage}`;
    return this.#request<VintedUserItemsResponse>(url);
  }

  /**
   * Search for item data.
   *
   * @param id { number } ID of item.
   * @returns { VintedItemResponse } Data of item.
   */
  async fetchItem(id: number): Promise<VintedItemResponse> {
    return this.#request<VintedItemResponse>(`https://www.vinted.de/api/v2/items/${id}`);
  }

  /**
   * Boost views of an item.
   *
   * @param url { string } Link of item to boost.
   * @param views { number } Total views to add.
   */
  async boostItem(url: string, views: number): Promise<void> {
    for (let i = 0; i < views; i += 1) {
      try {
        let proxy = "";

        /**
         * Get proxy if available.
         */
        if (this.#proxyHandler) {
          proxy = this.#proxyHandler.getProxy();
        }

        fetch(url, { agent: proxy !== "" ? HttpsProxyAgent(proxy) : undefined });
      } catch {
        i -= 1;
      }
    }
  }

  /**
   * Do request with default verification.
   *
   * @template RESPONSE_TYPE
   * @param url { string } URL to request.
   * @returns { Promise<RESPONSE_TYPE> } Response.
   */
  async #request<RESPONSE_TYPE>(url: string): Promise<RESPONSE_TYPE> {
    /**
     * Fetch new session cookie if needed.
     */
    if (!this.#sessionCookie) {
      await this.#fetchSessionCookie();
    }

    let proxy = "";

    /**
     * Get proxy if available.
     */
    if (this.#proxyHandler) {
      proxy = this.#proxyHandler.getProxy();
    }

    const res = await fetch(url, {
      headers: {
        cookie: `_vinted_fr_session=${this.#sessionCookie}`,
      },
      agent: proxy !== "" ? HttpsProxyAgent(proxy) : undefined,
    });

    const text = await res.text();

    if (text.includes("Request rate limit exceeded")) {
      throw new Error("Request rate limit exceeded");
    }

    if (text.includes("<")) {
      throw new Error("Bad Gateway");
    }

    const json = JSON.parse(text);

    if (proxy !== "") json.proxy = proxy;

    if (json.message_code === "invalid_authentication_token") {
      await this.#fetchSessionCookie();
      return this.#request(url);
    }

    if (json.message_code === "not_found") {
      throw new Error("not_found");
    }

    return json as RESPONSE_TYPE;
  }

  /**
   * Fetch new session cookie.
   */
  async #fetchSessionCookie(): Promise<void> {
    let proxy = "";

    /**
     * Get proxy if available.
     */
    if (this.#proxyHandler) {
      proxy = this.#proxyHandler.getProxy();
    }

    /**
     * Request to fetch session cookie.
     */
    const res = await fetch(`https://vinted.de`, proxy !== "" ? { agent: HttpsProxyAgent(proxy) } : undefined);

    /**
     * Check if _vinted_fr_session cookie exists.
     */
    if (!res.headers.get("set-cookie")?.includes("_vinted_fr_session")) {
      throw new Error("Cannot fetch cookie");
    }

    /**
     * Return _vinted_fr_session cookie.
     */
    this.#sessionCookie = res.headers.get("set-cookie")?.split("_vinted_fr_session=")[1]!.split(";")[0] as string;
  }
}
