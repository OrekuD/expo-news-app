import React, { createContext, useContext, useState, useEffect } from "react";
import { AppContext, Colors, NewsObj } from "../types";
import { light, dark } from "../constants/Colors";
import { useAsyncStorage } from "@react-native-community/async-storage";

interface ProviderProps {
  children: React.ReactNode;
}

const Context = createContext<AppContext>({
  darkTheme: false,
  toggleTheme: () => {},
  toggleLinks: () => {},
  addArticle: () => {},
  removeArticle: () => {},
  savedArticles: [],
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
  const [savedArticles, setSavedArticles] = useState<Array<NewsObj>>([]);
  const { getItem, setItem } = useAsyncStorage("savedArticles");

  const readArticlesFromStorage = async () => {
    const articles = await getItem();
    if (!articles) {
      setItem(JSON.stringify([]));
    } else {
      setSavedArticles(JSON.parse(articles));
    }
  };

  const removeArticle = async (removeArticle: NewsObj) => {
    let tempArticles = [...savedArticles];
    await setItem(
      JSON.stringify(
        tempArticles.filter((article) => article.title != removeArticle.title)
      )
    );
    setSavedArticles(
      tempArticles.filter((article) => article.title != removeArticle.title)
    );
  };

  const addArticle = async (article: NewsObj) => {
    setSavedArticles([...savedArticles, article]);
    await setItem(JSON.stringify(savedArticles));
  };

  useEffect(() => {
    readArticlesFromStorage();
  }, []);

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
    addArticle,
    removeArticle,
    savedArticles,
  };
  return <Context.Provider value={state}>{children}</Context.Provider>;
};

export const useAppContext = () => useContext(Context);

export default Provider;
