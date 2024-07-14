import messaging from '@react-native-firebase/messaging';
import {NavigationContainer} from '@react-navigation/native';
import {linking} from 'navigation/linking';
import {navigationRef} from 'navigation/navigation-ref';
import {RootNavigator} from 'navigation/root-navigation';
import React, {useEffect, useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {requestNotifications} from 'react-native-permissions';
import {Provider} from 'react-redux';
import {store} from 'store';
import './src/config/axios-interceptor';
import 'translation';
import Toast from 'react-native-toast-message';
import {useAuth0, Auth0Provider} from 'react-native-auth0';
import { PaperProvider } from 'react-native-paper';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [initialRoute, setInitialRoute] = useState<string | undefined>(
    'Splash',
  );
  useEffect(() => {
    async function requestPermission() {
      const result = await requestNotifications(['alert', 'sound', 'badge']);
      if (result.status === 'granted') {
        // Notifications allowed
      } else {
        // Notifications not allowed
      }
    }

    requestPermission();
  }, []);
  useEffect(() => {
    // Assume a message-notification contains a "type" property in the data payload of the screen to open
    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
      // navigation.navigate(remoteMessage?.data?.type);
    });

    // Check whether an initial notification is available
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
          // setInitialRoute(remoteMessage?.data?.type); // e.g. "Settings"
        }
        setLoading(false);
      });
  }, []);

  if (loading) {
    return null;
  }

  return (
    <SafeAreaProvider style={{flex: 1}}>
      <Auth0Provider domain={"dev-rfp1yizaltfjs3dc.us.auth0.com"} clientId={"Svun7aHQMs9pM0hMISr3WQ8sSUM6iDTC"}>
      <Provider store={store}>

      <PaperProvider>
        <NavigationContainer ref={navigationRef} linking={linking}>
          <RootNavigator />
        </NavigationContainer>
        </PaperProvider>
      </Provider>
      </Auth0Provider>
      <Toast />

    </SafeAreaProvider>
  );
};
export default App;
