/* eslint-disable */
export enum AdjustmentType {
  DISTRIBUTED_ORDER_PROMOTION = "DISTRIBUTED_ORDER_PROMOTION",
  OTHER = "OTHER",
  PROMOTION = "PROMOTION",
}

export enum AssetType {
  BINARY = "BINARY",
  IMAGE = "IMAGE",
  VIDEO = "VIDEO",
}

export enum BannerPosition {
  HomePage = "HomePage",
}

export enum CampaignType {
  /** All user fixed amount campaign, with coupon code */
  AllUserFixedAmount = "AllUserFixedAmount",
  /** Buy one get one free + lens discount */
  BuyXGetYFreeWithLensDiscount = "BuyXGetYFreeWithLensDiscount",
  /** Holiday direct discount campaign */
  DirectDiscount = "DirectDiscount",
  /** New user first pair campaign */
  NewUserFirstPair = "NewUserFirstPair",
  /** New user fixed amount new user campaign, with coupon code */
  NewUserFixedAmount = "NewUserFixedAmount",
}

/**
 * @description
 * ISO 4217 currency code
 *
 * @docsCategory common
 */
export enum CurrencyCode {
  /** United Arab Emirates dirham */
  AED = "AED",
  /** Afghan afghani */
  AFN = "AFN",
  /** Albanian lek */
  ALL = "ALL",
  /** Armenian dram */
  AMD = "AMD",
  /** Netherlands Antillean guilder */
  ANG = "ANG",
  /** Angolan kwanza */
  AOA = "AOA",
  /** Argentine peso */
  ARS = "ARS",
  /** Australian dollar */
  AUD = "AUD",
  /** Aruban florin */
  AWG = "AWG",
  /** Azerbaijani manat */
  AZN = "AZN",
  /** Bosnia and Herzegovina convertible mark */
  BAM = "BAM",
  /** Barbados dollar */
  BBD = "BBD",
  /** Bangladeshi taka */
  BDT = "BDT",
  /** Bulgarian lev */
  BGN = "BGN",
  /** Bahraini dinar */
  BHD = "BHD",
  /** Burundian franc */
  BIF = "BIF",
  /** Bermudian dollar */
  BMD = "BMD",
  /** Brunei dollar */
  BND = "BND",
  /** Boliviano */
  BOB = "BOB",
  /** Brazilian real */
  BRL = "BRL",
  /** Bahamian dollar */
  BSD = "BSD",
  /** Bhutanese ngultrum */
  BTN = "BTN",
  /** Botswana pula */
  BWP = "BWP",
  /** Belarusian ruble */
  BYN = "BYN",
  /** Belize dollar */
  BZD = "BZD",
  /** Canadian dollar */
  CAD = "CAD",
  /** Congolese franc */
  CDF = "CDF",
  /** Swiss franc */
  CHF = "CHF",
  /** Chilean peso */
  CLP = "CLP",
  /** Renminbi (Chinese) yuan */
  CNY = "CNY",
  /** Colombian peso */
  COP = "COP",
  /** Costa Rican colon */
  CRC = "CRC",
  /** Cuban convertible peso */
  CUC = "CUC",
  /** Cuban peso */
  CUP = "CUP",
  /** Cape Verde escudo */
  CVE = "CVE",
  /** Czech koruna */
  CZK = "CZK",
  /** Djiboutian franc */
  DJF = "DJF",
  /** Danish krone */
  DKK = "DKK",
  /** Dominican peso */
  DOP = "DOP",
  /** Algerian dinar */
  DZD = "DZD",
  /** Egyptian pound */
  EGP = "EGP",
  /** Eritrean nakfa */
  ERN = "ERN",
  /** Ethiopian birr */
  ETB = "ETB",
  /** Euro */
  EUR = "EUR",
  /** Fiji dollar */
  FJD = "FJD",
  /** Falkland Islands pound */
  FKP = "FKP",
  /** Pound sterling */
  GBP = "GBP",
  /** Georgian lari */
  GEL = "GEL",
  /** Ghanaian cedi */
  GHS = "GHS",
  /** Gibraltar pound */
  GIP = "GIP",
  /** Gambian dalasi */
  GMD = "GMD",
  /** Guinean franc */
  GNF = "GNF",
  /** Guatemalan quetzal */
  GTQ = "GTQ",
  /** Guyanese dollar */
  GYD = "GYD",
  /** Hong Kong dollar */
  HKD = "HKD",
  /** Honduran lempira */
  HNL = "HNL",
  /** Croatian kuna */
  HRK = "HRK",
  /** Haitian gourde */
  HTG = "HTG",
  /** Hungarian forint */
  HUF = "HUF",
  /** Indonesian rupiah */
  IDR = "IDR",
  /** Israeli new shekel */
  ILS = "ILS",
  /** Indian rupee */
  INR = "INR",
  /** Iraqi dinar */
  IQD = "IQD",
  /** Iranian rial */
  IRR = "IRR",
  /** Icelandic króna */
  ISK = "ISK",
  /** Jamaican dollar */
  JMD = "JMD",
  /** Jordanian dinar */
  JOD = "JOD",
  /** Japanese yen */
  JPY = "JPY",
  /** Kenyan shilling */
  KES = "KES",
  /** Kyrgyzstani som */
  KGS = "KGS",
  /** Cambodian riel */
  KHR = "KHR",
  /** Comoro franc */
  KMF = "KMF",
  /** North Korean won */
  KPW = "KPW",
  /** South Korean won */
  KRW = "KRW",
  /** Kuwaiti dinar */
  KWD = "KWD",
  /** Cayman Islands dollar */
  KYD = "KYD",
  /** Kazakhstani tenge */
  KZT = "KZT",
  /** Lao kip */
  LAK = "LAK",
  /** Lebanese pound */
  LBP = "LBP",
  /** Sri Lankan rupee */
  LKR = "LKR",
  /** Liberian dollar */
  LRD = "LRD",
  /** Lesotho loti */
  LSL = "LSL",
  /** Libyan dinar */
  LYD = "LYD",
  /** Moroccan dirham */
  MAD = "MAD",
  /** Moldovan leu */
  MDL = "MDL",
  /** Malagasy ariary */
  MGA = "MGA",
  /** Macedonian denar */
  MKD = "MKD",
  /** Myanmar kyat */
  MMK = "MMK",
  /** Mongolian tögrög */
  MNT = "MNT",
  /** Macanese pataca */
  MOP = "MOP",
  /** Mauritanian ouguiya */
  MRU = "MRU",
  /** Mauritian rupee */
  MUR = "MUR",
  /** Maldivian rufiyaa */
  MVR = "MVR",
  /** Malawian kwacha */
  MWK = "MWK",
  /** Mexican peso */
  MXN = "MXN",
  /** Malaysian ringgit */
  MYR = "MYR",
  /** Mozambican metical */
  MZN = "MZN",
  /** Namibian dollar */
  NAD = "NAD",
  /** Nigerian naira */
  NGN = "NGN",
  /** Nicaraguan córdoba */
  NIO = "NIO",
  /** Norwegian krone */
  NOK = "NOK",
  /** Nepalese rupee */
  NPR = "NPR",
  /** New Zealand dollar */
  NZD = "NZD",
  /** Omani rial */
  OMR = "OMR",
  /** Panamanian balboa */
  PAB = "PAB",
  /** Peruvian sol */
  PEN = "PEN",
  /** Papua New Guinean kina */
  PGK = "PGK",
  /** Philippine peso */
  PHP = "PHP",
  /** Pakistani rupee */
  PKR = "PKR",
  /** Polish złoty */
  PLN = "PLN",
  /** Paraguayan guaraní */
  PYG = "PYG",
  /** Qatari riyal */
  QAR = "QAR",
  /** Romanian leu */
  RON = "RON",
  /** Serbian dinar */
  RSD = "RSD",
  /** Russian ruble */
  RUB = "RUB",
  /** Rwandan franc */
  RWF = "RWF",
  /** Saudi riyal */
  SAR = "SAR",
  /** Solomon Islands dollar */
  SBD = "SBD",
  /** Seychelles rupee */
  SCR = "SCR",
  /** Sudanese pound */
  SDG = "SDG",
  /** Swedish krona/kronor */
  SEK = "SEK",
  /** Singapore dollar */
  SGD = "SGD",
  /** Saint Helena pound */
  SHP = "SHP",
  /** Sierra Leonean leone */
  SLL = "SLL",
  /** Somali shilling */
  SOS = "SOS",
  /** Surinamese dollar */
  SRD = "SRD",
  /** South Sudanese pound */
  SSP = "SSP",
  /** São Tomé and Príncipe dobra */
  STN = "STN",
  /** Salvadoran colón */
  SVC = "SVC",
  /** Syrian pound */
  SYP = "SYP",
  /** Swazi lilangeni */
  SZL = "SZL",
  /** Thai baht */
  THB = "THB",
  /** Tajikistani somoni */
  TJS = "TJS",
  /** Turkmenistan manat */
  TMT = "TMT",
  /** Tunisian dinar */
  TND = "TND",
  /** Tongan paʻanga */
  TOP = "TOP",
  /** Turkish lira */
  TRY = "TRY",
  /** Trinidad and Tobago dollar */
  TTD = "TTD",
  /** New Taiwan dollar */
  TWD = "TWD",
  /** Tanzanian shilling */
  TZS = "TZS",
  /** Ukrainian hryvnia */
  UAH = "UAH",
  /** Ugandan shilling */
  UGX = "UGX",
  /** United States dollar */
  USD = "USD",
  /** Uruguayan peso */
  UYU = "UYU",
  /** Uzbekistan som */
  UZS = "UZS",
  /** Venezuelan bolívar soberano */
  VES = "VES",
  /** Vietnamese đồng */
  VND = "VND",
  /** Vanuatu vatu */
  VUV = "VUV",
  /** Samoan tala */
  WST = "WST",
  /** CFA franc BEAC */
  XAF = "XAF",
  /** East Caribbean dollar */
  XCD = "XCD",
  /** CFA franc BCEAO */
  XOF = "XOF",
  /** CFP franc (franc Pacifique) */
  XPF = "XPF",
  /** Yemeni rial */
  YER = "YER",
  /** South African rand */
  ZAR = "ZAR",
  /** Zambian kwacha */
  ZMW = "ZMW",
  /** Zimbabwean dollar */
  ZWL = "ZWL",
}

export enum DeletionResult {
  /** The entity was successfully deleted */
  DELETED = "DELETED",
  /** Deletion did not take place, reason given in message */
  NOT_DELETED = "NOT_DELETED",
}

export enum EdmGeneratorType {
  html = "html",
  mjml = "mjml",
  noop = "noop",
}

export enum EdmTaskPlanState {
  Completed = "Completed",
  Initialized = "Initialized",
  Stopped = "Stopped",
  Suspended = "Suspended",
}

export enum EmailGeneratorType {
  html = "html",
  mjml = "mjml",
  noop = "noop",
  react = "react",
}

