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
