import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { colors } from 'config/colors';
import * as React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import UserTab from 'screens/user-tab';
import TabParamList from '../types/navigation-types/bottom-tab';
import HomeTab from 'screens/home-tab';
import PatientScreen from 'screens/patient-screen';
const Tab = createMaterialTopTabNavigator();
// const Tab = createBottomTabNavigator();
// const BottomTab = createNativeStackNavigator<TabParamList>();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        unmountOnBlur: true,
        // tabBarIcon: ({ focused, color, size }) => {
        //   let iconName = 'home';
        //   if (route.name === 'HomeTab') {
        //     iconName = 'home';
        //   } else if (route.name === 'SearchTab') {
        //     iconName = 'search';
        //   } else if (route.name === 'UserTab') {
        //     iconName = 'user';
        //   }
        //   // You can return any component that you like here!
        //   return <FontAwesome name={iconName} size={size} color={color} />;
        // },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="PatientScreen" component={PatientScreen} options={{tabBarLabel:"Dashboard"}} />
      <Tab.Screen name="UserTab" component={UserTab} />
    </Tab.Navigator>
  );
};
export default TabNavigator;
