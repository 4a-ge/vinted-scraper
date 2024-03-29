import type { VintedResponse } from "./VintedResponse";

export interface Thumbnail {
  type: string;
  url: string;
  width: number;
  height: number;
  original_size?: boolean | null;
}

export interface HighResolution {
  id: string;
  timestamp: number;
  orientation?: any;
}

export interface Photo {
  id: number;
  image_no: number;
  width: number;
  height: number;
  dominant_color: string;
  dominant_color_opaque: string;
  url: string;
  is_main: boolean;
  thumbnails: Thumbnail[];
  high_resolution: HighResolution;
  is_suspicious: boolean;
  full_size_url: string;
  is_hidden: boolean;
  extra: unknown;
}

export interface Thumbnail2 {
  type: string;
  url: string;
  width: number;
  height: number;
  original_size?: any;
}

export interface HighResolution2 {
  id: string;
  timestamp: number;
  orientation?: any;
}

export interface Photo2 {
  id: number;
  width: number;
  height: number;
  temp_uuid?: any;
  url: string;
  dominant_color: string;
  dominant_color_opaque: string;
  thumbnails: Thumbnail2[];
  is_suspicious: boolean;
  orientation?: any;
  reaction?: any;
  high_resolution: HighResolution2;
  full_size_url: string;
  is_hidden: boolean;
  extra?: unknown;
}

export interface Discount {
  minimal_item_count: number;
  fraction: string;
}

export interface BundleDiscount {
  id: number;
  user_id: number;
  enabled: boolean;
  minimal_item_count: number;
  fraction: string;
  discounts: Discount[];
}

export interface Email {
  valid: boolean;
  available: boolean;
}

export interface Facebook {
  valid: boolean | null;
  verified_at: Date;
  available: boolean;
}

export interface Google {
  valid: boolean;
  verified_at?: any;
  available: boolean;
}

export interface Phone {
  valid: boolean;
  verified_at?: any;
  available: boolean;
}

export interface Verification {
  email: Email;
  facebook: Facebook;
  google: Google;
  phone: Phone;
}

export interface AcceptedPayInMethod {
  id: number;
  code: string;
  requires_credit_card: boolean;
  event_tracking_code: string;
  icon: string;
  enabled: boolean;
  translated_name: string;
  note: string;
}

export interface Price {
  amount: string;
  currency_code: string;
}

export interface User {
  id: number;
  anon_id: string;
  login: string;
  real_name?: any | null;
  email?: any;
  birthday?: any;
  gender: string;
  item_count: number;
  msg_template_count: number;
  given_item_count: number;
  taken_item_count: number;
  favourite_topic_count: number;
  forum_msg_count: number;
  forum_topic_count: number;
  followers_count: number;
  following_count: number;
  following_brands_count: number;
  positive_feedback_count: number;
  neutral_feedback_count: number;
  negative_feedback_count: number;
  meeting_transaction_count: number;
  account_status: number;
  email_bounces?: any;
  feedback_reputation: number;
  account_ban_date?: any;
  is_account_ban_permanent?: any;
  is_forum_ban_permanent?: any;
  is_on_holiday: boolean;
  is_publish_photos_agreed: boolean;
  expose_location: boolean;
  third_party_tracking: boolean;
  default_address?: any;
  created_at: Date;
  last_loged_on_ts: Date;
  city_id: number;
  city: string;
  country_id: number;
  country_code: string;
  country_iso_code: string;
  country_title_local: string;
  country_title: string;
  contacts_permission?: any;
  contacts?: any;
  photo: Photo2;
  path: string;
  is_god: boolean;
  is_tester: boolean;
  moderator: boolean;
  hide_feedback: boolean;
  can_post_big_forum_photos: boolean;
  allow_direct_messaging: boolean;
  bundle_discount: BundleDiscount;
  donation_configuration?: any;
  fundraiser?: any;
  business: boolean;
  business_account?: any;
  has_ship_fast_badge: boolean;
  total_items_count: number;
  about: string;
  verification: Verification;
  closet_promoted_until?: any;
  avg_response_time?: any;
  carrier_ids: number[];
  carriers_without_custom_ids: number[];
  locale: string;
  updated_on: number;
  is_hated: boolean;
  hates_you: boolean;
  is_favourite: boolean;
  profile_url: string;
  share_profile_url: string;
  facebook_user_id?: any;
  is_online: boolean;
  has_promoted_closet: boolean;
  can_view_profile: boolean;
  can_bundle: boolean;
  last_loged_on: string;
  accepted_pay_in_methods: AcceptedPayInMethod[];
  localization: string;
}

