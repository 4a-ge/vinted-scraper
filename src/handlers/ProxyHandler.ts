import type Proxy from "../types/Proxy.js";

export default class ProxyHandler {
  proxyList: Proxy[] = [];

  constructor(proxies: string[]) {
    /**
     * Check each proxy format and add valid ones to proxyList.
     */
    proxies.forEach(proxy => {
      const splittedProxy = proxy.split(":");

      /**
       * If proxy contains username and password,
       * IP:PORT:USERNAME:PASSWORD
       */
      if (splittedProxy.length === 4) {
        return this.proxyList.push({
          address: `${splittedProxy[2]}:${splittedProxy[3]}@${splittedProxy[0]}:${splittedProxy[1]}`,
          used: false,
        });
      }

      /**
       * If proxy does not contain username and password,
       * IP:PORT
       */
      if (splittedProxy.length === 2) {
        return this.proxyList.push({
          address: `${splittedProxy[0]}:${splittedProxy[1]}`,
          used: false,
        });
      }

      /**
       * If proxy is invalid.
       */
      throw new Error(`Invalid proxy format: ${splittedProxy}`);
    });
  }

  /**
   * Get valid proxy from proxyList.
   *
   * @returns { string } A valid proxy.
   */
  getProxy(): string {
    for (;;) {
      for (let i = 0; i < this.proxyList.length; i += 1) {
        if (!this.proxyList[i]!.used) {
          this.proxyList[i]!.used = true;
          return `http://${this.proxyList[i]!.address}`;
        }
      }

      for (let i = 0; i < this.proxyList.length; i += 1) {
        this.proxyList[i]!.used = false;
      }
    }
  }
}