export enum ErrorCode {
  ALREADY_REFUNDED_ERROR = "ALREADY_REFUNDED_ERROR",
  CANCEL_ACTIVE_ORDER_ERROR = "CANCEL_ACTIVE_ORDER_ERROR",
  CANCEL_PAYMENT_ERROR = "CANCEL_PAYMENT_ERROR",
  CHANNEL_DEFAULT_LANGUAGE_ERROR = "CHANNEL_DEFAULT_LANGUAGE_ERROR",
  COUPON_CODE_EXPIRED_ERROR = "COUPON_CODE_EXPIRED_ERROR",
  COUPON_CODE_INVALID_ERROR = "COUPON_CODE_INVALID_ERROR",
  COUPON_CODE_LIMIT_ERROR = "COUPON_CODE_LIMIT_ERROR",
  CREATE_FULFILLMENT_ERROR = "CREATE_FULFILLMENT_ERROR",
  DUPLICATE_ENTITY_ERROR = "DUPLICATE_ENTITY_ERROR",
  EMAIL_ADDRESS_CONFLICT_ERROR = "EMAIL_ADDRESS_CONFLICT_ERROR",
  EMPTY_ORDER_LINE_SELECTION_ERROR = "EMPTY_ORDER_LINE_SELECTION_ERROR",
  FACET_IN_USE_ERROR = "FACET_IN_USE_ERROR",
  FULFILLMENT_STATE_TRANSITION_ERROR = "FULFILLMENT_STATE_TRANSITION_ERROR",
  GUEST_CHECKOUT_ERROR = "GUEST_CHECKOUT_ERROR",
  INELIGIBLE_SHIPPING_METHOD_ERROR = "INELIGIBLE_SHIPPING_METHOD_ERROR",
  INSUFFICIENT_STOCK_ERROR = "INSUFFICIENT_STOCK_ERROR",
  INSUFFICIENT_STOCK_ON_HAND_ERROR = "INSUFFICIENT_STOCK_ON_HAND_ERROR",
  INVALID_CREDENTIALS_ERROR = "INVALID_CREDENTIALS_ERROR",
  INVALID_FULFILLMENT_HANDLER_ERROR = "INVALID_FULFILLMENT_HANDLER_ERROR",
  ITEMS_ALREADY_FULFILLED_ERROR = "ITEMS_ALREADY_FULFILLED_ERROR",
  LANGUAGE_NOT_AVAILABLE_ERROR = "LANGUAGE_NOT_AVAILABLE_ERROR",
  MANUAL_PAYMENT_STATE_ERROR = "MANUAL_PAYMENT_STATE_ERROR",
  MIME_TYPE_ERROR = "MIME_TYPE_ERROR",
  MISSING_CONDITIONS_ERROR = "MISSING_CONDITIONS_ERROR",
  MULTIPLE_ORDER_ERROR = "MULTIPLE_ORDER_ERROR",
  NATIVE_AUTH_STRATEGY_ERROR = "NATIVE_AUTH_STRATEGY_ERROR",
  NEGATIVE_QUANTITY_ERROR = "NEGATIVE_QUANTITY_ERROR",
  NOTHING_TO_REFUND_ERROR = "NOTHING_TO_REFUND_ERROR",
  NO_ACTIVE_ORDER_ERROR = "NO_ACTIVE_ORDER_ERROR",
  NO_CHANGES_SPECIFIED_ERROR = "NO_CHANGES_SPECIFIED_ERROR",
  ORDER_LIMIT_ERROR = "ORDER_LIMIT_ERROR",
  ORDER_MODIFICATION_ERROR = "ORDER_MODIFICATION_ERROR",
  ORDER_MODIFICATION_STATE_ERROR = "ORDER_MODIFICATION_STATE_ERROR",
  ORDER_STATE_TRANSITION_ERROR = "ORDER_STATE_TRANSITION_ERROR",
  PAYMENT_METHOD_MISSING_ERROR = "PAYMENT_METHOD_MISSING_ERROR",
  PAYMENT_ORDER_MISMATCH_ERROR = "PAYMENT_ORDER_MISMATCH_ERROR",
  PAYMENT_STATE_TRANSITION_ERROR = "PAYMENT_STATE_TRANSITION_ERROR",
  PRODUCT_OPTION_IN_USE_ERROR = "PRODUCT_OPTION_IN_USE_ERROR",
  QUANTITY_TOO_GREAT_ERROR = "QUANTITY_TOO_GREAT_ERROR",
  REFUND_AMOUNT_ERROR = "REFUND_AMOUNT_ERROR",
  REFUND_ORDER_STATE_ERROR = "REFUND_ORDER_STATE_ERROR",
  REFUND_PAYMENT_ID_MISSING_ERROR = "REFUND_PAYMENT_ID_MISSING_ERROR",
  REFUND_STATE_TRANSITION_ERROR = "REFUND_STATE_TRANSITION_ERROR",
  SETTLE_PAYMENT_ERROR = "SETTLE_PAYMENT_ERROR",
  UNKNOWN_ERROR = "UNKNOWN_ERROR",
}

export enum GlobalFlag {
  FALSE = "FALSE",
  INHERIT = "INHERIT",
  TRUE = "TRUE",
}

export enum HistoryEntryType {
  CUSTOMER_ADDED_TO_GROUP = "CUSTOMER_ADDED_TO_GROUP",
  CUSTOMER_ADDRESS_CREATED = "CUSTOMER_ADDRESS_CREATED",
  CUSTOMER_ADDRESS_DELETED = "CUSTOMER_ADDRESS_DELETED",
  CUSTOMER_ADDRESS_UPDATED = "CUSTOMER_ADDRESS_UPDATED",
  CUSTOMER_DETAIL_UPDATED = "CUSTOMER_DETAIL_UPDATED",
  CUSTOMER_EMAIL_UPDATE_REQUESTED = "CUSTOMER_EMAIL_UPDATE_REQUESTED",
  CUSTOMER_EMAIL_UPDATE_VERIFIED = "CUSTOMER_EMAIL_UPDATE_VERIFIED",
  CUSTOMER_NOTE = "CUSTOMER_NOTE",
  CUSTOMER_PASSWORD_RESET_REQUESTED = "CUSTOMER_PASSWORD_RESET_REQUESTED",
  CUSTOMER_PASSWORD_RESET_VERIFIED = "CUSTOMER_PASSWORD_RESET_VERIFIED",
  CUSTOMER_PASSWORD_UPDATED = "CUSTOMER_PASSWORD_UPDATED",
  CUSTOMER_REGISTERED = "CUSTOMER_REGISTERED",
  CUSTOMER_REMOVED_FROM_GROUP = "CUSTOMER_REMOVED_FROM_GROUP",
  CUSTOMER_VERIFIED = "CUSTOMER_VERIFIED",
  ORDER_CANCELLATION = "ORDER_CANCELLATION",
  ORDER_COUPON_APPLIED = "ORDER_COUPON_APPLIED",
  ORDER_COUPON_REMOVED = "ORDER_COUPON_REMOVED",
  ORDER_CUSTOMER_UPDATED = "ORDER_CUSTOMER_UPDATED",
  ORDER_FULFILLMENT = "ORDER_FULFILLMENT",
  ORDER_FULFILLMENT_TRANSITION = "ORDER_FULFILLMENT_TRANSITION",
  ORDER_MODIFIED = "ORDER_MODIFIED",
  ORDER_NOTE = "ORDER_NOTE",
  ORDER_PAYMENT_TRANSITION = "ORDER_PAYMENT_TRANSITION",
  ORDER_REFUND_TRANSITION = "ORDER_REFUND_TRANSITION",
  ORDER_STATE_TRANSITION = "ORDER_STATE_TRANSITION",
}

export enum HyperseMetricInterval {
  MONTHLY = "MONTHLY",
  WEEKLY = "WEEKLY",
}

export enum InvoiceType {
  Invoice = "Invoice",
  Order = "Order",
}

/**
 * @description
 * The state of a Job in the JobQueue
 *
 * @docsCategory common
 */
export enum JobState {
  CANCELLED = "CANCELLED",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  PENDING = "PENDING",
  RETRYING = "RETRYING",
  RUNNING = "RUNNING",
}

/**
 * @description
 * Languages in the form of a ISO 639-1 language code with optional
 * region or script modifier (e.g. de_AT). The selection available is based
 * on the [Unicode CLDR summary list](https://unicode-org.github.io/cldr-staging/charts/37/summary/root.html)
 * and includes the major spoken languages of the world and any widely-used variants.
 *
 * @docsCategory common
 */
export enum LanguageCode {
  /** Afrikaans */
  af = "af",
  /** Akan */
  ak = "ak",
  /** Amharic */
  am = "am",
  /** Arabic */
  ar = "ar",
  /** Assamese */
  as = "as",
  /** Azerbaijani */
  az = "az",
  /** Belarusian */
  be = "be",
  /** Bulgarian */
  bg = "bg",
  /** Bambara */
  bm = "bm",
  /** Bangla */
  bn = "bn",
  /** Tibetan */
  bo = "bo",
  /** Breton */
  br = "br",
  /** Bosnian */
  bs = "bs",
  /** Catalan */
  ca = "ca",
  /** Chechen */
  ce = "ce",
  /** Corsican */
  co = "co",
  /** Czech */
  cs = "cs",
  /** Church Slavic */
  cu = "cu",
  /** Welsh */
  cy = "cy",
  /** Danish */
  da = "da",
  /** German */
  de = "de",
  /** Austrian German */
  de_AT = "de_AT",
  /** Swiss High German */
  de_CH = "de_CH",
  /** Dzongkha */
  dz = "dz",
  /** Ewe */
  ee = "ee",
  /** Greek */
  el = "el",
  /** English */
  en = "en",
  /** Australian English */
  en_AU = "en_AU",
  /** Canadian English */
  en_CA = "en_CA",
  /** British English */
  en_GB = "en_GB",
  /** American English */
  en_US = "en_US",
  /** Esperanto */
  eo = "eo",
  /** Spanish */
  es = "es",
  /** European Spanish */
  es_ES = "es_ES",
  /** Mexican Spanish */
  es_MX = "es_MX",
  /** Estonian */
  et = "et",
  /** Basque */
  eu = "eu",
  /** Persian */
  fa = "fa",
  /** Dari */
  fa_AF = "fa_AF",
  /** Fulah */
  ff = "ff",
  /** Finnish */
  fi = "fi",
  /** Faroese */
  fo = "fo",
  /** French */
  fr = "fr",
  /** Canadian French */
  fr_CA = "fr_CA",
  /** Swiss French */
  fr_CH = "fr_CH",
  /** Western Frisian */
  fy = "fy",
  /** Irish */
  ga = "ga",
  /** Scottish Gaelic */
  gd = "gd",
  /** Galician */
  gl = "gl",
  /** Gujarati */
  gu = "gu",
  /** Manx */
  gv = "gv",
  /** Hausa */
  ha = "ha",
  /** Hebrew */
  he = "he",
  /** Hindi */
  hi = "hi",
  /** Croatian */
  hr = "hr",
  /** Haitian Creole */
  ht = "ht",
  /** Hungarian */
  hu = "hu",
  /** Armenian */
  hy = "hy",
  /** Interlingua */
  ia = "ia",
  /** Indonesian */
  id = "id",
  /** Igbo */
  ig = "ig",
  /** Sichuan Yi */
  ii = "ii",
  /** Icelandic */
  is = "is",
  /** Italian */
  it = "it",
  /** Japanese */
  ja = "ja",
  /** Javanese */
  jv = "jv",
  /** Georgian */
  ka = "ka",
  /** Kikuyu */
  ki = "ki",
  /** Kazakh */
  kk = "kk",
  /** Kalaallisut */
  kl = "kl",
  /** Khmer */
  km = "km",
  /** Kannada */
  kn = "kn",
  /** Korean */
  ko = "ko",
  /** Kashmiri */
  ks = "ks",
  /** Kurdish */
  ku = "ku",
  /** Cornish */
  kw = "kw",
  /** Kyrgyz */
  ky = "ky",
  /** Latin */
  la = "la",
  /** Luxembourgish */
  lb = "lb",
  /** Ganda */
  lg = "lg",
  /** Lingala */
  ln = "ln",
  /** Lao */
  lo = "lo",
  /** Lithuanian */
  lt = "lt",
  /** Luba-Katanga */
  lu = "lu",
  /** Latvian */
  lv = "lv",
  /** Malagasy */
  mg = "mg",
  /** Maori */
  mi = "mi",
  /** Macedonian */
  mk = "mk",
  /** Malayalam */
  ml = "ml",
  /** Mongolian */
  mn = "mn",
  /** Marathi */
  mr = "mr",
  /** Malay */
  ms = "ms",
  /** Maltese */
  mt = "mt",
  /** Burmese */
  my = "my",
  /** Norwegian Bokmål */
  nb = "nb",
  /** North Ndebele */
  nd = "nd",
  /** Nepali */
  ne = "ne",
  /** Dutch */
  nl = "nl",
  /** Flemish */
  nl_BE = "nl_BE",
  /** Norwegian Nynorsk */
  nn = "nn",
  /** Nyanja */
  ny = "ny",
  /** Oromo */
  om = "om",
  /** Odia */
  or = "or",
  /** Ossetic */
  os = "os",
  /** Punjabi */
  pa = "pa",
  /** Polish */
  pl = "pl",
  /** Pashto */
  ps = "ps",
  /** Portuguese */
  pt = "pt",
  /** Brazilian Portuguese */
  pt_BR = "pt_BR",
  /** European Portuguese */
  pt_PT = "pt_PT",
  /** Quechua */
  qu = "qu",
  /** Romansh */
  rm = "rm",
  /** Rundi */
  rn = "rn",
  /** Romanian */
  ro = "ro",
  /** Moldavian */
  ro_MD = "ro_MD",
  /** Russian */
  ru = "ru",
  /** Kinyarwanda */
  rw = "rw",
  /** Sanskrit */
  sa = "sa",
  /** Sindhi */
  sd = "sd",
  /** Northern Sami */
  se = "se",
  /** Sango */
  sg = "sg",
  /** Sinhala */
  si = "si",
  /** Slovak */
  sk = "sk",
  /** Slovenian */
  sl = "sl",
  /** Samoan */
  sm = "sm",
  /** Shona */
  sn = "sn",
  /** Somali */
  so = "so",
  /** Albanian */
  sq = "sq",
  /** Serbian */
  sr = "sr",
  /** Southern Sotho */
  st = "st",
  /** Sundanese */
  su = "su",
  /** Swedish */
  sv = "sv",
  /** Swahili */
  sw = "sw",
  /** Congo Swahili */
  sw_CD = "sw_CD",
  /** Tamil */
  ta = "ta",
  /** Telugu */
  te = "te",
  /** Tajik */
  tg = "tg",
  /** Thai */
  th = "th",
  /** Tigrinya */
  ti = "ti",
  /** Turkmen */
  tk = "tk",
  /** Tongan */
  to = "to",
  /** Turkish */
  tr = "tr",
  /** Tatar */
  tt = "tt",
  /** Uyghur */
  ug = "ug",
  /** Ukrainian */
  uk = "uk",
  /** Urdu */
  ur = "ur",
  /** Uzbek */
  uz = "uz",
  /** Vietnamese */
  vi = "vi",
  /** Volapük */
  vo = "vo",
  /** Wolof */
  wo = "wo",
  /** Xhosa */
  xh = "xh",
  /** Yiddish */
  yi = "yi",
  /** Yoruba */
  yo = "yo",
  /** Chinese */
  zh = "zh",
  /** Simplified Chinese */
  zh_Hans = "zh_Hans",
  /** Traditional Chinese */
  zh_Hant = "zh_Hant",
  /** Zulu */
  zu = "zu",
}

