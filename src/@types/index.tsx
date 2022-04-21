export interface APIUserInfo {
  accountName: string;
  culture: string;
  currency: string;
  dateFormat: string;
  dateFormatShort: string;
  decimalSeparator: string;
  description: string;
  dictionary: { [key: string]: string };
  displayName: string;
  fullName: string;
  name: string;
  thumbnailPhoto: [];
  title: string;
  theme: string;
  preferences: Preference[];
}

export interface Unauthorized {
  unauthorized: boolean;
}

export interface Preference {
  id?: number;
  attribute: string;
  value?: string;
  userKey?: string;
}

export interface APIMenu {
  id: string;
  siteId: string;
  name: string;
  description: string;
  indicatorDescription: string;
  note: string;
  iconCssClass: string;
  parentId: string;
  order: Number;
  level: Number;
  enabled: boolean;
  url: string;
  stepId: string;
  tourTitle: string;
  tourDescription: string;
  isEmbedded: boolean;
  subItems: Array<APIMenu>;
}

export interface API<T> {
  data?: {
    result?: T;
  };
  trace: {
    transactions: Transaction[];
  };
  message?: string;
  detail?: string;
}
export interface Transaction {
  backendTime: number;
  dalTime: number;
  name: string;
}

export interface TXError {
  error?: string;
}
