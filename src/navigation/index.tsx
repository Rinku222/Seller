import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import Login from '../screens/Auth/login';
import SignUp from '../screens/Auth/signUp';
import Splash from '../screens/Auth/Splash';
import Home from '../screens/Home';
import BottomTab from './BottomTab';
import OTP from '../screens/Auth/OTP';
import AddProduct from '../screens/AddProduct/AddProduct';

const AppContainer = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function AuthScreens() {
  return (
    <AuthStack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      {/* <AuthStack.Screen component={Splash} name="Splash" options={{gestureEnabled: false}} /> */}
      <AuthStack.Screen
        component={Login}
        name="Login"
        options={{gestureEnabled: false}}
      />
      <AuthStack.Screen
        component={SignUp}
        name="signUp"
        options={{gestureEnabled: false}}
      />
      <AuthStack.Screen
        component={OTP}
        name="OTP"
        options={{gestureEnabled: false}}
      />
      <AuthStack.Screen
        component={Splash}
        name="Splash"
        options={{gestureEnabled: false}}
      />
    </AuthStack.Navigator>
  );
}

const renderTabBar = (props: BottomTabBarProps) => <BottomTab {...props} />;

function AppScreens() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={renderTabBar}>
      <Tab.Screen component={Home} name="home" />
      <Tab.Screen component={Home} name="chat" />
      <Tab.Screen component={Home} name="wishlist" />
      <Tab.Screen component={Home} name="profile" />
    </Tab.Navigator>
  );
}

// function HomeStackScreens() {
//   return (
//     <HomeStack.Navigator
//       screenOptions={{
//         headerShown: false,
//       }}>
//       <HomeStack.Screen component={Home} name="Home" options={{gestureEnabled: false}} />
//     </HomeStack.Navigator>
//   );
// }

// function ProfileStackScreens() {
//   return (
//     <HomeStack.Navigator
//       screenOptions={{
//         headerShown: false,
//       }}>
//       <HomeStack.Screen
//         component={HomeProfile}
//         name="HomeProfile"
//         options={{gestureEnabled: false}}
//       />
//       <HomeStack.Screen
//         component={PersonalInfo}
//         name="PersonalInfo"
//         options={{gestureEnabled: false}}
//       />
//       <HomeStack.Screen component={About} name="About" options={{gestureEnabled: false}} />
//       <HomeStack.Screen component={MyCourses} name="MyCourses" options={{gestureEnabled: false}} />
//       <HomeStack.Screen
//         component={MyCertificates}
//         name="MyCertificates"
//         options={{gestureEnabled: false}}
//       />
//       <HomeStack.Screen
//         component={EditEmail}
//         name="change_email"
//         options={{gestureEnabled: false}}
//       />
//       <HomeStack.Screen
//         component={EditPhone}
//         name="change_phone"
//         options={{gestureEnabled: false}}
//       />
//       <HomeStack.Screen
//         component={EditPassword}
//         name="change_password"
//         options={{gestureEnabled: false}}
//       />
//       <HomeStack.Screen
//         component={UpdateSuccess}
//         name="update_success"
//         options={{gestureEnabled: false}}
//       />
//       {/* <HomeStack.Screen
//         component={VerificationMail}
//         name="mail_verification"
//         options={{gestureEnabled: false}}
//       /> */}
//     </HomeStack.Navigator>
//   );
// }

// function WishListStackScreens() {
//   return (
//     <HomeStack.Navigator
//       screenOptions={{
//         headerShown: false,
//       }}>
//       <HomeStack.Screen component={WishList} name="WishList" options={{gestureEnabled: false}} />
//     </HomeStack.Navigator>
//   );
// }

// function SearchListStackScreens() {
//   return (
//     <HomeStack.Navigator
//       screenOptions={{
//         headerShown: false,
//       }}>
//       <HomeStack.Screen component={Search} name="SearchList" options={{gestureEnabled: false}} />
//     </HomeStack.Navigator>
//   );
// }

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <AppContainer.Navigator screenOptions={{headerShown: false}}>
        <AppContainer.Screen
          component={AddProduct}
          name="Add_product"
          options={{gestureEnabled: false}}
        />

        <AppContainer.Screen
          component={AuthScreens}
          name="Auth"
          options={{gestureEnabled: false}}
        />

        <AppContainer.Screen
          component={AppScreens}
          name="App"
          options={{gestureEnabled: false}}
        />

        {/* <AppContainer.Screen component={MainScreen} name="VideosScreen" />
        <AppContainer.Screen component={PDFExample} name="PDFScreen" />
        <AppContainer.Screen component={Quiz} name="Quiz" />
        <AppContainer.Screen component={Step1} name="Step1" />
        <AppContainer.Screen component={Step2} name="Step2" />
        <AppContainer.Screen component={Failed} name="Transaction_Failed" />
        <AppContainer.Screen component={Success} name="Transaction_Success" /> */}

        {/* <AppContainer.Screen component={Home} name="VideosScreen" /> */}
      </AppContainer.Navigator>
    </NavigationContainer>
  );
}
