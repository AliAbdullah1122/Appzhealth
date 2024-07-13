import {useIsFocused} from '@react-navigation/native';
import Header1x2x from 'components/atoms/headers/header-1x-2x';
import {InputWithIconNew, SearchInput} from 'components/atoms/inputs';
import {Row} from 'components/atoms/row';
import ServiceCard from 'components/molecules/service-card';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import {useAppDispatch} from 'hooks/use-store';
import React from 'react';
import {ScrollView, View} from 'react-native';
import {useAuth0} from 'react-native-auth0';
import i18n from 'translation';
import Medium from 'typography/medium-text';
import styles from './styles';
import Bold from 'typography/bold-text';
import CustomFlatList from 'components/atoms/custom-flatlist';
import { PATIENT_LIST_DATA, SERVICE_LIST, SERVICE_LIST_NEW } from 'config/constants';
import ChartComponent from 'components/molecules/rn-chart';
import ServiceCardNew from 'components/molecules/service-card-new';
import PatientsClaimsChart from 'components/molecules/rn-chart-bar';
import { PrimaryButton } from 'components/atoms/buttons';
import PatientManagementCard from 'components/molecules/patient-management-card';
const PatientManagement = props => {
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
  const renderPatientList = ({item, index}) => (
    <PatientManagementCard
    colortext={colors.primary}
      // backgroundColor={index % 1.5 === 0 ? colors.homecard2 : colors.homecard1}
      item={item}
      // onPress={() => props?.navigation?.navigate(item?.screenName)}
    />
  );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1,paddingBottom:mvs(100)}}>
        <Header1x2x
          back={true}
          // title={'Patients'}
          style={{backgroundColor: colors.transparent}}
        />

        <View style={{paddingVertical:mvs(10),justifyContent:"flex-end",alignItems:"flex-end",marginRight:mvs(10)}}>
        <PrimaryButton
                    containerStyle={{
                      borderRadius: mvs(6),
                      width:"30%",
                      backgroundColor:colors.acceptcolor
                    }}
                  onPress={()=> navigate("AddPPatientScreen")}
                  
                    title={'Add Patient'}
                  />
        </View>

        <View style={styles.contentContainerStyle}>
          <View style={styles.contentContainerStyleNew}>
          <View style={{marginBottom: mvs(20)}}>
              <SearchInput />
            </View>
            <View style={styles.body}>
                <CustomFlatList
                horizontal
                  contentContainerStyle={styles.contentContainerStyle2}
                  showsVerticalScrollIndicator={false}
                  data={PATIENT_LIST_DATA}
                  renderItem={renderPatientList}
                  // columnWrapperStyle={{justifyContent: 'space-between'}}
                  ItemSeparatorComponent={itemSeparatorComponent()}
                />
              </View>
          
            

              

           

             
            
           
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default PatientManagement;
