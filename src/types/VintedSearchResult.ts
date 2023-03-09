import type { HighResolution, HighResolution2, Thumbnail, Thumbnail2 } from "./VintedItem";
import type { VintedPaginatedResponse } from "./VintedResponse";

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

export interface Photo2 {
  dominant_color: string;
  dominant_color_opaque: string;
  full_size_url: string;
  height: number;
  high_resolution: HighResolution2;
  id: any;
  image_no: number;
  is_hidden: boolean;
  is_main: boolean;
  is_suspicious: boolean;
  thumbnails: Thumbnail2[];
  url: string;
  width: number;
}

export interface User {
  id: number;
  login: string;
  business: boolean;
  profile_url: string;
  photo: Photo;
}

export interface SearchTrackingParams {
  score: number;
  matched_queries?: any;
}

export interface Item {
  id: number;
  title: string;
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

export interface VintedSearchResult extends VintedPaginatedResponse {
  items: Item[];
  dominant_brand: DominantBrand;
  search_tracking_params: SearchTrackingParams2;
}
