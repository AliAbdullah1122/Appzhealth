import {mvs} from 'config/metrices';
import {StyleSheet} from 'react-native';
import {colors} from 'config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainerStyle: {
    // flexGrow: 1,
    // paddingTop: '15%',
    paddingHorizontal: mvs(10),
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
  contentContainerStyleChart: {
    marginTop:mvs(20),
    flexGrow: 1,
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
   
  },
  contentContainerStyleChartNew: {
    marginTop:mvs(20),
    flexGrow: 1,
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
   
  },
  contentContainerStyle2: {
    flexGrow: 1,
    paddingHorizontal: mvs(2),
    // paddingVertical: mvs(20),
    // paddingBottom: mvs(100),
    // margi
  },

  body: {
    flex: 1,
  },
  lan: {
    height: mvs(120),
    marginTop: mvs(20),
    backgroundColor: colors.primary,
  },
  btnText: {
    fontSize: mvs(24),
  },
  heading: {
    fontSize: mvs(20),
    color: colors.primary,
  },
  normaltext: {
    fontSize: mvs(14),
    paddingVertical: mvs(4),
  },

  // contentContainerStyle: {
  //   flexGrow: 1,
  //   paddingHorizontal: mvs(16),
  //   paddingVertical: mvs(20),
  //   // paddingBottom: mvs(100),
  //   // margi
  // },
  backgroundimg: {
    width: '100%',
    height: '100%',
  },
  notificationbadge: {
    backgroundColor: colors.bluecolor,
    // borderWidth: 1,
    borderColor: colors.white,
    position: 'absolute',
    alignSelf: 'flex-end',
    top: mvs(-2),
    right: mvs(12),
    // padding: mvs(3),
    alignItems: 'center',
    justifyContent: 'center',
    height: mvs(17),
    width: mvs(20),
    borderRadius: mvs(10),
  },
});
export default styles;
