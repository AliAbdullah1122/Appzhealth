import * as IMG from 'assets/images';
import {PrimaryButton} from 'components/atoms/buttons';
import {Row} from 'components/atoms/row';
import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import i18n from 'translation';
import Medium from 'typography/medium-text';
import Regular from 'typography/regular-text';
import {colors} from '../../../config/colors';
import {mvs} from '../../../config/metrices';
import {SpecialistLocation} from 'assets/icons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Bold from 'typography/bold-text';


const ServiceCard = ({
  item,
  backgroundColor,
  index,
  style,
  colortext,
  onPress = () => {},
  onPressCart = () => {},
}) => {
  const {t} = i18n;

  return (
    // <TouchableOpacity
    //   onPress={onPress}
    //   style={styles.container}>
     
     <TouchableOpacity onPress={onPress} style={styles.contentContainerStyleNew2}>
              <View
                style={{
                  width: mvs(50),
                  height: mvs(50),
                  backgroundColor: colors.simplegrey,
                  borderRadius: mvs(25),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <AntDesign
                  name={'addfolder'}
                  size={mvs(15)}
                  color={colors.primary}
                />
              </View>
              <Medium
                label={item?.title}
                color={colors.black}
                fontSize={mvs(18)}
                style={{marginTop: mvs(10)}}
              />
              <Bold
                label={item?.number}
                color={colortext}
                fontSize={mvs(18)}
                style={{marginTop: mvs(15)}}
              />
            </TouchableOpacity>

    //  </TouchableOpacity>
  );
};
export default React.memo(ServiceCard);
const styles = StyleSheet.create({
  container: {
    // height: mvs(123),
    backgroundColor:colors.white,
    // width: '45%',
    // borderRadius: mvs(15),
    // marginBottom: mvs(20),
    // backgroundColor: colors.homecard2,
    // backgroundColor: index % 2 === 0 ? colors.homecard1 : colors.homecard2,

    // ...colors.shadow,
  },
  contentContainerStyleNew2: {
    // flexGrow: 1,
    paddingHorizontal: mvs(20),
    marginVertical: mvs(5),
    paddingVertical: mvs(20),
    backgroundColor: colors.white,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    borderRadius: mvs(20),
    // borderWidth:1,
    // borderColor:colors.simplegrey
  },
  row: {alignItems: 'flex-end'},
  bg: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  btn: {
    backgroundColor: colors.white,
    height: mvs(28),
    width: mvs(96),
    borderRadius: mvs(10),
    ...colors.shadow,
  },
  btnTxt: {color: colors.primary, fontSize: mvs(12), lineHeight: mvs(16)},
  imgStyle: {borderRadius: mvs(15)},

  grd: {
    height: '100%',
    padding: mvs(15),
    borderRadius: mvs(15),
  },
  heartContainer: {
    position: 'absolute',
    right: mvs(20),
    top: mvs(-13),
    justifyContent: 'center',
    alignItems: 'center',
    height: mvs(30),
    width: mvs(30),
    borderRadius: mvs(15),
    backgroundColor: colors.red,
  },
});
