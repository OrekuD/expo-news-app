export interface AppContext {
  darkTheme: boolean;
  toggleTheme: () => void;
  linksInExternalBrowser: boolean;
  toggleLinks: () => void;
  colors: Colors;
  toggleTabbar: (state: boolean) => void;
  showTabBar: boolean;
  activeNews: NewsObj | null;
  setActiveNews: (news: NewsObj) => void;
}

export interface Colors {
  background: string;
  text: string;
  deep?: string;
}

export interface NewsObj {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: {
    id: string;
    name: string;
  };
  title: string;
  url: string;
  urlToImage: string;
}

export type TabParamList = {
  Home: undefined;
  Settings: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
  News: undefined;
  Search: undefined;
};

export type SearchStackParamList = {
  Search: undefined;
  News: undefined;
};

export type NewsStackParamList = {
  News: undefined;
  NewsWeb: undefined;
};
