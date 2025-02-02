import {Platform, StyleSheet} from 'react-native';
import {colors} from 'config/colors';
import {mvs, width} from 'config/metrices';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    
  },
  contentContainerStyle: {
    // flexGrow: 1,
    paddingTop: '5%',
    paddingHorizontal: mvs(20),
  },
  txt: {marginBottom: mvs(10), fontSize: mvs(20)},
  button: {
    width: '100%',
    paddingHorizontal: mvs(20),
    position: 'absolute',
    bottom: 0,
    paddingBottom: mvs(Platform?.OS === 'android' ? 20 : 40),
  },
  contentContainerStyleNew: {
    flexGrow: 1,
    paddingHorizontal: mvs(20),
    marginVertical: mvs(10),
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
    borderRadius: mvs(6),
  },
  googlebutton: {
    backgroundColor: colors.white,
    marginHorizontal: mvs(10),
    paddingHorizontal: mvs(15),
    paddingVertical: mvs(10),
    opacity: 0.8,
    alignSelf: 'center',
    borderRadius: mvs(10),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  imagebackground: {
    height: mvs(400),
    width: width,
    position: 'absolute',
  },
  loginlogoview: {
    alignSelf: 'center',
    marginTop: mvs(10),
    justifyContent:"center",
    alignItems:"center",
  },
  lottieview: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyboradscrollcontent: {
    paddingHorizontal: mvs(0),
    flexGrow: 0,
    paddingBottom: mvs(150),
  },
  loginmoverstext: {
    marginTop: mvs(10),
    marginBottom: mvs(20),
  },
  forgotpasswordview: {
    alignSelf: 'flex-start',
    marginBottom: mvs(15),
  },
  createaccountview: {
    alignSelf: 'flex-start',
    marginTop: mvs(20),
  },
  signupbuttoncontainer: {
    backgroundColor: colors.bluecolor,
    marginTop: mvs(20),
    borderRadius: mvs(10),
  },
  googlefacebookview: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialbutttons:{
  justifyContent: 'center',
  // alignItems: 'center',
  backgroundColor: colors.white,
  width: '100%',
  height: mvs(55),
  borderRadius: mvs(5),
  borderWidth:mvs(1),
  borderColor:colors.primary,marginVertical:mvs(6)
  },
  socialrow:{

  justifyContent:"flex-start",paddingHorizontal:mvs(10),paddingVertical:mvs(10)
  }

});
export default styles;