export interface BrandDto {
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

export interface AcceptedPayInMethod2 {
  id: number;
  code: string;
  requires_credit_card: boolean;
  event_tracking_code: string;
  icon: string;
  enabled: boolean;
  translated_name: string;
  note: string;
}

export interface Item {
  id: number;
  title: string;
  brand_id: number;
  size_id: number;
  status_id: number;
  disposal_conditions: number;
  user_id: number;
  owner_id?: any;
  country_id: number;
  catalog_id: number;
  color1_id: number;
  color2_id?: any;
  package_size_id: number;
  is_hidden: number;
  is_reserved: number;
  reserved_for_user_id?: any;
  is_visible: number;
  is_unisex: number;
  is_closed: number;
  is_admin_alerted: boolean;
  active_bid_count: number;
  favourite_count: number;
  view_count: number;
  moderation_status: number;
  last_push_up_at: Date;
  description: string;
  package_size_standard: boolean;
  item_closing_action?: any;
  related_catalog_ids: any[];
  related_catalogs_enabled: boolean;
  size: string;
  brand: string;
  composition: string;
  extra_conditions: string;
  is_for_sell: boolean;
  is_for_swap: boolean;
  is_for_give_away: boolean;
  is_handicraft: boolean;
  is_draft: boolean;
  label: string;
  real_value_numeric?: any;
  original_price_numeric: string;
  currency: string;
  price_numeric: string;
  created_at_ts: Date;
  updated_at_ts: Date;
  user_updated_at_ts: Date;
  photos: Photo[];
  push_up_interval: number;
  can_be_sold: boolean;
  can_feedback: boolean;
  path: string;
  possible_to_request_reservation: boolean;
  item_reservation_id?: any;
  receiver_id?: any;
  promoted_until?: any;
  discount_price_numeric?: any;
  reservation_requests_from_users: any[];
  material_id?: any;
  author?: any;
  book_title?: any;
  isbn?: any;
  measurement_width?: any;
  measurement_length?: any;
  transaction_permitted: boolean;
  video_game_rating_id?: any;
  user: User;
  service_fee: string;
  total_item_price: string;
  price: Price;
  discount_price: string | null;
  real_value: string;
  can_edit: boolean;
  can_delete: boolean;
  can_request_reservation: boolean;
  can_cancel_reservation_request: boolean;
  can_reserve: boolean;
  can_transfer: boolean;
  instant_buy: boolean;
  can_close: boolean;
  can_buy: boolean;
  can_bundle: boolean;
  can_ask_seller: boolean;
  can_favourite: boolean;
  user_login: string;
  city_id: number;
  city: string;
  country: string;
  promoted: boolean;
  is_mobile: boolean;
  bump_badge_visible: boolean;
  brand_dto: BrandDto;
  url: string;
  accepted_pay_in_methods: AcceptedPayInMethod2[];
  created_at: string;
  color1: string;
  color2?: any;
  material?: any;
  video_game_rating?: any;
  status: string;
  is_favourite: boolean;
  favourite_group_id?: any;
  performance?: any;
  stats_visible: boolean;
  can_push_up: boolean;
  badge?: any;
  size_guide_faq_entry_id: number;
  localization: string;
  free_return_img: string;
}

export interface VintedItemResponse extends VintedResponse {
  item: Item;
}
