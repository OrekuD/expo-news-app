import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  Feather,
  FontAwesome5,
} from "@expo/vector-icons";
import {
  HomeScreen,
  NewsScreen,
  SettingsScreen,
  NewsWeb,
  SearchScreen,
} from "../screens";
import { StatusBar } from "react-native";
import { useAppContext } from "../context/Context";
import { HomeStackParamList, TabParamList, NewsStackParamList } from "../types";

const HomeStack = createStackNavigator<HomeStackParamList>();
const NewsStack = createStackNavigator<NewsStackParamList>();
const BottomTab = createBottomTabNavigator<TabParamList>();

const NewsStackNavigator = () => {
  return (
    <NewsStack.Navigator
      headerMode="none"
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <NewsStack.Screen name="News" component={NewsScreen} />
      <NewsStack.Screen
        name="NewsWeb"
        component={NewsWeb}
        options={{
          ...TransitionPresets.ModalPresentationIOS,
        }}
      />
    </NewsStack.Navigator>
  );
};

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator
      headerMode="none"
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Search" component={SearchScreen} />
      <HomeStack.Screen name="News" component={NewsStackNavigator} />
    </HomeStack.Navigator>
  );
};

const BottomTabNavigator = () => {
  const { colors, showTabBar } = useAppContext();
  return (
    <BottomTab.Navigator
      tabBarOptions={{
        style: { backgroundColor: colors.deep, height: 70 },
        showLabel: false,
      }}
      screenOptions={{
        tabBarVisible: showTabBar,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome5
              name="fire"
              color={focused ? colors.text : "grey"}
              size={26}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name="ios-settings"
              color={focused ? colors.text : "grey"}
              size={32}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

const MainNavigator = () => {
  const { darkTheme } = useAppContext();
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor="transparent"
        barStyle={darkTheme ? "light-content" : "dark-content"}
        translucent
      />
      <BottomTabNavigator />
    </NavigationContainer>
  );
};

export default MainNavigator;
