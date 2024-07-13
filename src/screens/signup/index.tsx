import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Header1x2x from 'components/atoms/headers/header-1x-2x';
import {Formik, useFormik} from 'formik';
import React from 'react';
import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import Geocoder from 'react-native-geocoding';
import * as IMG from 'assets/images';

import messaging from '@react-native-firebase/messaging';
import {IconButton, PrimaryButton} from 'components/atoms/buttons';
import PrimaryInput, {
  InputWithIcon,
  PrimaryPhoneInput,
} from 'components/atoms/inputs';
import {KeyboardAvoidScrollview} from 'components/atoms/keyboard-avoid-scrollview';
import OtpModalRenewPassword from 'components/molecules/modals/otp-modal-signup-renewpassword.js.js';
import {useAppDispatch, useAppSelector} from 'hooks/use-store';
import {getCountryCode, onSignup} from 'services/api/auth-api-actions';
import i18n from 'translation';
import Medium from 'typography/medium-text';
import {UTILS} from 'utils';
import {signupFormValidation} from 'validations';
import RootStackParamList from '../../types/navigation-types/root-stack';
import styles from './styles';
import {height, mvs, width} from 'config/metrices';
import Bold from 'typography/bold-text';
import {colors} from 'config/colors';
import {navigate} from 'navigation/navigation-ref';
import {Row} from 'components/atoms/row';
import {FacBookIcon, GoogleIcon} from 'assets/icons';
import {Checkbox} from 'components/atoms/checkbox';
import CountryCodemOdal from 'components/molecules/modals/country-code-modal';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useAuth0 } from 'react-native-auth0';
import HeaderProfile from 'components/atoms/headers/header-profile';
// import {setCountries} from 'store/reducers/user-reducer';
Geocoder.init('AIzaSyBxP_tL24fzdEqNKA5kicip7vyAExtNdPE');

type props = NativeStackScreenProps<RootStackParamList, 'Signup'>;

