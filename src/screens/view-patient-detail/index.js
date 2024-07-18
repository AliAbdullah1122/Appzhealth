import {useIsFocused, useNavigation} from '@react-navigation/native';
import Header1x2x from 'components/atoms/headers/header-1x-2x';
import {
  InputWithIconNew,
  InputWithIconPoolicy,
  SearchInput,
} from 'components/atoms/inputs';
import {Row} from 'components/atoms/row';
import ServiceCard from 'components/molecules/service-card';
import {colors} from 'config/colors';
import {mvs, width} from 'config/metrices';
import {useAppDispatch} from 'hooks/use-store';
import React from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
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
import Entypo from 'react-native-vector-icons/Entypo'
const ViewPatientDetailsScreen = props => {
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
  const {patients} = props?.route?.params;
  console.log('s', patients);
  const initialValues = {
    first_name: '' || patients?.first_name,
    last_name: '' || patients?.last_name,
    email: '',
    phone: '',
    dob: '',
    appointment_date: '',
    insurance_name: '' || patients?.insurance,
    member_id: '0',
    group_number: '',
    policy_hoolder_relatiioonship: '',
  };

  const {t} = i18n;

  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState();
  
  const [editMode, setEditMode] = React.useState(false);



  const handleEditPress = () => {
    setEditMode(true); // Enable edit mode
  };
  const handleClearPress = (formikProps) => {
    formikProps.resetForm(); // Reset form values to initial state
  };


  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1, paddingBottom: mvs(100)}}>
        <Header1x2x
          back={true}
          title={'View Patient Detail'}
          styletitle={{color: colors.primary}}
          style={{backgroundColor: colors.transparent}}
        />

        <TouchableOpacity
          style={{
            paddingVertical: mvs(5),
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            marginRight: mvs(10),
            
          }}
          onPress={handleEditPress}
          >
            <Entypo  name='edit' color={colors.primary} size={mvs(25)}/>

      
        </TouchableOpacity>

        <View style={styles.contentContainerStyle}>
          <View style={styles.contentContainerStyleNew}>
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
                resetForm,
                errors,
                isValid,
              }) => (
                <>
                  {console.log(errors, isValid, touched)}

                  

                  <PrimaryInputPatient
                    label="Required"
                    isRequired
                    // disabled={editMode}
                    editable={editMode}
                    error={touched?.first_name ? t(errors.first_name) : ''}
                    placeholder={t('first_name')}
                    onChangeText={handleChange('first_name')}
                    onBlur={handleBlur('first_name')}
                    value={values.first_name}
                    containerStyle={{backgroundColor:editMode ? colors.white:colors.gray}}
                  />
                  <PrimaryInputPatient
                    label="Required"
                    isRequired
                    // disabled={editMode}
                    editable={editMode}
                    error={touched?.last_name ? t(errors.last_name) : ''}
                    placeholder={'Last Name'}
                    onChangeText={handleChange('last_name')}
                    onBlur={handleBlur('last_name')}
                    value={values.last_name}
                    containerStyle={{backgroundColor:editMode ? colors.white:colors.gray}}
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
                      // maximumDate={new Date()}
                      editable={false}
                      // editable={editMode}
                      disbaledicon={!editMode}
                      error={touched?.dob ? errors.dob : ''}
                      placeholder={t('date_of_birth')}
                      onChangeText={value => {
                        setFieldValue('dob', value);
                      }}
                      // onBlur={() => {
                      //   setFieldTouched('dob', true);
                      // }}
                      value={values.dob}
                      containerStyle={{backgroundColor:editMode ? colors.white:colors.gray}}
                    />
                  </DatePicker>

                  <PrimaryInputPatient
                    label="Required"
                    isRequired
                    // isPassword
                    keyboardType={'number-pad'}
                    editable={editMode}
                    // disabled={editMode}
                    error={touched?.phone ? t(errors.phone) : ''}
                    placeholder={'Phone Number'}
                    onChangeText={handleChange('phoe')}
                    onBlur={handleBlur('phone')}
                    value={values.phone}
                    containerStyle={{backgroundColor:editMode ? colors.white:colors.gray}}
                  />
                  <PrimaryInputPatient
                    label="Required"
                    isRequired
                    // disabled={editMode}
                    editable={editMode}
                    keyboardType={'email-address'}
                    error={touched?.email ? t(errors.email) : ''}
                    placeholder={t('email')}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    containerStyle={{backgroundColor:editMode ? colors.white:colors.gray}}
                  />
                  <DatePicker
                    onPress={() => {
                      setFieldTouched('appointment_date', true);
                    }}
                    onChangeText={(str: string) => {
                      setFieldValue('appointment_date', str);
                    }}>
                    <PrimaryInputPatient
                    disbaledicon={!editMode}
                      isCalendar
                      editable={false}
                      // editable={editMode}

                      error={
                        touched?.appointment_date ? errors.appointment_date : ''
                      }
                      placeholder={'Appointment Date'}
                      onChangeText={value => {
                        setFieldValue('appointment_date', value);
                      }}
                      // onBlur={() => {
                      //   setFieldTouched('appointment_date', true);
                      // }}
                      value={values.appointment_date}
                      containerStyle={{backgroundColor:editMode ? colors.white:colors.gray}}
                    />
                  </DatePicker>
                  <PrimaryInputPatient
                    label="Required"
                    isRequired
                    editable={editMode}
                    // disabled={editMode}
                    keyboardType={'email-address'}
                    error={
                      touched?.insurance_name ? t(errors.insurance_name) : ''
                    }
                    placeholder={'Insurance Name'}
                    onChangeText={handleChange('insurance_name')}
                    onBlur={handleBlur('insurance_name')}
                    value={values.insurance_name}
                    containerStyle={{backgroundColor:editMode ? colors.white:colors.gray}}
                  />

                  <PrimaryInputPatient
                  // disabled={editMode}
                  editable={editMode}
                    keyboardType={'email-address'}
                    error={touched?.member_id ? t(errors.member_id) : ''}
                    placeholder={'Member Id'}
                    onChangeText={handleChange('member_id')}
                    onBlur={handleBlur('member_id')}
                    value={values.member_id}
                    containerStyle={{backgroundColor:editMode ? colors.white:colors.gray}}
                  />
                  <PrimaryInputPatient
                  // disabled={editMode}
                  editable={editMode}
                    keyboardType={'email-address'}
                    error={touched?.group_number ? t(errors.group_number) : ''}
                    placeholder={'Gooup Number'}
                    onChangeText={handleChange('group_number')}
                    onBlur={handleBlur('group_number')}
                    value={values.group_number}
                    containerStyle={{backgroundColor:editMode ? colors.white:colors.gray}}
                  />

                  {editMode && <Row>
                    <PrimaryButton
                      containerStyle={{
                        borderRadius: mvs(14),
                        width: '40%',
                        backgroundColor: colors.white,
                        borderWidth: 1,
                        borderColor: colors.gray,
                      }}
                      loading={loading}
                      onPress={resetForm}
                      title={'CLEAR'}
                      
                      textStyle={{fontSize: mvs(20), color: colors.black}}
                    />
                    <PrimaryButton
                      containerStyle={{
                        borderRadius: mvs(14),
                        width: '40%',
                      }}
                      loading={loading}
                      onPress={handleSubmit}
                      textStyle={{fontSize: mvs(20)}}
                      title={'Save'}
                    />
                  </Row>}
                </>
              )}
            </Formik>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default ViewPatientDetailsScreen;