export enum LensOptionUiComponentsType {
  CHECK_BOX = "CHECK_BOX",
  COLOR_BOX = "COLOR_BOX",
  TEXT = "TEXT",
}

/** 镜片流程原子选项的唯一标识符号,部分无须参与规则运算的选项模块为可选项. */
export enum LensProcessOptionKeys {
  /** T1用途: 看远 */
  T1_DISTANCE = "T1_DISTANCE",
  /** T1用途: 多焦点 */
  T1_MULTIFOCAL = "T1_MULTIFOCAL",
  /** T1用途: 多焦点/双光 */
  T1_MULTIFOCAL_BIFOCAL = "T1_MULTIFOCAL_BIFOCAL",
  /** T1用途: 多焦点/高级渐进 */
  T1_MULTIFOCAL_PREMIUM_PROGRESSIVE = "T1_MULTIFOCAL_PREMIUM_PROGRESSIVE",
  /** T1用途: 多焦点/渐进 */
  T1_MULTIFOCAL_PROGRESSIVE = "T1_MULTIFOCAL_PROGRESSIVE",
  /** T1用途: 平光 */
  T1_NON_PRESCRIPTION = "T1_NON_PRESCRIPTION",
  /** T1用途: 老花 */
  T1_READING = "T1_READING",
  /** T1用途: 老花/看中 */
  T1_READING_INTERMEDIATE = "T1_READING_INTERMEDIATE",
  /** T1用途: 老花/看近 */
  T1_READING_READERS = "T1_READING_READERS",
  /** T2游泳镜, 项链镜等直接选度数的处方模块 */
  T2_RX_DEGREES = "T2_RX_DEGREES",
  /** T2直接选度数-项链镜-仅仅用到'DIRECT_DEGREES'规则动态选项数据源匹配 */
  T2_RX_DEGREES_NECK = "T2_RX_DEGREES_NECK",
  /** T2直接选度数-游泳镜-仅仅用到'DIRECT_DEGREES'规则动态选项数据源匹配 */
  T2_RX_DEGREES_SWIMMING = "T2_RX_DEGREES_SWIMMING",
  /** T2用户标准处方模块 */
  T2_RX_STANDARD = "T2_RX_STANDARD",
  /** T3防蓝光 */
  T3_BLUE = "T3_BLUE",
  /** T3防蓝光-普通 */
  T3_BLUE_BASIC = "T3_BLUE_BASIC",
  /** T3透明镜片 */
  T3_CLEAR = "T3_CLEAR",
  /** T3透明镜片-普通 */
  T3_CLEAR_BASIC = "T3_CLEAR_BASIC",
  /** T3变色镜片 */
  T3_LIGHT = "T3_LIGHT",
  /** T3普通变色 */
  T3_LIGHT_PHOTOCHROMIC = "T3_LIGHT_PHOTOCHROMIC",
  /** T3普通变色-棕色 */
  T3_LIGHT_PHOTOCHROMIC_BROWN = "T3_LIGHT_PHOTOCHROMIC_BROWN",
  /** T3普通变色-灰色 */
  T3_LIGHT_PHOTOCHROMIC_GRAY = "T3_LIGHT_PHOTOCHROMIC_GRAY",
  /** T3全视线变色 */
  T3_LIGHT_TRANSPHOTO = "T3_LIGHT_TRANSPHOTO",
  /** T3全视线变色-棕色 */
  T3_LIGHT_TRANSPHOTO_BROWN = "T3_LIGHT_TRANSPHOTO_BROWN",
  /** T3全视线变色-灰色 */
  T3_LIGHT_TRANSPHOTO_GRAY = "T3_LIGHT_TRANSPHOTO_GRAY",
  /** T3太阳镜 */
  T3_SUN = "T3_SUN",
  /** T3太阳镜-普通全染镜片 */
  T3_SUN_BASIC = "T3_SUN_BASIC",
  /** T3太阳镜-普通全染镜片-蓝色 */
  T3_SUN_BASIC_BLUE = "T3_SUN_BASIC_BLUE",
  /** T3太阳镜-普通全染镜片-棕色 */
  T3_SUN_BASIC_BROWN = "T3_SUN_BASIC_BROWN",
  /** T3太阳镜-普通全染镜片-灰色 */
  T3_SUN_BASIC_GRAY = "T3_SUN_BASIC_GRAY",
  /** T3太阳镜-普通全染镜片-绿色 */
  T3_SUN_BASIC_GREEN = "T3_SUN_BASIC_GREEN",
  /** T3太阳镜-普通全染镜片-橘色 */
  T3_SUN_BASIC_ORANGE = "T3_SUN_BASIC_ORANGE",
  /** T3太阳镜-普通全染镜片-粉红色 */
  T3_SUN_BASIC_PINK = "T3_SUN_BASIC_PINK",
  /** T3太阳镜-普通全染镜片-黄色 */
  T3_SUN_BASIC_YELLOW = "T3_SUN_BASIC_YELLOW",
  /** T3太阳镜-梯度渐染镜片 */
  T3_SUN_GRADIENT = "T3_SUN_GRADIENT",
  /** T3太阳镜-梯度渐染镜片-蓝色 */
  T3_SUN_GRADIENT_BLUE = "T3_SUN_GRADIENT_BLUE",
  /** T3太阳镜-梯度渐染镜片-棕色 */
  T3_SUN_GRADIENT_BROWN = "T3_SUN_GRADIENT_BROWN",
  /** T3太阳镜-梯度渐染镜片-灰色 */
  T3_SUN_GRADIENT_GRAY = "T3_SUN_GRADIENT_GRAY",
  /** T3太阳镜-梯度渐染镜片-绿色 */
  T3_SUN_GRADIENT_GREEN = "T3_SUN_GRADIENT_GREEN",
  /** T3太阳镜-梯度渐染镜片-紫色 */
  T3_SUN_GRADIENT_PURPLE = "T3_SUN_GRADIENT_PURPLE",
  /** T3太阳镜-镜面镜片 */
  T3_SUN_MIRRORED = "T3_SUN_MIRRORED",
  /** T3太阳镜-镜面镜片-琥珀色的玫瑰 */
  T3_SUN_MIRRORED_AMBERROSE = "T3_SUN_MIRRORED_AMBERROSE",
  /** T3太阳镜-镜面镜片-蓝色 */
  T3_SUN_MIRRORED_BLUE = "T3_SUN_MIRRORED_BLUE",
  /** T3太阳镜-镜面镜片-银色 */
  T3_SUN_MIRRORED_SLIVER = "T3_SUN_MIRRORED_SLIVER",
  /** T3太阳镜-偏光镜片 */
  T3_SUN_POLARIZED = "T3_SUN_POLARIZED",
  /** T3太阳镜-偏光镜片-普通染色 */
  T3_SUN_POLARIZED_BASIC = "T3_SUN_POLARIZED_BASIC",
  /** T3太阳镜-偏光镜片-普通染色-棕色 */
  T3_SUN_POLARIZED_BASIC_BROWN = "T3_SUN_POLARIZED_BASIC_BROWN",
  /** T3太阳镜-偏光镜片-普通染色-灰色 */
  T3_SUN_POLARIZED_BASIC_GRAY = "T3_SUN_POLARIZED_BASIC_GRAY",
  /** T3太阳镜-偏光镜片-普通染色-绿色 */
  T3_SUN_POLARIZED_BASIC_GREEN = "T3_SUN_POLARIZED_BASIC_GREEN",
  /** T3太阳镜-偏光镜片-镜面染色 */
  T3_SUN_POLARIZED_MIRRORED = "T3_SUN_POLARIZED_MIRRORED",
  /** T3太阳镜-偏光镜片-镜面染色-琥珀色的玫瑰 */
  T3_SUN_POLARIZED_MIRRORED_AMBERROSE = "T3_SUN_POLARIZED_MIRRORED_AMBERROSE",
  /** T3太阳镜-偏光镜片-镜面染色-蓝色 */
  T3_SUN_POLARIZED_MIRRORED_BLUE = "T3_SUN_POLARIZED_MIRRORED_BLUE",
  /** T3太阳镜-偏光镜片-镜面染色-银色 */
  T3_SUN_POLARIZED_MIRRORED_SLIVER = "T3_SUN_POLARIZED_MIRRORED_SLIVER",
  /** T4折射率套餐-premium-progressive-blue-1.56高级 */
  T4_PREMIUM_PROGRESSIVE_BLUE_BASIC_1_56A = "T4_PREMIUM_PROGRESSIVE_BLUE_BASIC_1_56A",
  /** T4折射率套餐-premium-progressive-blue-1.56标准 */
  T4_PREMIUM_PROGRESSIVE_BLUE_BASIC_1_56S = "T4_PREMIUM_PROGRESSIVE_BLUE_BASIC_1_56S",
  /** T4折射率套餐-premium-progressive-blue-1.60高级 */
  T4_PREMIUM_PROGRESSIVE_BLUE_BASIC_1_60A = "T4_PREMIUM_PROGRESSIVE_BLUE_BASIC_1_60A",
  /** T4折射率套餐-premium-progressive-blue-1.60标准 */
  T4_PREMIUM_PROGRESSIVE_BLUE_BASIC_1_60S = "T4_PREMIUM_PROGRESSIVE_BLUE_BASIC_1_60S",
  /** T4折射率套餐-premium-progressive-blue-1.67高级 */
  T4_PREMIUM_PROGRESSIVE_BLUE_BASIC_1_67A = "T4_PREMIUM_PROGRESSIVE_BLUE_BASIC_1_67A",
  /** T4折射率套餐-premium-progressive-blue-1.67标准 */
  T4_PREMIUM_PROGRESSIVE_BLUE_BASIC_1_67S = "T4_PREMIUM_PROGRESSIVE_BLUE_BASIC_1_67S",
  /** T4折射率套餐-premium-progressive-clear-1.56高级 */
  T4_PREMIUM_PROGRESSIVE_CLEAR_BASIC_1_56A = "T4_PREMIUM_PROGRESSIVE_CLEAR_BASIC_1_56A",
  /** T4折射率套餐-premium-progressive-clear-1.56标准 */
  T4_PREMIUM_PROGRESSIVE_CLEAR_BASIC_1_56S = "T4_PREMIUM_PROGRESSIVE_CLEAR_BASIC_1_56S",
  /** T4折射率套餐-premium-progressive-clear-1.60高级 */
  T4_PREMIUM_PROGRESSIVE_CLEAR_BASIC_1_60A = "T4_PREMIUM_PROGRESSIVE_CLEAR_BASIC_1_60A",
  /** T4折射率套餐-premium-progressive-clear-1.60标准 */
  T4_PREMIUM_PROGRESSIVE_CLEAR_BASIC_1_60S = "T4_PREMIUM_PROGRESSIVE_CLEAR_BASIC_1_60S",
  /** T4折射率套餐-premium-progressive-clear-1.67高级 */
  T4_PREMIUM_PROGRESSIVE_CLEAR_BASIC_1_67A = "T4_PREMIUM_PROGRESSIVE_CLEAR_BASIC_1_67A",
  /** T4折射率套餐-premium-progressive-clear-1.67标准 */
  T4_PREMIUM_PROGRESSIVE_CLEAR_BASIC_1_67S = "T4_PREMIUM_PROGRESSIVE_CLEAR_BASIC_1_67S",
  /** T4折射率套餐-premium-progressive-photochromic-1.56高级 */
  T4_PREMIUM_PROGRESSIVE_PHOTOCHROMIC_1_56A = "T4_PREMIUM_PROGRESSIVE_PHOTOCHROMIC_1_56A",
  /** T4折射率套餐-premium-progressive-photochromic-1.56标准 */
  T4_PREMIUM_PROGRESSIVE_PHOTOCHROMIC_1_56S = "T4_PREMIUM_PROGRESSIVE_PHOTOCHROMIC_1_56S",
  /** T4折射率套餐-premium-progressive-photochromic-1.60高级 */
  T4_PREMIUM_PROGRESSIVE_PHOTOCHROMIC_1_60A = "T4_PREMIUM_PROGRESSIVE_PHOTOCHROMIC_1_60A",
  /** T4折射率套餐-premium-progressive-photochromic-1.60标准 */
  T4_PREMIUM_PROGRESSIVE_PHOTOCHROMIC_1_60S = "T4_PREMIUM_PROGRESSIVE_PHOTOCHROMIC_1_60S",
  /** T4折射率套餐-premium-progressive-photochromic-1.67高级 */
  T4_PREMIUM_PROGRESSIVE_PHOTOCHROMIC_1_67A = "T4_PREMIUM_PROGRESSIVE_PHOTOCHROMIC_1_67A",
  /** T4折射率套餐-premium-progressive-photochromic-1.67标准 */
  T4_PREMIUM_PROGRESSIVE_PHOTOCHROMIC_1_67S = "T4_PREMIUM_PROGRESSIVE_PHOTOCHROMIC_1_67S",
  /** T4折射率套餐-premium-progressive-polarizedtint-1.56高级 */
  T4_PREMIUM_PROGRESSIVE_POLARIZEDTINT_1_56A = "T4_PREMIUM_PROGRESSIVE_POLARIZEDTINT_1_56A",
  /** T4折射率套餐-premium-progressive-polarizedtint-1.56标准 */
  T4_PREMIUM_PROGRESSIVE_POLARIZEDTINT_1_56S = "T4_PREMIUM_PROGRESSIVE_POLARIZEDTINT_1_56S",
  /** T4折射率套餐-premium-progressive-polarizedtint-1.60高级 */
  T4_PREMIUM_PROGRESSIVE_POLARIZEDTINT_1_60A = "T4_PREMIUM_PROGRESSIVE_POLARIZEDTINT_1_60A",
  /** T4折射率套餐-premium-progressive-polarizedtint-1.60标准 */
  T4_PREMIUM_PROGRESSIVE_POLARIZEDTINT_1_60S = "T4_PREMIUM_PROGRESSIVE_POLARIZEDTINT_1_60S",
  /** T4折射率套餐-premium-progressive-polarizedtint-1.67高级 */
  T4_PREMIUM_PROGRESSIVE_POLARIZEDTINT_1_67A = "T4_PREMIUM_PROGRESSIVE_POLARIZEDTINT_1_67A",
  /** T4折射率套餐-premium-progressive-polarizedtint-1.67标准 */
  T4_PREMIUM_PROGRESSIVE_POLARIZEDTINT_1_67S = "T4_PREMIUM_PROGRESSIVE_POLARIZEDTINT_1_67S",
  /** T4折射率套餐-premium-progressive-tint-1.56高级 */
  T4_PREMIUM_PROGRESSIVE_TINT_1_56A = "T4_PREMIUM_PROGRESSIVE_TINT_1_56A",
  /** T4折射率套餐-premium-progressive-tint-1.56标准 */
  T4_PREMIUM_PROGRESSIVE_TINT_1_56S = "T4_PREMIUM_PROGRESSIVE_TINT_1_56S",
  /** T4折射率套餐-premium-progressive-tint-1.60高级 */
  T4_PREMIUM_PROGRESSIVE_TINT_1_60A = "T4_PREMIUM_PROGRESSIVE_TINT_1_60A",
  /** T4折射率套餐-premium-progressive-tint-1.60标准 */
  T4_PREMIUM_PROGRESSIVE_TINT_1_60S = "T4_PREMIUM_PROGRESSIVE_TINT_1_60S",
  /** T4折射率套餐-premium-progressive-tint-1.67高级 */
  T4_PREMIUM_PROGRESSIVE_TINT_1_67A = "T4_PREMIUM_PROGRESSIVE_TINT_1_67A",
  /** T4折射率套餐-premium-progressive-tint-1.67标准 */
  T4_PREMIUM_PROGRESSIVE_TINT_1_67S = "T4_PREMIUM_PROGRESSIVE_TINT_1_67S",
  /** T4折射率套餐-premium-progressive-transphoto-1.50高级 */
  T4_PREMIUM_PROGRESSIVE_TRANSPHOTO_1_50A = "T4_PREMIUM_PROGRESSIVE_TRANSPHOTO_1_50A",
  /** T4折射率套餐-premium-progressive-transphoto-1.50标准 */
  T4_PREMIUM_PROGRESSIVE_TRANSPHOTO_1_50S = "T4_PREMIUM_PROGRESSIVE_TRANSPHOTO_1_50S",
  /** T4折射率套餐-premium-progressive-transphoto-1.60高级 */
  T4_PREMIUM_PROGRESSIVE_TRANSPHOTO_1_60A = "T4_PREMIUM_PROGRESSIVE_TRANSPHOTO_1_60A",
  /** T4折射率套餐-premium-progressive-transphoto-1.60标准 */
  T4_PREMIUM_PROGRESSIVE_TRANSPHOTO_1_60S = "T4_PREMIUM_PROGRESSIVE_TRANSPHOTO_1_60S",
  /** T4折射率套餐-progressive-blue-1.56高级 */
  T4_PROGRESSIVE_BLUE_BASIC_1_56A = "T4_PROGRESSIVE_BLUE_BASIC_1_56A",
  /** T4折射率套餐-progressive-blue-1.56标准 */
  T4_PROGRESSIVE_BLUE_BASIC_1_56S = "T4_PROGRESSIVE_BLUE_BASIC_1_56S",
  /** T4折射率套餐-progressive-blue-1.60高级 */
  T4_PROGRESSIVE_BLUE_BASIC_1_60A = "T4_PROGRESSIVE_BLUE_BASIC_1_60A",
  /** T4折射率套餐-progressive-blue-1.60标准 */
  T4_PROGRESSIVE_BLUE_BASIC_1_60S = "T4_PROGRESSIVE_BLUE_BASIC_1_60S",
  /** T4折射率套餐-progressive-blue-1.67高级 */
  T4_PROGRESSIVE_BLUE_BASIC_1_67A = "T4_PROGRESSIVE_BLUE_BASIC_1_67A",
  /** T4折射率套餐-progressive-blue-1.67标准 */
  T4_PROGRESSIVE_BLUE_BASIC_1_67S = "T4_PROGRESSIVE_BLUE_BASIC_1_67S",
  /** T4折射率套餐-progressive-clear-1.56高级 */
  T4_PROGRESSIVE_CLEAR_BASIC_1_56A = "T4_PROGRESSIVE_CLEAR_BASIC_1_56A",
  /** T4折射率套餐-progressive-clear-1.56标准 */
  T4_PROGRESSIVE_CLEAR_BASIC_1_56S = "T4_PROGRESSIVE_CLEAR_BASIC_1_56S",
  /** T4折射率套餐-progressive-clear-1.60高级 */
  T4_PROGRESSIVE_CLEAR_BASIC_1_60A = "T4_PROGRESSIVE_CLEAR_BASIC_1_60A",
  /** T4折射率套餐-progressive-clear-1.60标准 */
  T4_PROGRESSIVE_CLEAR_BASIC_1_60S = "T4_PROGRESSIVE_CLEAR_BASIC_1_60S",
  /** T4折射率套餐-progressive-clear-1.67高级 */
  T4_PROGRESSIVE_CLEAR_BASIC_1_67A = "T4_PROGRESSIVE_CLEAR_BASIC_1_67A",
  /** T4折射率套餐-progressive-clear-1.67标准 */
  T4_PROGRESSIVE_CLEAR_BASIC_1_67S = "T4_PROGRESSIVE_CLEAR_BASIC_1_67S",
  /** T4折射率套餐-progressive-photochromic-1.56高级 */
  T4_PROGRESSIVE_PHOTOCHROMIC_1_56A = "T4_PROGRESSIVE_PHOTOCHROMIC_1_56A",
  /** T4折射率套餐-progressive-photochromic-1.56标准 */
  T4_PROGRESSIVE_PHOTOCHROMIC_1_56S = "T4_PROGRESSIVE_PHOTOCHROMIC_1_56S",
  /** T4折射率套餐-progressive-photochromic-1.60高级 */
  T4_PROGRESSIVE_PHOTOCHROMIC_1_60A = "T4_PROGRESSIVE_PHOTOCHROMIC_1_60A",
  /** T4折射率套餐-progressive-photochromic-1.60标准 */
  T4_PROGRESSIVE_PHOTOCHROMIC_1_60S = "T4_PROGRESSIVE_PHOTOCHROMIC_1_60S",
  /** T4折射率套餐-progressive-photochromic-1.67高级 */
  T4_PROGRESSIVE_PHOTOCHROMIC_1_67A = "T4_PROGRESSIVE_PHOTOCHROMIC_1_67A",
  /** T4折射率套餐-progressive-photochromic-1.67标准 */
  T4_PROGRESSIVE_PHOTOCHROMIC_1_67S = "T4_PROGRESSIVE_PHOTOCHROMIC_1_67S",
  /** T4折射率套餐-progressive-polarizedtint-1.56高级 */
  T4_PROGRESSIVE_POLARIZEDTINT_1_56A = "T4_PROGRESSIVE_POLARIZEDTINT_1_56A",
  /** T4折射率套餐-progressive-polarizedtint-1.56标准 */
  T4_PROGRESSIVE_POLARIZEDTINT_1_56S = "T4_PROGRESSIVE_POLARIZEDTINT_1_56S",
  /** T4折射率套餐-progressive-polarizedtint-1.60高级 */
  T4_PROGRESSIVE_POLARIZEDTINT_1_60A = "T4_PROGRESSIVE_POLARIZEDTINT_1_60A",
  /** T4折射率套餐-progressive-polarizedtint-1.60标准 */
  T4_PROGRESSIVE_POLARIZEDTINT_1_60S = "T4_PROGRESSIVE_POLARIZEDTINT_1_60S",
  /** T4折射率套餐-progressive-polarizedtint-1.67高级 */
  T4_PROGRESSIVE_POLARIZEDTINT_1_67A = "T4_PROGRESSIVE_POLARIZEDTINT_1_67A",
  /** T4折射率套餐-progressive-polarizedtint-1.67标准 */
  T4_PROGRESSIVE_POLARIZEDTINT_1_67S = "T4_PROGRESSIVE_POLARIZEDTINT_1_67S",
  /** T4折射率套餐-progressive-tint-1.56高级 */
  T4_PROGRESSIVE_TINT_1_56A = "T4_PROGRESSIVE_TINT_1_56A",
  /** T4折射率套餐-progressive-tint-1.56标准 */
  T4_PROGRESSIVE_TINT_1_56S = "T4_PROGRESSIVE_TINT_1_56S",
  /** T4折射率套餐-progressive-tint-1.60高级 */
  T4_PROGRESSIVE_TINT_1_60A = "T4_PROGRESSIVE_TINT_1_60A",
  /** T4折射率套餐-progressive-tint-1.60标准 */
  T4_PROGRESSIVE_TINT_1_60S = "T4_PROGRESSIVE_TINT_1_60S",
  /** T4折射率套餐-progressive-tint-1.67高级 */
  T4_PROGRESSIVE_TINT_1_67A = "T4_PROGRESSIVE_TINT_1_67A",
  /** T4折射率套餐-progressive-tint-1.67标准 */
  T4_PROGRESSIVE_TINT_1_67S = "T4_PROGRESSIVE_TINT_1_67S",
  /** T4折射率套餐-progressive-transphoto-1.50高级 */
  T4_PROGRESSIVE_TRANSPHOTO_1_50A = "T4_PROGRESSIVE_TRANSPHOTO_1_50A",
  /** T4折射率套餐-progressive-transphoto-1.50标准 */
  T4_PROGRESSIVE_TRANSPHOTO_1_50S = "T4_PROGRESSIVE_TRANSPHOTO_1_50S",
  /** T4折射率套餐-progressive-transphoto-1.60高级 */
  T4_PROGRESSIVE_TRANSPHOTO_1_60A = "T4_PROGRESSIVE_TRANSPHOTO_1_60A",
  /** T4折射率套餐-progressive-transphoto-1.60标准 */
  T4_PROGRESSIVE_TRANSPHOTO_1_60S = "T4_PROGRESSIVE_TRANSPHOTO_1_60S",
  /** T4无框-砖石款-配置-1.61-BLUE */
  T4_RIMLESS_1_61_BLUE = "T4_RIMLESS_1_61_BLUE",
  /** T4无框-砖石款-配置-1.61-CLEAR */
  T4_RIMLESS_1_61_CLEAR = "T4_RIMLESS_1_61_CLEAR",
  /** T4无框-砖石款-配置-1.61-PHOTOCHROMIC */
  T4_RIMLESS_1_61_PHOTOCHROMIC = "T4_RIMLESS_1_61_PHOTOCHROMIC",
  /** T4无框-砖石款-配置-1.61-TINT */
  T4_RIMLESS_1_61_TINT = "T4_RIMLESS_1_61_TINT",
  /** T4无框-砖石款-配置-1.67-BLUE */
  T4_RIMLESS_1_67_BLUE = "T4_RIMLESS_1_67_BLUE",
  /** T4无框-砖石款-配置-1.67-CLEAR */
  T4_RIMLESS_1_67_CLEAR = "T4_RIMLESS_1_67_CLEAR",
  /** T4无框-砖石款-配置-1.67-PHOTOCHROMIC */
  T4_RIMLESS_1_67_PHOTOCHROMIC = "T4_RIMLESS_1_67_PHOTOCHROMIC",
  /** T4无框-砖石款-配置-1.67-TINT */
  T4_RIMLESS_1_67_TINT = "T4_RIMLESS_1_67_TINT",
  /** T4折射率套餐-single-blue-1.56高级 */
  T4_SINGLE_BLUE_BASIC_1_56A = "T4_SINGLE_BLUE_BASIC_1_56A",
  /** T4折射率套餐-single-blue-1.56标准 */
  T4_SINGLE_BLUE_BASIC_1_56S = "T4_SINGLE_BLUE_BASIC_1_56S",
  /** T4折射率套餐-single-blue-1.60高级 */
  T4_SINGLE_BLUE_BASIC_1_60A = "T4_SINGLE_BLUE_BASIC_1_60A",
  /** T4折射率套餐-single-blue-1.60标准 */
  T4_SINGLE_BLUE_BASIC_1_60S = "T4_SINGLE_BLUE_BASIC_1_60S",
  /** T4折射率套餐-single-blue-1.67高级 */
  T4_SINGLE_BLUE_BASIC_1_67A = "T4_SINGLE_BLUE_BASIC_1_67A",
  /** T4折射率套餐-single-blue-1.67标准 */
  T4_SINGLE_BLUE_BASIC_1_67S = "T4_SINGLE_BLUE_BASIC_1_67S",
  /** T4折射率套餐-single-blue-1.71高级 */
  T4_SINGLE_BLUE_BASIC_1_71A = "T4_SINGLE_BLUE_BASIC_1_71A",
  /** T4折射率套餐-single-blue-1.71标准 */
  T4_SINGLE_BLUE_BASIC_1_71S = "T4_SINGLE_BLUE_BASIC_1_71S",
  /** T4折射率套餐-single-clear-1.56高级 */
  T4_SINGLE_CLEAR_BASIC_1_56A = "T4_SINGLE_CLEAR_BASIC_1_56A",
  /** T4折射率套餐-single-clear-1.56标准 */
  T4_SINGLE_CLEAR_BASIC_1_56S = "T4_SINGLE_CLEAR_BASIC_1_56S",
  /** T4折射率套餐-single-clear-1.59高级 */
  T4_SINGLE_CLEAR_BASIC_1_59A = "T4_SINGLE_CLEAR_BASIC_1_59A",
  /** T4折射率套餐-single-clear-1.59标准 */
  T4_SINGLE_CLEAR_BASIC_1_59S = "T4_SINGLE_CLEAR_BASIC_1_59S",
  /** T4折射率套餐-single-clear-1.60高级 */
  T4_SINGLE_CLEAR_BASIC_1_60A = "T4_SINGLE_CLEAR_BASIC_1_60A",
  /** T4折射率套餐-single-clear-1.60标准 */
  T4_SINGLE_CLEAR_BASIC_1_60S = "T4_SINGLE_CLEAR_BASIC_1_60S",
  /** T4折射率套餐-single-clear-1.67高级 */
  T4_SINGLE_CLEAR_BASIC_1_67A = "T4_SINGLE_CLEAR_BASIC_1_67A",
  /** T4折射率套餐-single-clear-1.67标准 */
  T4_SINGLE_CLEAR_BASIC_1_67S = "T4_SINGLE_CLEAR_BASIC_1_67S",
  /** T4折射率套餐-single-clear-1.71高级 */
  T4_SINGLE_CLEAR_BASIC_1_71A = "T4_SINGLE_CLEAR_BASIC_1_71A",
  /** T4折射率套餐-single-clear-1.71标准 */
  T4_SINGLE_CLEAR_BASIC_1_71S = "T4_SINGLE_CLEAR_BASIC_1_71S",
  /** T4折射率套餐-single-clear-1.71高级 */
  T4_SINGLE_CLEAR_BASIC_1_74A = "T4_SINGLE_CLEAR_BASIC_1_74A",
  /** T4折射率套餐-single-clear-1.71标准 */
  T4_SINGLE_CLEAR_BASIC_1_74S = "T4_SINGLE_CLEAR_BASIC_1_74S",
  /** T4折射率套餐-single-gradient-1.56高级 */
  T4_SINGLE_GRADIENT_1_56A = "T4_SINGLE_GRADIENT_1_56A",
  /** T4折射率套餐-single-gradient-1.56标准 */
  T4_SINGLE_GRADIENT_1_56S = "T4_SINGLE_GRADIENT_1_56S",
  /** T4折射率套餐-single-gradient-1.60高级 */
  T4_SINGLE_GRADIENT_1_60A = "T4_SINGLE_GRADIENT_1_60A",
  /** T4折射率套餐-single-gradient-1.60标准 */
  T4_SINGLE_GRADIENT_1_60S = "T4_SINGLE_GRADIENT_1_60S",
  /** T4折射率套餐-single-gradient-1.67高级 */
  T4_SINGLE_GRADIENT_1_67A = "T4_SINGLE_GRADIENT_1_67A",
  /** T4折射率套餐-single-gradient-1.67标准 */
  T4_SINGLE_GRADIENT_1_67S = "T4_SINGLE_GRADIENT_1_67S",
  /** T4折射率套餐-single-mirrored-1.56高级 */
  T4_SINGLE_MIRRORED_1_56A = "T4_SINGLE_MIRRORED_1_56A",
  /** T4折射率套餐-single-mirrored-1.56标准 */
  T4_SINGLE_MIRRORED_1_56S = "T4_SINGLE_MIRRORED_1_56S",
  /** T4折射率套餐-single-mirrored-1.60高级 */
  T4_SINGLE_MIRRORED_1_60A = "T4_SINGLE_MIRRORED_1_60A",
  /** T4折射率套餐-single-mirrored-1.60标准 */
  T4_SINGLE_MIRRORED_1_60S = "T4_SINGLE_MIRRORED_1_60S",
  /** T4折射率套餐-single-mirrored-1.67高级 */
  T4_SINGLE_MIRRORED_1_67A = "T4_SINGLE_MIRRORED_1_67A",
  /** T4折射率套餐-single-mirrored-1.67标准 */
  T4_SINGLE_MIRRORED_1_67S = "T4_SINGLE_MIRRORED_1_67S",
  /** T4折射率套餐-single-photochromic-1.56高级 */
  T4_SINGLE_PHOTOCHROMIC_1_56A = "T4_SINGLE_PHOTOCHROMIC_1_56A",
  /** T4折射率套餐-single-photochromic-1.56标准 */
  T4_SINGLE_PHOTOCHROMIC_1_56S = "T4_SINGLE_PHOTOCHROMIC_1_56S",
  /** T4折射率套餐-single-photochromic-1.60高级 */
  T4_SINGLE_PHOTOCHROMIC_1_60A = "T4_SINGLE_PHOTOCHROMIC_1_60A",
  /** T4折射率套餐-single-photochromic-1.60标准 */
  T4_SINGLE_PHOTOCHROMIC_1_60S = "T4_SINGLE_PHOTOCHROMIC_1_60S",
  /** T4折射率套餐-single-photochromic-1.67高级 */
  T4_SINGLE_PHOTOCHROMIC_1_67A = "T4_SINGLE_PHOTOCHROMIC_1_67A",
  /** T4折射率套餐-single-photochromic-1.67标准 */
  T4_SINGLE_PHOTOCHROMIC_1_67S = "T4_SINGLE_PHOTOCHROMIC_1_67S",
  /** T4折射率套餐-single-photochromic-1.71高级 */
  T4_SINGLE_PHOTOCHROMIC_1_71A = "T4_SINGLE_PHOTOCHROMIC_1_71A",
  /** T4折射率套餐-single-photochromic-1.71标准 */
  T4_SINGLE_PHOTOCHROMIC_1_71S = "T4_SINGLE_PHOTOCHROMIC_1_71S",
  /** T4折射率套餐-single-polarizedmirrored-1.56高级 */
  T4_SINGLE_POLARIZEDMIRRORED_1_56A = "T4_SINGLE_POLARIZEDMIRRORED_1_56A",
  /** T4折射率套餐-single-polarizedmirrored-1.56标准 */
  T4_SINGLE_POLARIZEDMIRRORED_1_56S = "T4_SINGLE_POLARIZEDMIRRORED_1_56S",
  /** T4折射率套餐-single-polarizedmirrored-1.60高级 */
  T4_SINGLE_POLARIZEDMIRRORED_1_60A = "T4_SINGLE_POLARIZEDMIRRORED_1_60A",
  /** T4折射率套餐-single-polarizedmirrored-1.60标准 */
  T4_SINGLE_POLARIZEDMIRRORED_1_60S = "T4_SINGLE_POLARIZEDMIRRORED_1_60S",
  /** T4折射率套餐-single-polarizedmirrored-1.67高级 */
  T4_SINGLE_POLARIZEDMIRRORED_1_67A = "T4_SINGLE_POLARIZEDMIRRORED_1_67A",
  /** T4折射率套餐-single-polarizedmirrored-1.67标准 */
  T4_SINGLE_POLARIZEDMIRRORED_1_67S = "T4_SINGLE_POLARIZEDMIRRORED_1_67S",
  /** T4折射率套餐-single-polarizedtint-1.56高级 */
  T4_SINGLE_POLARIZEDTINT_1_56A = "T4_SINGLE_POLARIZEDTINT_1_56A",
  /** T4折射率套餐-single-polarizedtint-1.56标准 */
  T4_SINGLE_POLARIZEDTINT_1_56S = "T4_SINGLE_POLARIZEDTINT_1_56S",
  /** T4折射率套餐-single-polarizedtint-1.60高级 */
  T4_SINGLE_POLARIZEDTINT_1_60A = "T4_SINGLE_POLARIZEDTINT_1_60A",
  /** T4折射率套餐-single-polarizedtint-1.60标准 */
  T4_SINGLE_POLARIZEDTINT_1_60S = "T4_SINGLE_POLARIZEDTINT_1_60S",
  /** T4折射率套餐-single-polarizedtint-1.67高级 */
  T4_SINGLE_POLARIZEDTINT_1_67A = "T4_SINGLE_POLARIZEDTINT_1_67A",
  /** T4折射率套餐-single-polarizedtint-1.67标准 */
  T4_SINGLE_POLARIZEDTINT_1_67S = "T4_SINGLE_POLARIZEDTINT_1_67S",
  /** T4折射率套餐-single-tint-1.56高级 */
  T4_SINGLE_TINT_1_56A = "T4_SINGLE_TINT_1_56A",
  /** T4折射率套餐-single-tint-1.56标准 */
  T4_SINGLE_TINT_1_56S = "T4_SINGLE_TINT_1_56S",
  /** T4折射率套餐-single-tint-1.60高级 */
  T4_SINGLE_TINT_1_60A = "T4_SINGLE_TINT_1_60A",
  /** T4折射率套餐-single-tint-1.60标准 */
  T4_SINGLE_TINT_1_60S = "T4_SINGLE_TINT_1_60S",
  /** T4折射率套餐-single-tint-1.67高级 */
  T4_SINGLE_TINT_1_67A = "T4_SINGLE_TINT_1_67A",
  /** T4折射率套餐-single-tint-1.67标准 */
  T4_SINGLE_TINT_1_67S = "T4_SINGLE_TINT_1_67S",
  /** T4折射率套餐-single-transphoto-1.50高级 */
  T4_SINGLE_TRANSPHOTO_1_50A = "T4_SINGLE_TRANSPHOTO_1_50A",
  /** T4折射率套餐-single-transphoto-1.50标准 */
  T4_SINGLE_TRANSPHOTO_1_50S = "T4_SINGLE_TRANSPHOTO_1_50S",
  /** T4折射率套餐-single-transphoto-1.60高级 */
  T4_SINGLE_TRANSPHOTO_1_60A = "T4_SINGLE_TRANSPHOTO_1_60A",
  /** T4折射率套餐-single-transphoto-1.60标准 */
  T4_SINGLE_TRANSPHOTO_1_60S = "T4_SINGLE_TRANSPHOTO_1_60S",
  /** 默认:防反射涂层防止恼人的眩光，特别是在使用数字设备或夜间驾驶时 */
  T5_ANTI_REFLECTIVE_COATING = "T5_ANTI_REFLECTIVE_COATING",
  /** 易清洁镜片, 防水，防油，防污 +$3 */
  T5_EASY_CLEAN_COATING = "T5_EASY_CLEAN_COATING",
  /** 默认:耐划伤性, 配有防刮涂层，可以防止日常磨损和撕裂造成划痕 */
  T5_SCRATCH_RESISTANT_COATING = "T5_SCRATCH_RESISTANT_COATING",
  /** 紫外线防护涂层可以防止有害的UVA/UVB射线，这些射线会对你的眼睛造成伤害 +$5 */
  T5_UV_PROTECTIVE_COATING = "T5_UV_PROTECTIVE_COATING",
  /** 防水涂层有助于保持你的镜片远离讨厌的水滴和指纹，同时也使清洁更容易 +$3 */
  T5_WATER_REPELLENT_COATING = "T5_WATER_REPELLENT_COATING",
}