const Signup = (props: props) => {
  const [otpModalVisible, setOtpModalVisible] = React.useState(false);
  const [value, setValue] = React.useState('');
  const [selectedGender, setSelectedGender] = React.useState('');
  const [countrycodeModal, setCountryCodeModal] = React.useState(false);
  const {user} = useAuth0();
  console.log(user)
  const {navigation} = props;
  const {t} = i18n;
  // const {user} = useAppSelector(s => s);
  // const {location, countries} = user;
  // console.log('location=>>>', location);
  const dispatch = useAppDispatch();

  const initialValues = {
    first_name: '' || user?.name,
    last_name:'' || user?.email,
    email: '' || user?.email,
    phone: '',
    doctor_npi:'',
    practice_npi:'',
    practice_address:'',
    practice_city:'',
    practice_state:'',
    job_title:''
  };
  const [loading, setLoading] = React.useState(false);

  // const handleFormSubmit = async values => {
  //   // dispatch(onSignup(values, setLoading));
  //   navigate('SignupNext', {
  //     ...values,
  //     country_code: countries?.find(x => x?.selected)?.code || 'GB',
  //   });
  //   {
  //     console.log('values form siubmit', values);
  //   }
  // };
  // React.useEffect(() => {
  //   getCountryCodeDetails();
  // }, []);
  // const getCountryCodeDetails = async () => {
  //   try {
  //     dispatch(getCountryCode());
  //     // setLoading(false);
  //     // setCountryCode(res);
  //     // console.log('couyntey code', res);
  //   } catch (error) {
  //     // setLoading(false);
  //   }
  // };
  return (
    <View style={styles.container}>
      {/* <Image source={IMG.LogoBackground} style={styles.logobackground} /> */}
      <HeaderProfile title={'Profile Registration'} />
      {/* <View style={{alignSelf: 'center'}}>
        <Image
          source={IMG.LoginLogo}
          resizeMode={'contain'}
          style={{width: mvs(300), height: mvs(100)}}
        />
      </View> */}
      <View style={styles.contentContainerStyle}>
        <KeyboardAvoidScrollview
          contentContainerStyle={styles.keyboardcontentcontainer}>
          <View
          //  style={styles.contentContainerStyleNew}
          >
            <Bold
              label={'Welcome to App Z Health'}
              color={colors.black}
              fontSize={mvs(18)}
              style={styles.boldtext}
            />
            <Medium
              label={
                'In order to continue, we need you to verify and complete the below information. Not all fields are required. Additional fields help narrow your search results.'
              }
              numberOfLines={10}
              color={colors.black}
              style={styles.mediumtext}
            />

            <Formik
              initialValues={initialValues}
              validationSchema={signupFormValidation}
              // onSubmit={handleFormSubmit}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                setFieldValue,
                touched,
                values,
                errors,
                isValid,
              }) => (
                <>
                  {console.log(errors, isValid, touched)}
                  
                  
                  {/* <PrimaryInput
                    keyboardType={'email-address'}
                    error={touched?.surname ? t(errors.surname) : ''}
                    placeholder={t('surname')}
                    onChangeText={handleChange('surname')}
                    onBlur={handleBlur('surname')}
                    value={values.surname}
                  /> */}

                  <PrimaryInput
                    keyboardType={'email-address'}
                    error={touched?.email ? t(errors.email) : ''}
                    placeholder={t('email')}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email }
                    containerStyle={{
                      borderWidth:0,
                      borderBottomWidth:1
                    }}
                  />
                  <PrimaryInput

                    // isPassword
                    keyboardType={'number-pad'}
                    error={touched?.phone ? t(errors.phone) : ''}
                    placeholder={'Phone *'}
                    onChangeText={handleChange('phoe')}
                    onBlur={handleBlur('phone')}
                    value={values.phone}
                    containerStyle={{
                      borderWidth:0,
                      borderBottomWidth:1
                    }}
                  />
                  <PrimaryInput
                    error={touched?.first_name ? t(errors.first_name) : ''}
                    placeholder={t('first_name')}
                    onChangeText={handleChange('first_name')}
                    onBlur={handleBlur('first_name')}
                    value={values.first_name }
                    containerStyle={{
                      borderWidth:0,
                      borderBottomWidth:1
                    }}
                  />
                  <PrimaryInput
                    error={touched?.last_name ? t(errors.last_name) : ''}
                    placeholder={'Last Name'}
                    onChangeText={handleChange('last_name')}
                    onBlur={handleBlur('last_name')}
                    value={values.last_name }
                    containerStyle={{
                      borderWidth:0,
                      borderBottomWidth:1
                    }}
                  />
                  <PrimaryInput
                    error={touched?.doctor_npi ? t(errors.doctor_npi) : ''}
                    placeholder={'Doocctor NPI *'}
                    onChangeText={handleChange('doctor_npi')}
                    onBlur={handleBlur('doctor_npi')}
                    value={values.doctor_npi}
                    containerStyle={{
                      borderWidth:0,
                      borderBottomWidth:1
                    }}
                  />
                  <PrimaryInput
                    error={touched?.practice_npi ? t(errors.practice_npi) : ''}
                    placeholder={'Practice NPI'}
                    onChangeText={handleChange('practice_npi')}
                    onBlur={handleBlur('practice_npi')}
                    value={values.practice_npi}
                    containerStyle={{
                      borderWidth:0,
                      borderBottomWidth:1
                    }}
                  />
                  
                  <PrimaryInput
                    error={touched?.practice_city ? t(errors.practice_city) : ''}
                    placeholder={'Practice City'}
                    onChangeText={handleChange('practice_city')}
                    onBlur={handleBlur('practice_city')}
                    value={values.practice_city}
                    containerStyle={{
                      borderWidth:0,
                      borderBottomWidth:1
                    }}
                  />
                  <PrimaryInput
                    error={touched?.practice_state ? t(errors.practice_state) : ''}
                    placeholder={'Practice State'}
                    onChangeText={handleChange('practice_state')}
                    onBlur={handleBlur('practice_state')}
                    value={values.practice_state}
                    containerStyle={{
                      borderWidth:0,
                      borderBottomWidth:1
                    }}
                  />
                  <PrimaryInput
                    error={touched?.job_title ? t(errors.job_title) : ''}
                    placeholder={'Job Title'}
                    onChangeText={handleChange('job_title')}
                    onBlur={handleBlur('job_title')}
                    value={values.job_title}
                    containerStyle={{
                      borderWidth:0,
                      borderBottomWidth:1
                    }}
                  />
                  

                  <PrimaryButton
                    containerStyle={{
                      borderRadius: mvs(10),
                    }}
                    loading={loading}
                    onPress={handleSubmit}
                    title={'Register Now'}
                  />
                </>
              )}
            </Formik>
          </View>
        </KeyboardAvoidScrollview>
      </View>
    </View>
  );
};
export default Signup;
