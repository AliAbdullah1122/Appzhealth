import AsyncStorage from '@react-native-async-storage/async-storage';
import { Loader } from 'components/atoms/loader';
import { colors } from 'config/colors';
import { STORAGEKEYS } from 'config/constants';
import { useAppDispatch } from 'hooks/use-store';
import { resetStack } from 'navigation/navigation-ref';
import React from 'react';
import {
  View
} from 'react-native';
import { useAuth0 } from 'react-native-auth0';
import Medium from 'typography/medium-text';
import { UTILS } from 'utils';
import styles from './styles';
import { setUserInfo } from 'store/reducers/user-reducer';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { PrimaryButton } from 'components/atoms/buttons';
import { mvs } from 'config/metrices';
const LoginScreen = props => {
  const isFocus = useIsFocused();
  const navigation = useNavigation();

  React.useEffect(() => {
    if (isFocus) {
    onPressLogin();  }
  }, [isFocus]);
  // useFocusEffect(
  //   React.useCallback(() => {
  //     onPressLogin();
  //   }, [])
  // );
  // React.useEffect(() => {
  //   const unsubscribe = navigation.addListener('focus', () => {
  //     onPressLogin();
  //   });

  //   return unsubscribe;
  // }, [navigation]);




  const { authorize, clearSession, user } = useAuth0();
  const onPressLogin = async () => {
    try {
      setLoading(true)
      const res = await authorize();
      
      
      if (res?.accessToken) {
        await AsyncStorage.setItem(STORAGEKEYS.accessToken, res.accessToken);
      } else {
        console.log('Access token is undefined');
        // Alert.alert("Please Login to Conntinue")
      }
  
      if (res?.user) {
        await UTILS.setItem(user, JSON.stringify(res.user));
      } else {
        console.log('User data is undefined');
        // Alert.alert("Please Login to Conntinue")
      }
      setLoading(true)
      dispatch(setUserInfo(user));
      
  if (res?.accessToken){
      resetStack('Drawer');
  }
      console.log('login res', res);
      return res;
  
    } catch (error) {
      const res = UTILS.returnError(error);
      console.log('error in login', res);
      console.log(error);
    }
    finally {
      setLoading(false);
    }
    
  };
  




  const onPressLogout = async () => {
    try {
      await clearSession()
      await AsyncStorage.removeItem('accessToken');
      // resetStack("Login")
    } catch (e) {
      console.log('error', e);
    }
  };
  const dispatch = useAppDispatch();


  const [loading, setLoading] = React.useState(false);






  return (
    <View style={styles.container}>


      <View style={{alignItems:"center",justifyContent:"center",marginTop:'90%'}}>
      {loading ? (
            <Loader color={colors.primary} size={'large'}/>
          ) : (

            // <Medium label={'Please lOGIIN TOO USE'}/>
            <PrimaryButton
            title={'Continue to Login'}
            containerStyle={{width:"80%"}}
            onPress={onPressLogin}
            textStyle={{fontSize:mvs(16)}}
            
            
            />
          )}
         
     
                  
                  </View>


     
    </View>
  );
};
export default LoginScreen;
