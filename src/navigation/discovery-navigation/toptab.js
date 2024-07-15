// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
// import {colors} from 'config/colors';
// import {mvs} from 'config/metrices';
// import * as React from 'react';
// import AddVehicleScreen from 'screens/add-vehicle';
// import DiscoveryScreen from 'screens/discovery-screen';
// import MyOrderScreen from 'screens/my-order';
// import OrderDetailsScreen from 'screens/order-details';
// import PatientScreen from 'screens/patient-screen';
// import TermsandConditionsScreen from 'screens/terms-and-conditions';
// import UserTab from 'screens/user-tab';
// import Medium from 'typography/medium-text';
// import Regular from 'typography/regular-text';
// const Tab = createMaterialTopTabNavigator();

// const capitalizeFirstLetter = string => {
//   return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
// };

// // const Tab = createBottomTabNavigator();
// // const BottomTab = createNativeStackNavigator<TabParamList>();
// const PatientTabNavigator = () => {
//   return (
//     // <Tab.Navigator
//     //   screenOptions={({route}) => ({
//     //     headerShown: false,
//     //     unmountOnBlur: true,
//     //     // tabBarIcon: ({ focused, color, size }) => {
//     //     //   let iconName = 'home';
//     //     //   if (route.name === 'HomeTab') {
//     //     //     iconName = 'home';
//     //     //   } else if (route.name === 'SearchTab') {
//     //     //     iconName = 'search';
//     //     //   } else if (route.name === 'UserTab') {
//     //     //     iconName = 'user';
//     //     //   }
//     //     //   // You can return any component that you like here!
//     //     //   return <FontAwesome name={iconName} size={size} color={color} />;
//     //     // },
//     //     tabBarActiveTintColor: colors.primary,
//     //     tabBarInactiveTintColor: 'gray',
//     //   })}>
//     <Tab.Navigator
//     screenOptions={({ route }) => ({
//       headerShown: false,
//       unmountOnBlur: true,
//       tabBarLabelStyle: ({ focused }) => ({
//         color: focused ? colors.bluecolor : 'gray',
//         fontWeight: focused ? "700" : "600",
//         textTransform: 'none', // Prevent default uppercase transformation
//         flex: 1,
//         textAlign: 'center', // Center the text
//       }),
//       tabBarItemStyle: {
//         flex: 1, // Make each tab take equal space
//       },
//       tabBarScrollEnabled: true, // Enable scrolling if labels exceed screen width
//       tabBarActiveTintColor: colors.primary,
//       tabBarInactiveTintColor: 'gray',
//     })}
//   >
//       <Tab.Screen
//         name="PatientScreen"
//         component={PatientScreen}
//         options={{
//           tabBarLabel: ({ focused }) => (
//             <Medium style={{ color: focused ? colors.bluecolor : 'gray' ,fontWeight: focused ?  "700":"600"}}>
//               {capitalizeFirstLetter('dashboard')}
//             </Medium>
//           ),
//           tabBarGap: mvs(20)
//         }}
//       />
//       <Tab.Screen
//         name="UserTab"
//         component={UserTab}
//         options={{
//           tabBarLabel: ({ focused }) => (
//             <Medium style={{ color: focused ? colors.bluecolor : 'gray' ,fontWeight: focused ?  "700":"600"}}>
//               {capitalizeFirstLetter('patient Management')}
//             </Medium>
//           ),
//           tabBarGap: mvs(20)
//         }}
//       />
//       <Tab.Screen
//         name="DiscoveryScreen"
//         component={DiscoveryScreen}
//         options={{
//           tabBarLabel: ({ focused }) => (
//             <Medium style={{ color: focused ? colors.bluecolor : 'gray' ,fontWeight: focused ?  "700":"600"}}>
//               {capitalizeFirstLetter('add patient')}
//             </Medium>
//           ),
//           tabBarGap: mvs(20)
//         }}
//       />
//       <Tab.Screen
//         name="TermsandConditionsScreen"
//         component={TermsandConditionsScreen}
//         options={{
//           tabBarLabel: ({ focused }) => (
//             <Medium style={{ color: focused ? colors.bluecolor : 'gray' ,fontWeight: focused ?  "700":"600"}}>
//               {capitalizeFirstLetter('appointment')}
//             </Medium>
//           ),
//           tabBarGap: mvs(20)
//         }}
//       />
//       <Tab.Screen
//         name="AddVehicleScreen"
//         component={AddVehicleScreen}
//         options={{
//           tabBarLabel: ({ focused }) => (
//             <Medium style={{ color: focused ? colors.bluecolor : 'gray' ,fontWeight: focused ?  "700":"600"}}>
//               {capitalizeFirstLetter('import')}
//             </Medium>
//           ),
//           tabBarGap: mvs(20)
//         }}
//       />
//     </Tab.Navigator>
//   );
// };
// export default PatientTabNavigator;
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { colors } from 'config/colors';
import { mvs } from 'config/metrices';
import * as React from 'react';
import { Dimensions } from 'react-native';
import AddPatientScreen from 'screens/add-patient';
import AppointmentsScreen from 'screens/appointments';

