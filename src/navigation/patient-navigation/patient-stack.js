// In App.js in a new project
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import { horizontalAnimation } from 'utils';

import UserTab from 'screens/user-tab';
import PatientTabNavigator from './toptab';
import PatientScreen from 'screens/patient-screen';
import AddPatientScreen from 'screens/add-patient';
import AppointmentsScreen from 'screens/appointments';
import ImportPatientScreen from 'screens/import-patient';
import PatientSyncScreen from 'screens/patient-sync';
import PatientManagement from 'screens/patient-maangement-screen';
import ViewPatientDetailsScreen from 'screens/view-patient-detail';
const Stack = createNativeStackNavigator();

export const PatientStack = props => {
  const {inititalRoute, slug, screen} = props?.route?.params || {};
  return (
    <View style={styles.container}>
      <Stack.Navigator
        initialRouteName={inititalRoute || 'PatientTabNavigator'}
        screenOptions={horizontalAnimation}>
        <Stack.Screen name="PatientTabNavigator" component={PatientTabNavigator} />
        <Stack.Screen name="PatientScreen" component={PatientScreen} />
        <Stack.Screen name="PatientManagement" component={PatientManagement} />
        <Stack.Screen name="AddPatientScreen" component={AddPatientScreen} />
        <Stack.Screen name="AppointmentsScreen" component={AppointmentsScreen} />
        <Stack.Screen name="ImportPatientScreen" component={ImportPatientScreen} />
        <Stack.Screen name="PatientSyncScreen" component={PatientSyncScreen} />
        <Stack.Screen name="ViewPatientDetailsScreen" component={ViewPatientDetailsScreen} />
      </Stack.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});