/** 针对专题集合页: 镜片流程中标识专题集合页面的唯一KEY, 如果特定专题页需要高光规则, 需要指定如下的1个或者多个KEY */
export enum LensProcessProductCollectionKeys {
  /** 专题页: T3_BLUE作为默认高光选项 */
  TOPIC_PAGE_BLUE_LIGHT = "TOPIC_PAGE_BLUE_LIGHT",
  /** 专题页: T1_NON_PRESCRIPTION作为默认高光选项 */
  TOPIC_PAGE_NON_PRESCRIPTION = "TOPIC_PAGE_NON_PRESCRIPTION",
  /** 专题页: T3_LIGHT作为默认高光选项 */
  TOPIC_PAGE_PHOTOCHROMIC = "TOPIC_PAGE_PHOTOCHROMIC",
  /** 专题页: T1_MULTIFOCAL作为默认高光选项 */
  TOPIC_PAGE_PROGRESSIVE = "TOPIC_PAGE_PROGRESSIVE",
  /** 专题页: T1_READING作为默认高光选项 */
  TOPIC_PAGE_READING = "TOPIC_PAGE_READING",
}

/** 镜片流程步骤枚举T1...T4, PREVIEW */
export enum LensStepGroups {
  /** 最后一步, 预览, 确认页 */
  PREVIEW = "PREVIEW",
  /** 上下文步骤, 当前镜片步骤, 前置信息 */
  T0 = "T0",
  /** 用途大类/用途子类 */
  T1 = "T1",
  /** 填处方模块 */
  T2 = "T2",
  /** 功能大类/功能二级子类/功能三级子类 */
  T3 = "T3",
  /** 折射率及膜层/自定义 */
  T4 = "T4",
  /** T4的膜层特征, 列表, 放到T5, 可配置到所有的T4, 依赖中. */
  T5 = "T5",
}

