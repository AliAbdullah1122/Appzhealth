import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as IMG from 'assets/images';
import { mvs } from 'config/metrices';
import { useAppDispatch } from 'hooks/use-store';
import React from 'react';
import { Image, View } from 'react-native';
import i18n from 'translation';
import { UTILS } from 'utils';
import { STORAGEKEYS } from '../../config/constants';
import {
  setLanguage,
  setLocation,
  setUserInfo,
} from '../../store/reducers/user-reducer';
import RootStackParamList from '../../types/navigation-types/root-stack';
import styles from './styles';
import { useAuth0 } from 'react-native-auth0';
import { navigate, resetStack } from 'navigation/navigation-ref';
import AsyncStorage from '@react-native-async-storage/async-storage';

type props = NativeStackScreenProps<RootStackParamList, 'Splash'>;




const Splash = (props: props) => {
  const {user} = useAuth0();
  const {navigation} = props;
  const dispatch = useAppDispatch();

  React.useEffect(() => {}, []);
  // React.useEffect(() => {
  //   (async () => {
  //     try {
  //       let screen: any = 'Login';
  //       // UTILS.get_current_location(
  //       //   position => {
  //       //     dispatch(
  //       //       setLocation({
  //       //         latitude: position?.coords?.latitude,
  //       //         longitude: position?.coords?.longitude,
  //       //       }),
  //       //     );
  //       //   },
  //       //   error => {},
  //       // );
  //       UTILS.getItem(STORAGEKEYS.lang).then((lang: any) => {
  //         i18n.changeLanguage(lang);
  //         dispatch(setLanguage(lang ?? 'en'));
  //       });

  //       UTILS.getItem(STORAGEKEYS.user).then((data: any) => {
  //         if (data) {
  //           const user = JSON.parse(data);
  //           screen = 'Drawer';
  //           dispatch(setUserInfo(user));
  //         }
          
  //         setTimeout(() => {
  //           navigation?.replace(screen);
  //         }, 2000);
  //       });
  //     } catch (error) {}
  //   })();
  // }, []);


  React.useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await AsyncStorage.getItem('accessToken');
        if (token) {
          
          resetStack('Drawer');
          dispatch(setUserInfo(user))
        } else {
          resetStack('Login');
        }
      } catch (error) {
        console.error('Failed to fetch the token', error);
        resetStack('Login');
      }
    };
    checkToken();
  }, [user]);
  return (
    <View style={{...styles.container}}>
     
      <Image
        source={IMG.Logo}
        resizeMode={'contain'}
        style={{width: mvs(150), height: mvs(150)}}
      />
     
    </View>
  );
};
export default Splash;
