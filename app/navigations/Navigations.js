import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import RestaurantsScreenStacks from "./RestaurantsStacks";
import TopListsScreenStacks from "./TopListsStacks";
import MyAccountScreenStacks from "./AccountStacks";

const NavigationStacks = createBottomTabNavigator(
  {
    Restaurants: {
      screen: RestaurantsScreenStacks,
      tabBarLabel: "Home",
      tabBarIcon: ({ tintColor }) => (
        <Icon
          type="material-community"
          name="magnify"
          fontsize={22}
          color={tintColor}
        />
      )
    },
    TopLists: {
      screen: TopListsScreenStacks,
      tabBarLabel: "Ranking",
      tabBarIcon: ({ tintColor }) => (
        <Icon
          type="material-community"
          name="magnify"
          fontsize={22}
          color={tintColor}
        />
      )
    },
    Account: {
      screen: MyAccountScreenStacks,
      tabBarLabel: "Cuenta",
      tabBarIcon: ({ tintColor }) => (
        <Icon
          type="material-community"
          name="home-outline"
          fontsize={22}
          color={tintColor}
        />
      )
    }
  },
  {
    initialRouteName: "Account",
    order: ["Restaurants", "TopLists", "Account"],
    tabBarOptions: {
      inactiveTintColor: "#646464",
      activeTintColor: "#00a680"
    }
  }
);

export default createAppContainer(NavigationStacks);
