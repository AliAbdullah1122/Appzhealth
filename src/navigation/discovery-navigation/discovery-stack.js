// In App.js in a new project
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import { horizontalAnimation } from 'utils';

import DiscoverytManagement from 'screens/discovery-module/discovery-maangement-screen';
import DiscoveryScreen from 'screens/discovery-module/discovery-screen';
import NewSearchScreen from 'screens/discovery-module/new-search';
import DiscoveryTabNavigator from './toptab';
const Stack = createNativeStackNavigator();

export const DiscoveryStack = props => {
  const {inititalRoute, slug, screen} = props?.route?.params || {};
  return (
    <View style={styles.container}>
      <Stack.Navigator
        initialRouteName={inititalRoute || 'DiscoveryTabNavigator'}
        screenOptions={horizontalAnimation}>
        <Stack.Screen name="DiscoveryTabNavigator" component={DiscoveryTabNavigator} />
        <Stack.Screen name="DiscoveryScreen" component={DiscoveryScreen} />
        <Stack.Screen name="DiscoverytManagement" component={DiscoverytManagement} />
        <Stack.Screen name="NewSearchScreen" component={NewSearchScreen} />
       
      </Stack.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});
