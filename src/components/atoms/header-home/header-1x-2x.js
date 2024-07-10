import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {colors} from 'config/colors';
import {STORAGEKEYS} from 'config/constants';
import {mvs} from 'config/metrices';
import {useAppDispatch, useAppSelector} from 'hooks/use-store';
import {t} from 'i18next';
import React from 'react';
import {Alert, Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import {getStatusChange} from 'services/api/auth-api-actions';
import {setUserInfo} from 'store/reducers/user-reducer';
import Medium from 'typography/medium-text';
import {UTILS} from 'utils';
import {SearchInput} from '../inputs';
import {Row} from '../row';
import * as IMG from 'assets/images';
const HeaderX = ({
  style = {},
  mtop = 0,
  title,
  back = true,
  onChangeText = t => {},
  isSearch = false,
  isMenu = false,
  placeholder = 'Search here',
  ...props
}) => {
  const user = useAppSelector(s => s?.user);
  const userInfo = user?.userInfo;
  console.log('user', userInfo?.online_status);
  const language = user?.language;
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  return (
    <View style={[styles.container, style]}>
      <Row style={{alignItems: 'center', justifyContent: 'space-between'}}>
        <TouchableOpacity
          style={{
            width: mvs(40),
            height: mvs(40),
            backgroundColor: colors.primary,
            borderRadius: mvs(20),
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => navigation?.toggleDrawer()}>
          <MaterialCommunityIcons
            name={'menu'}
            size={mvs(28)}
            color={colors.white}
          />
        </TouchableOpacity>
        <View
          style={{
            // padding: mvs(2),
            // borderRadius: mvs(16),
            // borderWidth: 2,
            // borderRadius: mvs(20),
            backgroundColor: colors.white,
          }}>
            <Image source={IMG.Logo}
        resizeMode={'contain'}
        style={{width: mvs(80), height: mvs(50)}}/>
          {/* {userInfo?.online_status === '0' ? (
            <TouchableOpacity
              
              onPress={() => showAlert()}
              style={{
                backgroundColor: colors.white,
                height: mvs(35),
                width: mvs(115),
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: mvs(16),
              }}>
              <Row style={{alignItems: 'center'}}>
                <Feather
                  name="arrow-right-circle"
                  size={mvs(25)}
                  color={colors.homegreen}
                />
                <Medium
                  label={t('go_online')}
                  fontSize={mvs(14)}
                  style={{marginLeft: mvs(10)}}
                  color={colors.homegreen}
                />
              </Row>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
            
              onPress={() => showAlert()}
              style={{
                backgroundColor: colors.primary,
                height: mvs(35),
                width: mvs(115),
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: mvs(16),
              }}>
              <Row style={{alignItems: 'center'}}>
                <Medium
                  label={t('back_offline')}
                  fontSize={mvs(12)}
                  style={{marginLeft: mvs(10)}}
                  color={colors.white}
                />
                <AntDesign
                  name="arrowright"
                  size={mvs(18)}
                  color={colors.white}
                  style={{marginLeft: mvs(5)}}
                />
              </Row>
            </TouchableOpacity>
          )} */}
        </View>
      </Row>
      {isSearch && (
        <SearchInput
          onChangeText={onChangeText}
          placeholder={placeholder}
          mtop={mtop}
        />
      )}
    </View>
  );
};
export default React.memo(HeaderX);
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    paddingHorizontal: mvs(22),
    paddingVertical: mvs(15),
  },
  empty: {
    width: mvs(10),
  },
  title: {
    fontSize: mvs(18),
    color: colors.white,
  },
  back: {},
});
