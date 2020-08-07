export interface AppContext {
  darkTheme: boolean;
  toggleTheme: () => void;
  colors: Colors;
  toggleTabbar: (state: boolean) => void;
  showTabBar: boolean;
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
