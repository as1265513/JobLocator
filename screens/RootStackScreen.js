import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './SplashScreen';
import BusinessRegistration from './BusinessRegistration';
import SignUpScreen from './SignUpScreen'
import LoginScreen from "./LoginScreen"
import Dummy from "./dummy"
import PersonalRegistration from "./PersonalRegistration"
import BusinessProfileScreen from "./BusinessProfileScreen"
import ExploreScreen from "./ExploreScreen"
import FindJob from './FindJob';
import PostJob from './PostJob';
import CustomerRegistration from './CustomerRegistration';
import HomeScreen from "./HomeScreen"
import MainTabBusiness from "./MainTabBusiness"
import ApplyScreen from "./ApplyScreen"
import MyMaps from "./MyMaps"
import AppliedJobsCustomer from "./AppliedJobsCustomer"
import MainTabCustomer from "./MainTabCustomer";
import {createStore} from "redux"
import {Provider} from "react-redux"
import {reducers} from "../reducers/reducers"
import EditbusinessProfileScreen from './EditbusinessProfileScreen';
import EditCustomerProfile from "./EditCustomerProfile"
import DropScreen from "./DropScreen"
import { DrawerContent } from './DrawerContent';

const store= createStore(reducers)
const RootStack = createStackNavigator();

   const RootStackScreen = () => (
    <Provider store={store}>
        <RootStack.Navigator headerMode='none' initialRouteName="LoginScreen">
        <RootStack.Screen name="PostJob" component={PostJob}/>
        <RootStack.Screen name="AppliedJobsCustomer" component={AppliedJobsCustomer}/>
        <RootStack.Screen name="CustomerRegistration" component={CustomerRegistration}/>
        <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
        <RootStack.Screen name="ExploreScreen" component={ExploreScreen}/>
        <RootStack.Screen name="BusinessRegistration" component={BusinessRegistration}/>
        <RootStack.Screen name="PersonalRegistration" component={PersonalRegistration}/>
        <RootStack.Screen name="BusinessProfileScreen" component={BusinessProfileScreen}/>
        <RootStack.Screen name="LoginScreen" component={LoginScreen}/>
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen}/>
        <RootStack.Screen name="FindJob" component={FindJob}/>
        <RootStack.Screen name="HomeScreen" component={HomeScreen}/>
        <RootStack.Screen name="MainTabBusiness" component={MainTabBusiness}/>
        <RootStack.Screen name="EditbusinessProfileScreen" component={EditbusinessProfileScreen}/>
        <RootStack.Screen name="DrawerContent" component={DrawerContent}/>
        <RootStack.Screen name="MainTabCustomer" component={MainTabCustomer}/>
        <RootStack.Screen name="EditCustomerProfile" component={EditCustomerProfile}/>
        <RootStack.Screen name="ApplyScreen" component={ApplyScreen}/>
        <RootStack.Screen name="MyMaps" component={MyMaps}/>
        <RootStack.Screen name="DropScreen" component={DropScreen}/>
        <RootStack.Screen name="Dummy" component={Dummy}/>
      
    </RootStack.Navigator>
    </Provider>
);

export default RootStackScreen;