/** 镜片成本详情KEY标识 */
export enum LensT4CostPriceDetailKey {
  /** 基础成本￥/副 */
  basicCost = "basicCost",
  /** 高散片:￥/片 */
  gaoSanCost = "gaoSanCost",
  /** 混散片:￥/片 */
  hunSanCost = "hunSanCost",
  /** 移心成本￥/副 */
  pianXinCost = "pianXinCost",
  /** 棱镜片:￥/片 */
  prismCost = "prismCost",
  /** 正光度片:￥/片 */
  zhengGuangDuCost = "zhengGuangDuCost",
}

export enum LogLevel {
  Debug = "Debug",
  Error = "Error",
  Info = "Info",
  Verbose = "Verbose",
  Warn = "Warn",
}

export enum LogicalOperator {
  AND = "AND",
  OR = "OR",
}

export enum MailgunDomainState {
  active = "active",
  disabled = "disabled",
  unverified = "unverified",
}

export enum MetricInterval {
  Daily = "Daily",
}

export enum MetricType {
  AverageOrderValue = "AverageOrderValue",
  OrderCount = "OrderCount",
  OrderTotal = "OrderTotal",
}

export enum OrderPlaceAssistantApplyStatus {
  Created = "Created",
  Resolved = "Resolved",
}

export enum OrderType {
  Aggregate = "Aggregate",
  Regular = "Regular",
  Seller = "Seller",
}

