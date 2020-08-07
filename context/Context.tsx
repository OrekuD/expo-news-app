import React, { createContext, useContext, useState, useEffect } from "react";
import { AppContext, Colors, NewsObj } from "../types";
import { light, dark } from "../constants/Colors";

interface ProviderProps {
  children: React.ReactNode;
}

const Context = createContext<AppContext>({
  darkTheme: false,
  toggleTheme: () => {},
  toggleLinks: () => {},
  linksInExternalBrowser: false,
  colors: light,
  showTabBar: true,
  toggleTabbar: () => {},
  activeNews: null,
  setActiveNews: () => {},
});

const Provider = ({ children }: ProviderProps) => {
  const [darkTheme, setTheme] = useState<boolean>(true);
  const [linksInExternalBrowser, setLinksInExternalBrowser] = useState<boolean>(
    false
  );
  const [showTabBar, setShowTabBar] = useState<boolean>(true);
  const [colors, setColors] = useState<Colors>(light);
  const [activeNews, setNews] = useState<NewsObj | null>(null);

  const toggleTheme = () => {
    setTheme(!darkTheme);
  };

  const toggleLinks = () => {
    setLinksInExternalBrowser(!linksInExternalBrowser);
  };

  const setActiveNews = (news: NewsObj) => {
    setNews(news);
  };

  const toggleTabbar = (state: boolean) => {
    setShowTabBar(state);
  };

  useEffect(() => {
    if (darkTheme) {
      setColors(dark);
    } else {
      setColors(light);
    }
  }, [darkTheme]);

  const state: AppContext = {
    colors,
    darkTheme,
    toggleTheme,
    toggleTabbar,
    showTabBar,
    activeNews,
    setActiveNews,
    toggleLinks,
    linksInExternalBrowser,
  };
  return <Context.Provider value={state}>{children}</Context.Provider>;
};

export const useAppContext = () => useContext(Context);

export default Provider;
