

import React,{useState,useEffect} from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage"

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './HomeScreen';
import NotificationScreen from './NotificationScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './BusinessProfileScreen';
import EditProfileScreen from './EditbusinessProfileScreen';
import Icons from "react-native-vector-icons/Feather";
import Home from "react-native-vector-icons/Fontisto"
import Search from "react-native-vector-icons/MaterialIcons";
import Account from "react-native-vector-icons/MaterialIcons"
import Logout from "react-native-vector-icons/Feather"
import {useTheme, Avatar} from 'react-native-paper';
import {View} from 'react-native-animatable';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CardListScreen from './CardListScreen';
import CardItemDetails from './CardItemDetails';
import { DrawerContent } from './DrawerContent';
import {Text} from "react-native"
import LogoutScreen from "./LogoutScreen"

const HomeStack = createStackNavigator();
const NotificationStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => 
{
  const Test=()=>{
    return(console.log("Pressed"))
  }
 return(
 
  <Tab.Navigator initialRouteName="Home" activeColor="#fff">
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#2E2C2B',
        tabBarIcon: ({color}) => (
          <Home name="home" color={color} size={23} />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={ExploreScreen}
      options={{
        tabBarLabel: 'Search',
        tabBarColor: '#2E2C2B',
        tabBarIcon: ({color}) => (
          <Search name="search" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      initialParams={{page:'Profile'}}
      component={DrawerContent}
      options={{
        tabBarLabel: 'Account',
        tabBarColor: '#2E2C2B',
        tabBarIcon: ({color}) => (
          <Account name="account-circle" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Explore"
      component={LogoutScreen}
      options={{
        tabBarLabel: 'Logout',
        tabBarColor: '#2E2C2B',
        tabBarIcon: ({color}) => (
          <Logout name="log-out" color={color} size={26}  />
        ),
      }}
    />
  </Tab.Navigator>
);
    }

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#000",
          shadowColor: colors.background, // iOS
          elevation: 0, // Android
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        initialParams={{page:'Drawer'}}
        options={{
          title: '        Job Locator',
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <Icons.Button 
                name="menu"
                size={25}
                color='#fff'
                backgroundColor='#000'
                onPress={() => navigation.openDrawer()}
              />

            </View>
          ),
         
          
        }}
      />
      <HomeStack.Screen 
        name="CardListScreen"
        component={CardListScreen}
        options={({route}) => ({
          title: route.params.title,
          headerBackTitleVisible: false
        })}
      />
      <HomeStack.Screen 
        name="CardItemDetails"
        component={CardItemDetails}
        options={({route}) => ({
          // title: route.params.title,
          headerBackTitleVisible: false,
          headerTitle: false,
          headerTransparent: true,
          headerTintColor: '#fff'
        })}
      />
    </HomeStack.Navigator>
  );
};

const NotificationStackScreen = ({navigation}) => (
  <NotificationStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#1f65ff',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <NotificationStack.Screen
      name="Notifications"
      component={NotificationScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#1f65ff"
            onPress={() => navigation.openDrawer()}
          />
        ),
        
      }}
    />
  </NotificationStack.Navigator>
);

const ProfileStackScreen = ({navigation}) => {
  const {colors} = useTheme();

  return (
    <ProfileStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#000",
        shadowColor: colors.background, // iOS
        elevation: 0, // Android
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight:'bold'
      },
    }}>
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: '',
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <Icon.Button
                name="ios-menu"
                size={25}
                backgroundColor={colors.background}
                color={colors.text}
                onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
          headerRight: () => (
            <View style={{marginRight: 10}}>
              <MaterialCommunityIcons.Button
                name="account-edit"
                size={25}
                backgroundColor={colors.background}
                color={colors.text}
                onPress={() => navigation.navigate('EditProfile')}
              />
            </View>
          ),
        }}
      />
      <ProfileStack.Screen
        name="EditProfile"
        options={{
          title: 'Edit Profile',
        }}
        component={EditProfileScreen}
      />
    </ProfileStack.Navigator>
  );
};