import DiscoverytManagement from 'screens/discovery-module/discovery-maangement-screen';
import DiscoveryScreen from 'screens/discovery-module/discovery-screen';
import NewSearchScreen from 'screens/discovery-module/new-search';
import ImportPatientScreen from 'screens/import-patient';
import PatientSyncScreen from 'screens/patient-sync';
import Medium from 'typography/medium-text';

const Tab = createMaterialTopTabNavigator();

const capitalizeFirstLetter = string => {
  return string
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};



const DiscoveryTabNavigator = () => {
  const scrollViewRef = React.useRef(null);
  const [showArrow, setShowArrow] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const screenWidth = Dimensions.get('window').width;

  const handleScroll = (event) => {
    const contentWidth = event.nativeEvent.contentSize.width;
    setShowArrow(contentWidth > screenWidth);
  };

  const handleArrowPress = () => {
    const nextIndex = currentIndex + 1;
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: nextIndex * screenWidth,
        animated: true,
      });
      setCurrentIndex(nextIndex);
    }
  };
  return (
    <Tab.Navigator
    // tabBar={props => <CustomTabBar {...props} />} // Use the custom tab bar
      screenOptions={({ route }) => ({
        headerShown: false,
        unmountOnBlur: true,
        tabBarLabelStyle: {
          fontWeight: '600',
          textTransform: 'none', // Prevent default uppercase transformation
          textAlign: 'center', // Center the text
        },
        tabBarItemStyle: {
          width:mvs(200),
          minWidth:"auto" // Adjust the width to fit the label
        },
        tabBarScrollEnabled: true, // Enable scrolling if labels exceed screen width
        tabBarActiveTintColor: colors.bluecolor,
        tabBarInactiveTintColor: 'gray',
        tabBarIndicatorStyle: {
          backgroundColor: colors.bluecolor, // Color of the indicator
        },
      })}
    >
      <Tab.Screen
        name="DiscoveryScreen"
        component={DiscoveryScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <Medium
              style={{
                color: focused ? colors.bluecolor : 'gray',
                fontWeight: focused ? '700' : '600',
                width: focused ? 'auto' : mvs(100),

              }}
            >
              {capitalizeFirstLetter('dashboard')}
            </Medium>
          ),
        }}
      />
     
      <Tab.Screen
        name="DiscoverytManagement"
        component={DiscoverytManagement}
        options={{
          tabBarLabel: ({ focused }) => (
            <Medium
              style={{
                color: focused ? colors.bluecolor : 'gray',
                fontWeight: focused ? '700' : '600',
                width: focused ? 'auto' : mvs(200),
                marginLeft:mvs(60)
              }}
            >
              {capitalizeFirstLetter('discovery')}
            </Medium>
          ),
        }}
      />
       <Tab.Screen
        name="NewSearchScreen"
        component={NewSearchScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <Medium
              style={{
                color: focused ? colors.bluecolor : 'gray',
                fontWeight: focused ? '700' : '600',
                width: focused ? 'auto' : mvs(100),
              }}
            >
              {capitalizeFirstLetter('Search')}
            </Medium>
          ),
        }}
      />
    
      
     
    </Tab.Navigator>
  );
};

export default DiscoveryTabNavigator;
