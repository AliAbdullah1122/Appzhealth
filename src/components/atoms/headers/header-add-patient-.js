import {useNavigation} from '@react-navigation/native';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import React from 'react';
import {
  I18nManager,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Medium from 'typography/medium-text';
import {Row} from '../row';
import {SearchInput} from '../inputs';
import { PrimaryButton } from '../buttons';
const HeaderAddPatient = ({
  style = {},
  mtop = 0,
  title,
  back = true,
  homeback = false,
  patientButton= true,
  onChangeText = t => {},
  isSearch = false,
  isMenu = false,
  placeholder = 'Search here',
  onPress = () => {},
  ...props
}) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.container, style]}>
      <Row style={{alignItems: 'center'}}>
        {back ? (
          <TouchableOpacity
            // style={{
            //   backgroundColor: colors.white,
            //   padding: mvs(5),
            //   borderRadius: mvs(7),
            // }}
            onPress={() => navigation?.goBack()}>
            <Icon
              name={I18nManager.isRTL ? 'arrowright' : 'arrowleft'}
              size={mvs(20)}
              color={colors.primary}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{
              backgroundColor: colors.white,
              padding: mvs(5),
              borderRadius: mvs(7),
            }}
            onPress={() => navigation?.toggleDrawer()}>
            <MaterialCommunityIcons
              name={'menu'}
              size={mvs(20)}
              color={colors.black}
            />
          </TouchableOpacity>
        )}

         {title ? (
          <Medium fontSize={mvs(20)} label={title} style={[styles.title]} />
        ) : (
          <Image
            source={{
              uri: 'https://getmovers.co.uk/static/media/Asset%202.8980a30a.png',
            }}
            style={{width: mvs(60), height: mvs(30), resizeMode: 'cover'}}
          />
        )} 
     {patientButton 
     &&
      // <View
      //     style={{
      //       paddingVertical: mvs(10),
      //       justifyContent: 'flex-end',
      //       alignItems: 'flex-end',
      //       marginRight: mvs(10),
      //     }}>
          <PrimaryButton
            containerStyle={{
              borderRadius: mvs(6),
              width: '30%',
              backgroundColor: colors.acceptcolor,
            }}
            onPress={onPress}
            title={'Add Patient'}
          />
        // </View>
        }
        
        {/* <View style={styles.empty} /> */}
      </Row>
      {isSearch && (
        <SearchInput
          onChangeText={onChangeText}
          placeholder={placeholder}
          mtop={mtop}
        />
      )}
 
      {/* {homeback && (
        <TouchableOpacity
          // style={{
          //   backgroundColor: colors.white,
          //   padding: mvs(5),
          //   borderRadius: mvs(7),
          // }}
          onPress={() => navigation?.goBack()}>
          <Icon
            name={I18nManager.isRTL ? 'arrowright' : 'arrowleft'}
            size={mvs(20)}
            color={colors.red}
          />
        </TouchableOpacity>
      )} */}
    </View>
  );
};
export default React.memo(HeaderAddPatient);
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
