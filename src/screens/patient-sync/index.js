import {useIsFocused, useNavigation} from '@react-navigation/native';
import Header1x2x from 'components/atoms/headers/header-1x-2x';
import {InputWithIconNew, InputWithIconPatientMnagemennt, InputWithIconPoolicy, SearchInput} from 'components/atoms/inputs';
import {Row} from 'components/atoms/row';
import ServiceCard from 'components/molecules/service-card';
import {colors} from 'config/colors';
import {mvs, width} from 'config/metrices';
import {useAppDispatch} from 'hooks/use-store';
import React from 'react';
import {ScrollView, View} from 'react-native';
import {useAuth0} from 'react-native-auth0';
import i18n from 'translation';
import Medium from 'typography/medium-text';
import styles from './styles';
import Bold from 'typography/bold-text';
import CustomFlatList from 'components/atoms/custom-flatlist';
import {SERVICE_LIST, SERVICE_LIST_NEW} from 'config/constants';
import ChartComponent from 'components/molecules/rn-chart';
import ServiceCardNew from 'components/molecules/service-card-new';
import PatientsClaimsChart from 'components/molecules/rn-chart-bar';
import {PrimaryButton} from 'components/atoms/buttons';
import PrimaryInputPatient, {
  InputWithIcon,
  PrimaryPhoneInput,
} from 'components/atoms/inputs';
import {Formik, useFormik} from 'formik';
import {AddPatientFormValidation, signupFormValidation} from 'validations';
import {DatePicker} from 'components/atoms/date-picker';
const PatientSyncScreen = props => {
  const FilterDays = [
    {id: '1 Days'},
    {id: '5 Days'},
    {id: '7 Days'},
    {id: '14 Days'},
    {id: '30 Days'},
    {id: '90 Days'},
    {id: '180 Days'},
    {id: '360 Days'},
  ];
  const {authorize, clearSession, user} = useAuth0();

  const isFcous = useIsFocused();

  const navigation = useNavigation();
  const initialValues = {
    first_name: '',
    last_name: '',
   dob:'',
    patient_management_system:''
  };
  const Insurance = [{id: 'New'}, {id: 'Yearly'}, {id: 'Forward'}];
  const {t} = i18n;
  // const {userInfo, unreadNotification, location} = user;
  // console.log('unreadNotification=>', unreadNotification);
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState();
  const [latitude, setLatitude] = React.useState();
  const [longitude, setLongitude] = React.useState();
  const [filter, setFilter] = React.useState('');

  const itemSeparatorComponent = () => {
    return <View style={{paddingVertical: mvs(5)}}></View>;
  };

  const renderServiceList = ({item, index}) => (
    <ServiceCard
      colortext={index === 2 ? colors.red : colors.primary}
      // backgroundColor={index % 1.5 === 0 ? colors.homecard2 : colors.homecard1}
      item={item}
      // onPress={() => props?.navigation?.navigate(item?.screenName)}
    />
  );
  const renderServiceListNew = ({item, index}) => (
    <ServiceCardNew
      colortext={colors.primary}
      // backgroundColor={index % 1.5 === 0 ? colors.homecard2 : colors.homecard1}
      item={item}
      // onPress={() => props?.navigation?.navigate(item?.screenName)}
    />
  );

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1, paddingBottom: mvs(100)}}>
        {/* <Header1x2x
          back={true}
          // title={'Patients'}
          style={{backgroundColor: colors.transparent}}
        /> */}

        <View
          style={{
            paddingVertical: mvs(10),
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            marginRight: mvs(10),
          }}>
          <PrimaryButton
            containerStyle={{
              borderRadius: mvs(6),
              width: '30%',
              backgroundColor: colors.acceptcolor,
            }}
            textStyle={{fontSize: mvs(20)}}
            onPress={() => navigation?.goBack()}
            title={'BACK'}
          />
        </View>

        <View style={styles.contentContainerStyle}>
          <View style={styles.contentContainerStyleNew}>
            <View style={{marginBottom: mvs(20)}}>
              <SearchInput />
            </View>
            <Formik
              initialValues={initialValues}
              validationSchema={AddPatientFormValidation}
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

                  
                  {/* <PrimaryInputPatient
                 


                  isRequired={true}
                    keyboardType={'email-address'}
                    error={touched?.email ? t(errors.email) : ''}
                    placeholder={t('email')}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email }
                  /> */}

                  <PrimaryInputPatient
                    label="Required"
                    isRequired
                    error={touched?.first_name ? t(errors.first_name) : ''}
                    placeholder={t('first_name')}
                    onChangeText={handleChange('first_name')}
                    onBlur={handleBlur('first_name')}
                    value={values.first_name}
                  />
                  <PrimaryInputPatient
                    label="Required"
                    isRequired
                    error={touched?.last_name ? t(errors.last_name) : ''}
                    placeholder={'Last Name'}
                    onChangeText={handleChange('last_name')}
                    onBlur={handleBlur('last_name')}
                    value={values.last_name}
                  />
                  <DatePicker
                    onPress={() => {
                      setFieldTouched('dob', true);
                    }}
                    onChangeText={(str: string) => {
                      setFieldValue('dob', str);
                    }}>
                    <PrimaryInputPatient
                      isCalendar
                      // label="Required"
                      // isRequired
                      // maximumDate={new Date()}
                      editable={false}
                      error={touched?.dob ? errors.dob : ''}
                      placeholder={t('date_of_birth')}
                      onChangeText={value => {
                        setFieldValue('dob', value);
                      }}
                      onBlur={() => {
                        setFieldTouched('dob', true);
                      }}
                      value={values.dob}
                    />
                  </DatePicker>

                 
                  

                 
                    <InputWithIconPatientMnagemennt
                    isRequired
                    label='Required'
                          placeholder={'Patient Management System'}

                          error={
                            touched?.patient_management_system ? t(errors.patient_management_system) : ''
                          }
                          onChangeText={id => setFieldValue('patient_management_system', id)}
                          // onBlur={handleChange('vehicle_make')}
                          value={values.patient_management_system}
                          id={values.patient_management_system}
                          items={Insurance}
                          containerStyle={{width:'100%',backgroundColor:colors.white,borderWidth:1,borderColor:colors.gray}}
                        />


                 
<Row>
                  <PrimaryButton
                    containerStyle={{
                      borderRadius: mvs(14),
                      width:'40%',
                      backgroundColor:colors.white,
                      borderWidth:1,
                      borderColor:colors.gray
                    }}
                    loading={loading}
                    onPress={handleSubmit}
                    title={'CLEAR'}
                    textStyle={{fontSize:mvs(20),color:colors.black}}
                  />
                  <PrimaryButton
                   containerStyle={{
                    borderRadius: mvs(14),
                    width:'40%'
                  }}
                    loading={loading}
                    onPress={handleSubmit}
                    textStyle={{fontSize:mvs(20)}}
                    title={'Save'}
                  />
                  </Row>
                </>
              )}
            </Formik>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default PatientSyncScreen;
