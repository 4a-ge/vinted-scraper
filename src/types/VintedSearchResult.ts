export interface Thumbnail {
  type: string;
  url: string;
  width: number;
  height: number;
  original_size?: any;
}

export interface HighResolution {
  id: string;
  timestamp: number;
  orientation?: any;
}

export interface Photo {
  id: number;
  width: number;
  height: number;
  temp_uuid?: any;
  url: string;
  dominant_color: string;
  dominant_color_opaque: string;
  thumbnails: Thumbnail[];
  is_suspicious: boolean;
  orientation?: any;
  reaction?: any;
  high_resolution: HighResolution;
  full_size_url: string;
  is_hidden: boolean;
}

export interface User {
  id: number;
  login: string;
  business: boolean;
  profile_url: string;
  photo: Photo;
}

export interface Thumbnail2 {
  type: string;
  url: string;
  width: number;
  height: number;
  original_size?: boolean;
}

export interface HighResolution2 {
  id: string;
  timestamp: number;
  orientation?: number;
}

export interface Photo2 {
  id: any;
  image_no: number;
  width: number;
  height: number;
  dominant_color: string;
  dominant_color_opaque: string;
  url: string;
  is_main: boolean;
  thumbnails: Thumbnail2[];
  high_resolution: HighResolution2;
  is_suspicious: boolean;
  full_size_url: string;
  is_hidden: boolean;
}

export interface SearchTrackingParams {
  score: number;
  matched_queries?: any;
}

export interface Item {
  id: number;
  title: string;
  price: string;
  discount?: any;
  currency: string;
  brand_title: string;
  is_for_swap: boolean;
  user: User;
  url: string;
  promoted: boolean;
  photo: Photo2;
  favourite_count: number;
  is_favourite: boolean;
  favourite_group_id?: any;
  badge?: any;
  conversion?: any;
  service_fee: string;
  total_item_price: string;
  view_count: number;
  size_title: string;
  content_source: string;
  search_tracking_params: SearchTrackingParams;
}

export interface DominantBrand {
  id: number;
  title: string;
  slug: string;
  favourite_count: number;
  pretty_favourite_count: string;
  item_count: number;
  pretty_item_count: string;
  is_visible_in_listings: boolean;
  path: string;
  requires_authenticity_check: boolean;
  is_luxury: boolean;
  url: string;
  is_favourite: boolean;
}

export interface SearchTrackingParams2 {
  search_correlation_id: string;
  search_session_id: string;
  global_search_session_id: string;
}

export interface Pagination {
  current_page: number;
  total_pages: number;
  total_entries: number;
  per_page: number;
  time: number;
}

export interface VintedSearchResult {
  items: Item[];
  dominant_brand: DominantBrand;
  search_tracking_params: SearchTrackingParams2;
  pagination: Pagination;
  code: number;
  proxy?: string;
}
