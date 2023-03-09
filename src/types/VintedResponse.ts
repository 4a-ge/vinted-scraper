export interface Pagination {
  current_page: number;
  total_pages: number;
  total_entries: number;
  per_page: number;
  time: number;
}

export interface VintedResponse {
  code: number;
  proxy?: string;
}

export interface VintedPaginatedResponse extends VintedResponse {
  pagination: Pagination;
}
