// In App.js in a new project
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from 'config/colors';
import * as React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AdviceFromUsScreen from 'screens/advice-from-us';
// import ContactUsScreen from 'screens/shopping';
import CategoriesScreen from 'screens/categories';
import DriveWithUsScreen from 'screens/drive-with-us';
import DriverLoginScreen from 'screens/driver-login';
import DriverSignup from 'screens/driver-signup';
import ForgotPasswordScreen from 'screens/forgot-password';
import LanguageScreen from 'screens/language-screen';
import LoginScreen from 'screens/login-screen';
import Me from 'screens/me';
import Notifications from 'screens/notifications';
import Onboarding from 'screens/on-boarding';
import OurServicesScreen from 'screens/our-services';
import ResetPasswordScreen from 'screens/reset-password';
import Search from 'screens/search';
import Signup from 'screens/signup';
import SignupNext from 'screens/signup-part-2';
import Splash from 'screens/splash';
import WhereToMoveScreen from 'screens/where-to-move';
import { horizontalAnimation } from '../utils';
import DrawerNavigation from './drawer-navigation/drawer-navigation';

import MOTDetailsScreen from 'screens/MOT-details';
import AddVehicleScreen from 'screens/add-vehicle';
import BankDetailsScreen from 'screens/bank-details';
import CartScreen from 'screens/cart';
import CompanyDetailsScreen from 'screens/company-details';
import ContactUsScreen from 'screens/contact-us';
import DiscoveryScreen from 'screens/patient-maangement-screen';
import GoodsInTransitScreen from 'screens/goods-in-transit';
import HistoryScreen from 'screens/history';
import InboxScreen from 'screens/inbox-screen';
import LicenseDetailsScreen from 'screens/license-details';
import ManageVehicleDocumentScreen from 'screens/manage-vehicle-document';
import ManageVehicleScreen from 'screens/manage-vehicles';
import MessageHomeScreen from 'screens/messageHome';
import MyOrderScreen from 'screens/my-order';
import OrderDetailsScreen from 'screens/order-details';
import PrivacyPolicyScreen from 'screens/privacy-policy';
import SignupCard from 'screens/signup-part-3';
import TermsandConditionsScreen from 'screens/terms-and-conditions';
import UpdateProfileScreen from 'screens/update_profile';
import UploadDocumentsScreen from 'screens/upload-documents';
import VehicleInsuranceScreen from 'screens/vehicle-insurance';
import { PatientStack } from './patient-navigation/patient-stack';
import { DiscoveryStack } from './discovery-navigation/discovery-stack';

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 0, backgroundColor: colors.primary}} />
      <StatusBar
        translucent={false}
        backgroundColor={colors.white}
        barStyle={'dark-content'}
      />
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={horizontalAnimation}>
        <Stack.Group>
          <Stack.Screen name="Splash" component={Splash} />
          {/* <Stack.Screen name="UserTab" component={UserTab} /> */}
          <Stack.Screen name="Onboarding" component={Onboarding} />
          <Stack.Screen name="ContactUsScreen" component={ContactUsScreen} />
          <Stack.Screen name="Me" component={Me} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen
            name="ForgotPasswordScreen"
            component={ForgotPasswordScreen}
          />

          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
          <Stack.Screen name="SignupNext" component={SignupNext} />
          <Stack.Screen name="SignupCard" component={SignupCard} />
          <Stack.Screen name="Notifications" component={Notifications} />
          <Stack.Screen name="LanguageScreen" component={LanguageScreen} />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen
            name="OurServicesScreen"
            component={OurServicesScreen}
          />
          <Stack.Screen
            name="UpdateProfileScreen"
            component={UpdateProfileScreen}
          />
          <Stack.Screen name="MyOrderScreen" component={MyOrderScreen} />
          <Stack.Screen
            name="TermsandConditionsScreen"
            component={TermsandConditionsScreen}
          />
          <Stack.Screen
            name="UploadDocumentsScreen"
            component={UploadDocumentsScreen}
          />
          <Stack.Screen
            name="CompanyDetailsScreen"
            component={CompanyDetailsScreen}
          />
          <Stack.Screen
            name="PrivacyPolicyScreen"
            component={PrivacyPolicyScreen}
          />
          <Stack.Screen name="AddVehicleScreen" component={AddVehicleScreen} />
          <Stack.Screen name="InboxScreen" component={InboxScreen} />
          <Stack.Screen
            name="MessageHomeScreen"
            component={MessageHomeScreen}
          />
          <Stack.Screen
            name="ManageVehicleScreen"
            component={ManageVehicleScreen}
          />
          <Stack.Screen name="MOTDetailsScreen" component={MOTDetailsScreen} />
          <Stack.Screen
            name="VehicleInsuranceScreen"
            component={VehicleInsuranceScreen}
          />
          <Stack.Screen
            name="LicenseDetailsScreen"
            component={LicenseDetailsScreen}
          />
          <Stack.Screen
            name="ManageVehicleDocumentScreen"
            component={ManageVehicleDocumentScreen}
          />
          <Stack.Screen
            name="BankDetailsScreen"
            component={BankDetailsScreen}
          />
          <Stack.Screen
            name="GoodsInTransitScreen"
            component={GoodsInTransitScreen}
          />
          <Stack.Screen name="HistoryScreen" component={HistoryScreen} />
          <Stack.Screen
            name="OrderDetailsScreen"
            component={OrderDetailsScreen}
          />
          <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} />
          <Stack.Screen name="CartScreen" component={CartScreen} />
          <Stack.Screen
            name="DriveWithUsScreen"
            component={DriveWithUsScreen}
          />
          <Stack.Screen
            name="AdviceFromUsScreen"
            component={AdviceFromUsScreen}
          />
          {/* <Stack.Screen
            name="PatientScreen"
            component={PatientScreen}
          /> */}
  
          <Stack.Screen
            name="DriverLoginScreen"
            component={DriverLoginScreen}
          />
          <Stack.Screen
            name="WhereToMoveScreen"
            component={WhereToMoveScreen}
          />
          <Stack.Screen
            name="DiscoveryScreen"
            component={DiscoveryScreen}
          />
        </Stack.Group>

        
        <Stack.Screen name="Drawer" component={DrawerNavigation} />
        <Stack.Screen name="PatientStack" component={PatientStack} />
        <Stack.Screen name="DiscoveryStack" component={DiscoveryStack} />
        <Stack.Screen name="DriverSignup" component={DriverSignup} />
      </Stack.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});