/**
 * @description
 * Permissions for administrators and customers. Used to control access to
 * GraphQL resolvers via the {@link Allow} decorator.
 *
 * ## Understanding Permission.Owner
 *
 * `Permission.Owner` is a special permission which is used in some Vendure resolvers to indicate that that resolver should only
 * be accessible to the "owner" of that resource.
 *
 * For example, the Shop API `activeCustomer` query resolver should only return the Customer object for the "owner" of that Customer, i.e.
 * based on the activeUserId of the current session. As a result, the resolver code looks like this:
 *
 * @example
 * ```TypeScript
 * \@Query()
 * \@Allow(Permission.Owner)
 * async activeCustomer(\@Ctx() ctx: RequestContext): Promise<Customer | undefined> {
 *   const userId = ctx.activeUserId;
 *   if (userId) {
 *     return this.customerService.findOneByUserId(ctx, userId);
 *   }
 * }
 * ```
 *
 * Here we can see that the "ownership" must be enforced by custom logic inside the resolver. Since "ownership" cannot be defined generally
 * nor statically encoded at build-time, any resolvers using `Permission.Owner` **must** include logic to enforce that only the owner
 * of the resource has access. If not, then it is the equivalent of using `Permission.Public`.
 *
 *
 * @docsCategory common
 */
