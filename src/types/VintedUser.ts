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

export interface Email {
  valid: boolean;
  available: boolean;
}

export interface Facebook {
  valid: boolean;
  verified_at?: any;
  available: boolean;
}

export interface Google {
  valid: boolean;
  verified_at: Date;
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

export interface User {
  id: number;
  anon_id: string;
  login: string;
  real_name?: any;
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
  created_at: Date;
  last_loged_on_ts: Date;
  city_id?: any;
  city: string;
  country_id: number;
  country_code: string;
  country_iso_code: string;
  country_title_local: string;
  country_title: string;
  contacts_permission?: any;
  contacts?: any;
  photo: Photo;
  path: string;
  is_god: boolean;
  is_tester: boolean;
  moderator: boolean;
  hide_feedback: boolean;
  can_post_big_forum_photos: boolean;
  allow_direct_messaging: boolean;
  bundle_discount?: any;
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
  default_address?: any;
}

export interface VintedUser {
  user: User;
  code: number;
  proxy: string;
}
