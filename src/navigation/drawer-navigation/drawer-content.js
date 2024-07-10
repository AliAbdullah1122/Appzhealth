import AsyncStorage from '@react-native-async-storage/async-storage';
import * as IMG from 'assets/images';
import DrawerHomeCard from 'components/molecules/drawer-home-card';
import useInactivityHandler from 'components/molecules/inactivity-logout';
import { colors } from 'config/colors';
import { STORAGEKEYS } from 'config/constants';
import { mvs, width } from 'config/metrices';
import { useAppDispatch, useAppSelector } from 'hooks/use-store';
import { t } from 'i18next';
import { navigate, resetStack } from 'navigation/navigation-ref';
import React from 'react';
import { Alert, Image, ScrollView, StyleSheet, View } from 'react-native';
import { useAuth0 } from 'react-native-auth0';
import { getStatusChange, onLogoutPress } from 'services/api/auth-api-actions';
import { resetUser } from 'store/reducers/user-reducer';
import { setUserInfo } from 'store/reducers/user-reducer';
import Medium from 'typography/medium-text';
import Regular from 'typography/regular-text';
import { UTILS } from 'utils';
import { useNavigation } from '@react-navigation/native';
const CustomDrawerContent = props => {


  const navigation = useNavigation();
  const TIMEOUT_DURATION = 10000; // 5 minutes in milliseconds

  // const user = useAppSelector(s => s?.user);
  // const userInfo = user?.userInfo;
  const dispatch = useAppDispatch();

  const ChangeStatus = async () => {
    try {
      // Toggle the online_status between 0 and 1
      const newStatus = '0';

      // Make the API call with the new status
      const res = await getStatusChange(newStatus);

      // Update the userInfo with the new status
      const updatedUserInfo = {...userInfo, online_status: newStatus};

      // Update user info in AsyncStorage and Redux store
      await AsyncStorage.setItem(
        STORAGEKEYS.user,
        JSON.stringify(updatedUserInfo),
      );
      dispatch(setUserInfo(updatedUserInfo));

      console.log(' resp==========>', res);
    } catch (error) {
      console.log('Error:', UTILS.returnError(error));
      Alert.alert('Error', UTILS.returnError(error));
    }
  };

  const {user,clearSession} = useAuth0();
  console.log(user)
  
//  const onLogoutPress = () => {
//     return async () => {
//       try {
//         // await logout();
// await clearSession()
//         await UTILS.clearStorage();
//         // dispatch(resetUser(null));
  
//         resetStack('Splash');
//       } catch (error) {
//         console.log('error in onDeleteTask', UTILS.returnError(error));
//         Alert.alert('', UTILS.returnError(error));
//       }
//     };
//   };

const onPressLogout = async () => {
  try {
    await clearSession()
    await AsyncStorage.removeItem('accessToken');
    resetStack("Splash")
  } catch (e) {
    console.log('error', e);
  }
};
// const resetInactivityTimer = useInactivityHandler(TIMEOUT_DURATION, onPressLogout);

// React.useEffect(() => {
//   const unsubscribeFocus = navigation.addListener('focus', resetInactivityTimer);
//   return unsubscribeFocus;
// }, [navigation, resetInactivityTimer]);


  const LogoutAccount = async () => {
    Alert.alert('Logout!', 'Are you sure you want to Logout your account?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Logout',
        onPress: async () => {
          // if (user) {
            // Call ChangeStatus before logging out
            // await ChangeStatus();

            // Dispatch the logout action
            // dispatch(onLogoutPress());
            onPressLogout()
          // } else {
          //   props?.navigation?.navigate('Splash');
          // }
        },
      },
    ]);
  };
  return (
    <View style={styles.drawerContainer}>
      <View style={styles.header}>

        <View style={styles.drawerheader}>

          <Image
            source={{uri: user?.picture} || IMG.Drawerman}
            // source={user.picture? {uri: user?.picture} : IMG.Drawerman}
            style={styles.drawerman}
            // resizeMode="cover" 
          />
        </View>

       {/* <Regular> {user.name}</Regular> */}
            {/* {!user && <Regular>Not logged in</Regular>} */}
        <Medium
          label={user?.name  || 'guest'}
          fontSize={mvs(18)}
          color={colors.black}
          style={{marginTop: mvs(10)}}
        />
      </View>
      <ScrollView style={styles.scrololstyle}>
       
        <DrawerHomeCard
          onPress={() => navigate('ManageVehicleScreen')}
          icon1={IMG.home}
          label1={'Home'}
          br={8}
          containerStyle={styles.helpStyle}
        />

        <DrawerHomeCard
          onPress={() => navigate('UploadDocumentsScreen')}
          icon1={IMG.patients}
          label1={'Patients'}
          // br={8}
          containerStyle={styles.helpStyle}
        />
        <DrawerHomeCard
          onPress={() => navigate('HistoryScreen')}
          icon1={IMG.discovery}
          label1={'Discovery'}
          containerStyle={styles.helpStyle}
        />

        <DrawerHomeCard
          onPress={() => navigate('MessageHomeScreen')}
          icon1={IMG.eligibility}
          label1={'Eligibility'}
          containerStyle={styles.helpStyle}
        />
        <DrawerHomeCard
          onPress={() => navigate('ShoppingScreen')}
          icon1={IMG.claims}
          label1={'Claims'}
          containerStyle={styles.helpStyle}
        />
         <DrawerHomeCard
          onPress={() => navigate('Me')}
          icon1={IMG.user}
          label1={t('my_profile')}
          containerStyle={styles.helpStyle}
        />
      </ScrollView>

      <DrawerHomeCard
        onPress={() =>
          // userInfo
          //   ? dispatch(onLogoutPress())
          //   : props?.navigation?.navigate('Login')
          LogoutAccount()
        }
        icon1={IMG.drawerLogoutIcon}
        label1={t('logout')}
        br={8}
        containerStyle={styles.helpStyle}
      />
    </View>
  );
};
export default CustomDrawerContent;
const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    height: mvs(220),
    width: width - 60,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: mvs(1),
    borderColor: colors.border,
    // backgroundColor: colors.primary,
  },
  needHelpContainer: {
    backgroundColor: colors.white,
    width: width - 100,
    marginHorizontal: mvs(17),
    borderRadius: mvs(8),
    // paddingHorizontal: mvs(17.5),
    marginVertical: mvs(8),
    alignItems: 'center',
    ...colors.shadow,
  },
  helpStyle: {margin: mvs(10), width: width - 120, height: mvs(27)},
  drawerlogo: {
    width: mvs(200),
    // height: mvs(100),
    resizeMode: 'contain',
  },
  drawerheader: {
    height: mvs(100),
    width: mvs(100),
    borderRadius: mvs(50),
    borderWidth: mvs(3),
    borderColor: colors.primary,
    backgroundColor: colors.transparent,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  drawerman: {
    height: '100%',
    width: '100%',
    borderRadius: mvs(50),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  scrololstyle: {
    flexGrow: 1,
    paddingVertical: mvs(10),
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
});