export enum Permission {
  /** Allow this user to enable invoice generation */
  AllowInvoicesPermission = "AllowInvoicesPermission",
  /** Allow this user to enable reporting */
  AllowReportingPermission = "AllowReportingPermission",
  /** Allow this user to enable rss feed generation */
  AllowRssFeedPermission = "AllowRssFeedPermission",
  /** Allow this user to enable sitemap generation */
  AllowSitemapPermission = "AllowSitemapPermission",
  /** Allow lens supplier to access */
  AllowSupplierLensPartnerPermission = "AllowSupplierLensPartnerPermission",
  /** Allow Eyeglass processors to access */
  AllowSupplierProcessingPartnerPermission = "AllowSupplierProcessingPartnerPermission",
  /** Authenticated means simply that the user is logged in */
  Authenticated = "Authenticated",
  /** Grants permission to create Administrator */
  CreateAdministrator = "CreateAdministrator",
  /** Grants permission to create Asset */
  CreateAsset = "CreateAsset",
  /** Grants permission to create Banner */
  CreateBanner = "CreateBanner",
  /** Grants permission to create Campaign */
  CreateCampaign = "CreateCampaign",
  /** Grants permission to create Products, Facets, Assets, Collections */
  CreateCatalog = "CreateCatalog",
  /** Grants permission to create Channel */
  CreateChannel = "CreateChannel",
  /** Grants permission to create Collection */
  CreateCollection = "CreateCollection",
  /** Grants permission to create Country */
  CreateCountry = "CreateCountry",
  /** Grants permission to create Customer */
  CreateCustomer = "CreateCustomer",
  /** Grants permission to create CustomerGroup */
  CreateCustomerGroup = "CreateCustomerGroup",
  /** Grants permission to create EDM */
  CreateEDM = "CreateEDM",
  /** Grants permission to create Facet */
  CreateFacet = "CreateFacet",
  /** Grants permission to create HelpCenter */
  CreateHelpCenter = "CreateHelpCenter",
  /** Grants permission to create HyperseNewAdmin */
  CreateHyperseNewAdmin = "CreateHyperseNewAdmin",
  /** Grants permission to create HyperseVendurePluginRewardPoints */
  CreateHyperseVendurePluginRewardPoints = "CreateHyperseVendurePluginRewardPoints",
  /** Grants permission to create LensProcess */
  CreateLensProcess = "CreateLensProcess",
  /** Grants permission to create Order */
  CreateOrder = "CreateOrder",
  /** Grants permission to create OrderPlaceAssistant */
  CreateOrderPlaceAssistant = "CreateOrderPlaceAssistant",
  /** Grants permission to create PaymentMethod */
  CreatePaymentMethod = "CreatePaymentMethod",
  /** Grants permission to create Product */
  CreateProduct = "CreateProduct",
  /** Grants permission to create Promotion */
  CreatePromotion = "CreatePromotion",
  /** Grants permission to create ReportingConfig */
  CreateReportingConfig = "CreateReportingConfig",
  /** Grants permission to create ReportingMarketingFee */
  CreateReportingMarketingFee = "CreateReportingMarketingFee",
  /** Grants permission to create ReportingOrderDaily */
  CreateReportingOrderDaily = "CreateReportingOrderDaily",
  /** Grants permission to create ReportingOrderItem */
  CreateReportingOrderItem = "CreateReportingOrderItem",
  /** Grants permission to create ReviewsPermission */
  CreateReviewsPermission = "CreateReviewsPermission",
  /** Grants permission to create RewardReferral */
  CreateRewardReferral = "CreateRewardReferral",
  /** Grants permission to create Risk */
  CreateRisk = "CreateRisk",
  /** Grants permission to create Seller */
  CreateSeller = "CreateSeller",
  /** Grants permission to create Setting */
  CreateSetting = "CreateSetting",
  /** Grants permission to create PaymentMethods, ShippingMethods, TaxCategories, TaxRates, Zones, Countries, System & GlobalSettings */
  CreateSettings = "CreateSettings",
  /** Grants permission to create ShippingMethod */
  CreateShippingMethod = "CreateShippingMethod",
  /** Grants permission to create StockLocation */
  CreateStockLocation = "CreateStockLocation",
  /** Grants permission to create Subscription */
  CreateSubscription = "CreateSubscription",
  /** Grants permission to create Supplier */
  CreateSupplier = "CreateSupplier",
  /** Grants permission to create System */
  CreateSystem = "CreateSystem",
  /** Grants permission to create Tag */
  CreateTag = "CreateTag",
  /** Grants permission to create TaxCategory */
  CreateTaxCategory = "CreateTaxCategory",
  /** Grants permission to create TaxRate */
  CreateTaxRate = "CreateTaxRate",
  /** Grants permission to create Topic */
  CreateTopic = "CreateTopic",
  /** Grants permission to create ViewWidget */
  CreateViewWidget = "CreateViewWidget",
  /** Grants permission to create Zone */
  CreateZone = "CreateZone",
  /** Grants permission to delete Administrator */
  DeleteAdministrator = "DeleteAdministrator",
  /** Grants permission to delete Asset */
  DeleteAsset = "DeleteAsset",
  /** Grants permission to delete Banner */
  DeleteBanner = "DeleteBanner",
  /** Grants permission to delete Campaign */
  DeleteCampaign = "DeleteCampaign",
  /** Grants permission to delete Products, Facets, Assets, Collections */
  DeleteCatalog = "DeleteCatalog",
  /** Grants permission to delete Channel */
  DeleteChannel = "DeleteChannel",
  /** Grants permission to delete Collection */
  DeleteCollection = "DeleteCollection",
  /** Grants permission to delete Country */
  DeleteCountry = "DeleteCountry",
  /** Grants permission to delete Customer */
  DeleteCustomer = "DeleteCustomer",
  /** Grants permission to delete CustomerGroup */
  DeleteCustomerGroup = "DeleteCustomerGroup",
  /** Grants permission to delete EDM */
  DeleteEDM = "DeleteEDM",
  /** Grants permission to delete Facet */
  DeleteFacet = "DeleteFacet",
  /** Grants permission to delete HelpCenter */
  DeleteHelpCenter = "DeleteHelpCenter",
  /** Grants permission to delete HyperseNewAdmin */
  DeleteHyperseNewAdmin = "DeleteHyperseNewAdmin",
  /** Grants permission to delete HyperseVendurePluginRewardPoints */
  DeleteHyperseVendurePluginRewardPoints = "DeleteHyperseVendurePluginRewardPoints",
  /** Grants permission to delete LensProcess */
  DeleteLensProcess = "DeleteLensProcess",
  /** Grants permission to delete Order */
  DeleteOrder = "DeleteOrder",
  /** Grants permission to delete OrderPlaceAssistant */
  DeleteOrderPlaceAssistant = "DeleteOrderPlaceAssistant",
  /** Grants permission to delete PaymentMethod */
  DeletePaymentMethod = "DeletePaymentMethod",
  /** Grants permission to delete Product */
  DeleteProduct = "DeleteProduct",
  /** Grants permission to delete Promotion */
  DeletePromotion = "DeletePromotion",
  /** Grants permission to delete ReportingConfig */
  DeleteReportingConfig = "DeleteReportingConfig",
  /** Grants permission to delete ReportingMarketingFee */
  DeleteReportingMarketingFee = "DeleteReportingMarketingFee",
  /** Grants permission to delete ReportingOrderDaily */
  DeleteReportingOrderDaily = "DeleteReportingOrderDaily",
  /** Grants permission to delete ReportingOrderItem */
  DeleteReportingOrderItem = "DeleteReportingOrderItem",
  /** Grants permission to delete ReviewsPermission */
  DeleteReviewsPermission = "DeleteReviewsPermission",
  /** Grants permission to delete RewardReferral */
  DeleteRewardReferral = "DeleteRewardReferral",
  /** Grants permission to delete Risk */
  DeleteRisk = "DeleteRisk",
  /** Grants permission to delete Seller */
  DeleteSeller = "DeleteSeller",
  /** Grants permission to delete Setting */
  DeleteSetting = "DeleteSetting",
  /** Grants permission to delete PaymentMethods, ShippingMethods, TaxCategories, TaxRates, Zones, Countries, System & GlobalSettings */
  DeleteSettings = "DeleteSettings",
  /** Grants permission to delete ShippingMethod */
  DeleteShippingMethod = "DeleteShippingMethod",
  /** Grants permission to delete StockLocation */
  DeleteStockLocation = "DeleteStockLocation",
  /** Grants permission to delete Subscription */
  DeleteSubscription = "DeleteSubscription",
  /** Grants permission to delete Supplier */
  DeleteSupplier = "DeleteSupplier",
  /** Grants permission to delete System */
  DeleteSystem = "DeleteSystem",
  /** Grants permission to delete Tag */
  DeleteTag = "DeleteTag",
  /** Grants permission to delete TaxCategory */
  DeleteTaxCategory = "DeleteTaxCategory",
  /** Grants permission to delete TaxRate */
  DeleteTaxRate = "DeleteTaxRate",
  /** Grants permission to delete Topic */
  DeleteTopic = "DeleteTopic",
  /** Grants permission to delete ViewWidget */
  DeleteViewWidget = "DeleteViewWidget",
  /** Grants permission to delete Zone */
  DeleteZone = "DeleteZone",
  /** Owner means the user owns this entity, e.g. a Customer's own Order */
  Owner = "Owner",
  /** Public means any unauthenticated user may perform the operation */
  Public = "Public",
  /** Grants permission to read Administrator */
  ReadAdministrator = "ReadAdministrator",
  /** Grants permission to read Asset */
  ReadAsset = "ReadAsset",
  /** Grants permission to read Banner */
  ReadBanner = "ReadBanner",
  /** Grants permission to read Campaign */
  ReadCampaign = "ReadCampaign",
  /** Grants permission to read Products, Facets, Assets, Collections */
  ReadCatalog = "ReadCatalog",
  /** Grants permission to read Channel */
  ReadChannel = "ReadChannel",
  /** Grants permission to read Collection */
  ReadCollection = "ReadCollection",
  /** Grants permission to read Country */
  ReadCountry = "ReadCountry",
  /** Grants permission to read Customer */
  ReadCustomer = "ReadCustomer",
  /** Grants permission to read CustomerGroup */
  ReadCustomerGroup = "ReadCustomerGroup",
  /** Grants permission to read EDM */
  ReadEDM = "ReadEDM",
  /** Grants permission to read Facet */
  ReadFacet = "ReadFacet",
  /** Grants permission to read HelpCenter */
  ReadHelpCenter = "ReadHelpCenter",
  /** Grants permission to read HyperseNewAdmin */
  ReadHyperseNewAdmin = "ReadHyperseNewAdmin",
  /** Grants permission to read HyperseVendurePluginRewardPoints */
  ReadHyperseVendurePluginRewardPoints = "ReadHyperseVendurePluginRewardPoints",
  /** Grants permission to read LensProcess */
  ReadLensProcess = "ReadLensProcess",
  /** Grants permission to read Order */
  ReadOrder = "ReadOrder",
  /** Grants permission to read OrderPlaceAssistant */
  ReadOrderPlaceAssistant = "ReadOrderPlaceAssistant",
  /** Grants permission to read PaymentMethod */
  ReadPaymentMethod = "ReadPaymentMethod",
  /** Grants permission to read Product */
  ReadProduct = "ReadProduct",
  /** Grants permission to read Promotion */
  ReadPromotion = "ReadPromotion",
  /** Grants permission to read ReportingConfig */
  ReadReportingConfig = "ReadReportingConfig",
  /** Grants permission to read ReportingMarketingFee */
  ReadReportingMarketingFee = "ReadReportingMarketingFee",
  /** Grants permission to read ReportingOrderDaily */
  ReadReportingOrderDaily = "ReadReportingOrderDaily",
  /** Grants permission to read ReportingOrderItem */
  ReadReportingOrderItem = "ReadReportingOrderItem",
  /** Grants permission to read ReviewsPermission */
  ReadReviewsPermission = "ReadReviewsPermission",
  /** Grants permission to read RewardReferral */
  ReadRewardReferral = "ReadRewardReferral",
  /** Grants permission to read Risk */
  ReadRisk = "ReadRisk",
  /** Grants permission to read Seller */
  ReadSeller = "ReadSeller",
  /** Grants permission to read Setting */
  ReadSetting = "ReadSetting",
  /** Grants permission to read PaymentMethods, ShippingMethods, TaxCategories, TaxRates, Zones, Countries, System & GlobalSettings */
  ReadSettings = "ReadSettings",
  /** Grants permission to read ShippingMethod */
  ReadShippingMethod = "ReadShippingMethod",
  /** Grants permission to read StockLocation */
  ReadStockLocation = "ReadStockLocation",
  /** Grants permission to read Subscription */
  ReadSubscription = "ReadSubscription",
  /** Grants permission to read Supplier */
  ReadSupplier = "ReadSupplier",
  /** Grants permission to read System */
  ReadSystem = "ReadSystem",
  /** Grants permission to read Tag */
  ReadTag = "ReadTag",
  /** Grants permission to read TaxCategory */
  ReadTaxCategory = "ReadTaxCategory",
  /** Grants permission to read TaxRate */
  ReadTaxRate = "ReadTaxRate",
  /** Grants permission to read Topic */
  ReadTopic = "ReadTopic",
  /** Grants permission to read ViewWidget */
  ReadViewWidget = "ReadViewWidget",
  /** Grants permission to read Zone */
  ReadZone = "ReadZone",
  /** SuperAdmin has unrestricted access to all operations */
  SuperAdmin = "SuperAdmin",
  /** Grants permission to update Administrator */
  UpdateAdministrator = "UpdateAdministrator",
  /** Grants permission to update Asset */
  UpdateAsset = "UpdateAsset",
  /** Grants permission to update Banner */
  UpdateBanner = "UpdateBanner",
  /** Grants permission to update Campaign */
  UpdateCampaign = "UpdateCampaign",
  /** Grants permission to update Products, Facets, Assets, Collections */
  UpdateCatalog = "UpdateCatalog",
  /** Grants permission to update Channel */
  UpdateChannel = "UpdateChannel",
  /** Grants permission to update Collection */
  UpdateCollection = "UpdateCollection",
  /** Grants permission to update Country */
  UpdateCountry = "UpdateCountry",
  /** Grants permission to update Customer */
  UpdateCustomer = "UpdateCustomer",
  /** Grants permission to update CustomerGroup */
  UpdateCustomerGroup = "UpdateCustomerGroup",
  /** Grants permission to update EDM */
  UpdateEDM = "UpdateEDM",
  /** Grants permission to update Facet */
  UpdateFacet = "UpdateFacet",
  /** Grants permission to update GlobalSettings */
  UpdateGlobalSettings = "UpdateGlobalSettings",
  /** Grants permission to update HelpCenter */
  UpdateHelpCenter = "UpdateHelpCenter",
  /** Grants permission to update HyperseNewAdmin */
  UpdateHyperseNewAdmin = "UpdateHyperseNewAdmin",
  /** Grants permission to update HyperseVendurePluginRewardPoints */
  UpdateHyperseVendurePluginRewardPoints = "UpdateHyperseVendurePluginRewardPoints",
  /** Grants permission to update LensProcess */
  UpdateLensProcess = "UpdateLensProcess",
  /** Grants permission to update Order */
  UpdateOrder = "UpdateOrder",
  /** Grants permission to update OrderPlaceAssistant */
  UpdateOrderPlaceAssistant = "UpdateOrderPlaceAssistant",
  /** Grants permission to update PaymentMethod */
  UpdatePaymentMethod = "UpdatePaymentMethod",
  /** Grants permission to update Product */
  UpdateProduct = "UpdateProduct",
  /** Grants permission to update Promotion */
  UpdatePromotion = "UpdatePromotion",
  /** Grants permission to update ReportingConfig */
  UpdateReportingConfig = "UpdateReportingConfig",
  /** Grants permission to update ReportingMarketingFee */
  UpdateReportingMarketingFee = "UpdateReportingMarketingFee",
  /** Grants permission to update ReportingOrderDaily */
  UpdateReportingOrderDaily = "UpdateReportingOrderDaily",
  /** Grants permission to update ReportingOrderItem */
  UpdateReportingOrderItem = "UpdateReportingOrderItem",
  /** Grants permission to update ReviewsPermission */
  UpdateReviewsPermission = "UpdateReviewsPermission",
  /** Grants permission to update RewardReferral */
  UpdateRewardReferral = "UpdateRewardReferral",
  /** Grants permission to update Risk */
  UpdateRisk = "UpdateRisk",
  /** Grants permission to update Seller */
  UpdateSeller = "UpdateSeller",
  /** Grants permission to update Setting */
  UpdateSetting = "UpdateSetting",
  /** Grants permission to update PaymentMethods, ShippingMethods, TaxCategories, TaxRates, Zones, Countries, System & GlobalSettings */
  UpdateSettings = "UpdateSettings",
  /** Grants permission to update ShippingMethod */
  UpdateShippingMethod = "UpdateShippingMethod",
  /** Grants permission to update StockLocation */
  UpdateStockLocation = "UpdateStockLocation",
  /** Grants permission to update Subscription */
  UpdateSubscription = "UpdateSubscription",
  /** Grants permission to update Supplier */
  UpdateSupplier = "UpdateSupplier",
  /** Grants permission to update System */
  UpdateSystem = "UpdateSystem",
  /** Grants permission to update Tag */
  UpdateTag = "UpdateTag",
  /** Grants permission to update TaxCategory */
  UpdateTaxCategory = "UpdateTaxCategory",
  /** Grants permission to update TaxRate */
  UpdateTaxRate = "UpdateTaxRate",
  /** Grants permission to update Topic */
  UpdateTopic = "UpdateTopic",
  /** Grants permission to update ViewWidget */
  UpdateViewWidget = "UpdateViewWidget",
  /** Grants permission to update Zone */
  UpdateZone = "UpdateZone",
}

