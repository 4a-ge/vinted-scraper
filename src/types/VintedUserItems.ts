import type { Item } from "./VintedItem";
import type { VintedPaginatedResponse } from "./VintedResponse";

export interface VintedUserItemsResponse extends VintedPaginatedResponse {
  items: Item[];
  drafts: Item[];
}
