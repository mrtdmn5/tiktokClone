import { Dimensions, View, StyleSheet } from "react-native";
import UserDetailsProvider from "../../contexts/UserDetailsProvider";
import React, { useContext } from "react";
import Home from "./index";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Entypo,
  FontAwesome,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

 const Navigation=()=> {
  return (
    <UserDetailsProvider>
      <View style={styles.container}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
              tabBarStyle: {
                backgroundColor: "black",
              },
              tabBarActiveTintColor: "white",
            }}
            initialRouteName="Home"
          >
            <Tab.Screen
              name="Home"
              component={Home}
              options={{
                tabBarIcon: ({ color }) => (
                  <Entypo name="home" size={24} color={color} />
                ),
              }}
            />

            <Tab.Screen
              name="Serach"
              component={Home}
              options={{
                tabBarIcon: ({ color }) => (
                  <FontAwesome name="search" size={24} color={color} />
                ),
              }}
            />

            <Tab.Screen
              name="Upload"
              component={Home}
              options={{
                tabBarIcon: ({ color }) => (
                  <AntDesign name="plussquare" size={30} color="white" />
                ),
              }}
            />

            <Tab.Screen
              name="Notification"
              component={Home}
              options={{
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons
                    name="message-minus-outline"
                    size={24}
                    color={color}
                  />
                ),
              }}
            />

            <Tab.Screen
              name="Profil"
              component={Home}
              options={{
                tabBarIcon: ({ color }) => (
                  <AntDesign name="user" size={24} color={color} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    </UserDetailsProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    backgroundColor: "black",
  },
  home: {},
});
export default Navigation