export enum RecommendationType {
  /** 交叉营销 */
  CROSSSELL = "CROSSSELL",
  /** 超额促销 */
  UPSELL = "UPSELL",
}

export enum ReportingDownloadType {
  downloadRegisterEmails = "downloadRegisterEmails",
  downloadSubscriptionEmails = "downloadSubscriptionEmails",
}

/** 营销费类目 */
export enum ReportingMarketingFeeNames {
  /** fb广告平台 */
  facebook = "facebook",
  /** google广告平台 */
  google = "google",
  /** 未知渠道 */
  unknown = "unknown",
}

/** 每个订单的成本配置列表keys */
export enum ReportingOrderCostConfigKeys {
  /** USD转换到RMB的汇率 */
  exchargeRateOfUsd = "exchargeRateOfUsd",
  /** 镜盒镜布成本 */
  orderCaseClothCost = "orderCaseClothCost",
  /** 后端运营成本 */
  orderOperationCost = "orderOperationCost",
  /** 包装盒成本,精品盒+纸盒 */
  orderPackingBoxCost = "orderPackingBoxCost",
  /** 加工成本 */
  orderProcessCost = "orderProcessCost",
  /** 运费成本 */
  orderShippingCost = "orderShippingCost",
  /** 出口关税成本 */
  orderShippingTaxCost = "orderShippingTaxCost",
  /** PAYPAL支付手续费 */
  paypalTransactionFee = "paypalTransactionFee",
}

export enum ReviewStateEnum {
  Authorized = "Authorized",
  Created = "Created",
  Denied = "Denied",
  Updated = "Updated",
}

export enum RewardTransactionType {
  ADMINISTRATOR_ADJUSTED = "ADMINISTRATOR_ADJUSTED",
  EARNED_ON_NEW_USERS_REGISTERED = "EARNED_ON_NEW_USERS_REGISTERED",
  EARNED_ON_ORDER = "EARNED_ON_ORDER",
  EARNED_ON_REFERRAL_CODE = "EARNED_ON_REFERRAL_CODE",
  EARNED_ON_REVIEW_APPROVED = "EARNED_ON_REVIEW_APPROVED",
  ORDER_CANCELLED = "ORDER_CANCELLED",
  ORDER_REFUND = "ORDER_REFUND",
  OTHER = "OTHER",
  USED_ON_ORDER = "USED_ON_ORDER",
}

/** 处方单项指标数据类型名称标识 */
export enum RxItemName {
  /** 特殊:此特殊的配置规则仅仅用来当保存按钮的时候校验, 不做其他用途 */
  ACTION_SAVE_VERIFICATION = "ACTION_SAVE_VERIFICATION",
  /** 当用户选择镜片类型为: 渐进(multifocal), 老花(reading)才展示给用户选择 */
  ADD = "ADD",
  /** 用户年龄, 7-79, 80+ */
  AGE = "AGE",
  /** 针对游泳镜, 项链镜, 用户可以只输入度数即可加入购物车. */
  DIRECT_DEGREES = "DIRECT_DEGREES",
  /** 右眼视力: 散光轴度。散光度数在眼球发生的角度，0-180度之间 */
  OD_AXIS = "OD_AXIS",
  /** 右眼视力: 柱镜度数（即散光）+正的指的是远视散光, -负指的是近视散光 */
  OD_CYL = "OD_CYL",
  /** 右眼视力: 球镜（近视、远视度数) +表示远视， —表示近视 */
  OD_SPH = "OD_SPH",
  /** 左眼视力: 散光轴度。散光度数在眼球发生的角度，0-180度之间 */
  OS_AXIS = "OS_AXIS",
  /** 左眼视力: 柱镜度数（即散光）+正的指的是远视散光, -负指的是近视散光 */
  OS_CYL = "OS_CYL",
  /** 左眼视力: 球镜（近视、远视度数) +表示远视， —表示近视 */
  OS_SPH = "OS_SPH",
  /** 双眼PD, 单位为1 */
  PD = "PD",
  /** 左眼瞳距, 单眼PD，单位为0.5 */
  PD_LEFT = "PD_LEFT",
  /** 右眼瞳距, 单眼PD，单位为0.5 */
  PD_RIGHT = "PD_RIGHT",
  /** 棱镜, 标准处方可选配置 */
  PRISM = "PRISM",
  /** 当针对老花的时候,可以允许用户直接选择一个度数, 用户也可以切换到标准处方自定义. */
  READING = "READING",
}

/** 处方类型, 老花处方/标准处方 */
export enum RxType {
  /** 针对游泳镜, 项链镜, 用户可以只输入度数即可加入购物车. */
  DIRECT_DEGREES = "DIRECT_DEGREES",
  /** 标准处方: 老花处方 */
  READING = "READING",
  /** 标准处方: 自定义选项 */
  STANDARD = "STANDARD",
}

export enum SearchIndexRankingType {
  addToCartRanking = "addToCartRanking",
  checkoutPaidRanking = "checkoutPaidRanking",
  checkoutWaitingPayRanking = "checkoutWaitingPayRanking",
  favoriteRanking = "favoriteRanking",
  lensStepT1Ranking = "lensStepT1Ranking",
  lensStepT2Ranking = "lensStepT2Ranking",
  lensStepT3Ranking = "lensStepT3Ranking",
  lensStepT4Ranking = "lensStepT4Ranking",
  reviewRanking = "reviewRanking",
  reviewUserShowRanking = "reviewUserShowRanking",
}

export enum SortOrder {
  ASC = "ASC",
  DESC = "DESC",
}

export enum StockMovementType {
  ADJUSTMENT = "ADJUSTMENT",
  ALLOCATION = "ALLOCATION",
  CANCELLATION = "CANCELLATION",
  RELEASE = "RELEASE",
  RETURN = "RETURN",
  SALE = "SALE",
}

export enum SubscriptionType {
  email = "email",
  phone = "phone",
}

export enum SupplierOrderLineProcessState {
  /** 订单取消 */
  Cancelled = "Cancelled",
  /** 已审单 */
  Examined = "Examined",
  /** 不能加工, 可能加工中心的一些因素 */
  InProcessable = "InProcessable",
  /** 异常单 */
  Issue = "Issue",
  /** 镜片被加工中心取走 */
  LensTakeAway = "LensTakeAway",
  /** 无需加工, 平光 */
  NeedLess = "NeedLess",
  /** 未处理 */
  None = "None",
  /** 已订片 */
  Ordered = "Ordered",
  /** 已加工 */
  Processing = "Processing",
  /** 已发货 */
  Shipped = "Shipped",
  /** 未加工 */
  Waiting = "Waiting",
}

export enum SupplierStockAdjustType {
  /** 未配置 */
  NONE = "NONE",
  /** 虚拟库存+真实库存 */
  STOCK_BOTH = "STOCK_BOTH",
  /** 在途中... */
  STOCK_IN_TRANSIT = "STOCK_IN_TRANSIT",
  /** 真实库存 */
  STOCK_REAL = "STOCK_REAL",
  /** 在途中转换到入库 */
  STOCK_TRANSIT_TO_STOCK = "STOCK_TRANSIT_TO_STOCK",
  /** 虚拟库存 */
  STOCK_VIRTUAL = "STOCK_VIRTUAL",
}

export enum TopicLinkPosition {
  SiteFooter = "SiteFooter",
  SiteHelperCenter = "SiteHelperCenter",
  SiteTopNav = "SiteTopNav",
  SiteVideoGuide = "SiteVideoGuide",
}

/** Current widget configuration entity */
export enum ViewWidgetEntityName {
  /** Category entity */
  Collection = "Collection",
  /** Product entity */
  Product = "Product",
}

/** Current widget configuration group name, for easy backend retrieval */
export enum ViewWidgetGroupName {
  /** Category page bottom */
  CollectionBottom = "CollectionBottom",
  /** Category page top */
  CollectionTop = "CollectionTop",
  /** Unclassified, default value */
  Unclassified = "Unclassified",
}
