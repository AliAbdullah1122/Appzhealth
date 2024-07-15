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
import {
  PATIENT_LIST_DATA,
  SERVICE_LIST,
  SERVICE_LIST_NEW,
} from 'config/constants';
import ChartComponent from 'components/molecules/rn-chart';
import ServiceCardNew from 'components/molecules/service-card-new';
import PatientsClaimsChart from 'components/molecules/rn-chart-bar';
import {PrimaryButton} from 'components/atoms/buttons';
import PatientManagementCard from 'components/molecules/patient-management-card';
import HeaderAddPatient from 'components/atoms/headers/header-add-patient-';
import {Appbar, Card, Menu, Button, TextInput} from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import HeaderNewSearch from 'components/atoms/headers/header-new-search';
const DiscoverytManagement = props => {
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
  const [menuVisible, setMenuVisible] = React.useState(false);

  const openMenu = id => {
    console.log(`Opening menu for ID: ${id}`);
    setMenuVisible(id);
  };

  const closeMenu = () => {
    console.log('Closing menu');
    setMenuVisible(null);
  };

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
      <ScrollView
        contentContainerStyle={{flexGrow: 1, paddingBottom: mvs(100)}}>
        <HeaderNewSearch
          back={true}
          // title={'Patients'}
          style={{backgroundColor: colors.transparent}}
          onPress={() => navigate('NewSearchScreen')}
        />

        <View style={{marginBottom: mvs(20), marginHorizontal: mvs(20)}}>
          <SearchInput />
        </View>
        <ScrollView horizontal contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.contentContainerStyle}>
            <View style={styles.contentContainerStyleNew}>
              <View style={styles.body}>

                <Row
                  style={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingVertical: mvs(10),
                    paddingHorizontal: mvs(10),
                    borderBottomWidth: 1,
                    borderBottomColor: colors.gray,
                    backgroundColor: colors.mildgrey,
                  }}>
                  <View style={{width: mvs(180)}}>
                    <Medium
                      label={'ID#'}
                      numberOfLines={2}
                      color={colors.black}
                      fontSize={mvs(18)}
                    />
                  </View>
                  <View
                    style={{
                      width: mvs(180),
                      borderLeftWidth: 2,
                      borderColor: colors.gray,
                    }}>
                    <Medium
                      style={{marginLeft: mvs(10)}}
                      label={'Appt'}
                      numberOfLines={2}
                      color={colors.black}
                      fontSize={mvs(18)}
                    />
                  </View>
                  <View
                    style={{
                      width: mvs(180),
                      borderLeftWidth: 2,
                      borderColor: colors.gray,
                    }}>
                    <Medium
                      label={'Patient'}
                      style={{marginLeft: mvs(10)}}
                      numberOfLines={2}
                      color={colors.black}
                      fontSize={mvs(18)}
                    />
                  </View>
                  <View
                    style={{
                      width: mvs(180),
                      borderLeftWidth: 2,
                      borderColor: colors.gray,
                    }}>
                    <Medium
                      label={'Phone'}
                      style={{marginLeft: mvs(10)}}
                      numberOfLines={2}
                      color={colors.black}
                      fontSize={mvs(18)}
                    />
                  </View>
                  <View
                    style={{
                      width: mvs(180),
                      borderLeftWidth: 2,
                      borderColor: colors.gray,
                    }}>
                    <Medium
                      label={'Copay'}
                      style={{marginLeft: mvs(10)}}
                      numberOfLines={2}
                      color={colors.black}
                      fontSize={mvs(18)}
                    />
                  </View>
                  <View
                    style={{
                      width: mvs(180),
                      borderLeftWidth: 2,
                      borderColor: colors.gray,
                    }}>
                    <Medium
                      label={'Deductible'}
                      style={{marginLeft: mvs(10)}}
                      numberOfLines={2}
                      color={colors.black}
                      fontSize={mvs(18)}
                    />
                  </View>
                  <View
                    style={{
                      width: mvs(180),
                      borderLeftWidth: 2,
                      borderColor: colors.gray,
                    }}>
                    <Medium
                      label={'Insurance'}
                      style={{marginLeft: mvs(10)}}
                      numberOfLines={2}
                      color={colors.black}
                      fontSize={mvs(18)}
                    />
                  </View>
                  <View
                    style={{
                      width: mvs(180),
                      borderLeftWidth: 2,
                      borderColor: colors.gray,
                    }}>
                    <Medium
                      label={'Status'}
                      style={{marginLeft: mvs(10)}}
                      numberOfLines={2}
                      color={colors.black}
                      fontSize={mvs(18)}
                    />
                  </View>
                  <View
                    style={{
                      width: mvs(180),
                      borderLeftWidth: 2,
                      borderColor: colors.gray,
                    }}>
                    <Medium
                      label={''}
                      style={{marginLeft: mvs(10)}}
                      numberOfLines={2}
                      color={colors.green}
                      fontSize={mvs(18)}
                    />
                  </View>
                </Row>
                {PATIENT_LIST_DATA?.map((item, index) => (
                  <ScrollView contentContainerStyle={{flexGrow: 1}}>
                    <Row
                      key={item?.id}
                      style={{
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        paddingVertical: mvs(10),
                        paddingHorizontal: mvs(10),
                        borderBottomWidth: 1,
                        borderBottomColor: colors.gray,
                      }}>
                      <View style={{width: mvs(180)}}>
                        <Medium
                          label={item?.id}
                          numberOfLines={2}
                          color={colors.black}
                          fontSize={mvs(16)}
                        />
                      </View>
                      <View
                        style={{
                          width: mvs(180),
                        }}>
                        <Medium
                          style={{marginLeft: mvs(10)}}
                          numberOfLines={2}
                          color={colors.black}
                          fontSize={mvs(16)}
                          label={item?.appt}
                        />
                      </View>
                      <View
                        style={{
                          width: mvs(180),
                        }}>
                        <Medium
                          style={{marginLeft: mvs(10)}}
                          numberOfLines={2}
                          color={colors.black}
                          fontSize={mvs(16)}
                          label={item?.first_name +" "+ item?.last_name}
                        />
                      </View>
                      <View
                        style={{
                          width: mvs(180),
                        }}>
                        <Medium
                          style={{marginLeft: mvs(10)}}
                          numberOfLines={2}
                          color={colors.black}
                          fontSize={mvs(16)}
                          label={item?.phone}
                        />
                      </View>
                      <View
                        style={{
                          width: mvs(180),
                        }}>
                        <Medium
                          style={{marginLeft: mvs(10)}}
                          numberOfLines={2}
                          color={colors.black}
                          fontSize={mvs(16)}
                          label={item?.copay}
                        />
                      </View>
                      <View
                        style={{
                          width: mvs(180),
                        }}>
                        <Medium
                          style={{marginLeft: mvs(10)}}
                          numberOfLines={2}
                          color={colors.black}
                          fontSize={mvs(16)}
                          label={item?.dedecutable}
                        />
                      </View>
                      <View
                        style={{
                          width: mvs(180),
                        }}>
                        <Medium
                          style={{marginLeft: mvs(10)}}
                          numberOfLines={2}
                          color={colors.black}
                          fontSize={mvs(16)}
                          label={item?.insurance}
                        />
                      </View>
                      <View
                        style={{
                          width: mvs(180),
                        }}>
                        <Medium
                          style={{marginLeft: mvs(10)}}
                          numberOfLines={2}
                          color={colors.black}
                          fontSize={mvs(16)}
                          label={item?.status}
                        />
                      </View>
                      <View
                        style={{
                          width: mvs(180),
                          alignSelf: 'flex-start',
                          justifyContent: 'center',
                          alignItems: 'flex-start',
                        }}>
                        <Menu
                          style={{backgroundColor: colors.white}}
                          contentStyle={{backgroundColor:colors.white}}
                          visible={menuVisible === item.id}
                          onDismiss={closeMenu}
                          anchor={
                            <Button onPress={() => openMenu(item.id)}>
                              <Entypo
                                name="dots-three-vertical"
                                size={mvs(16)}
                                color={colors.black}
                              />
                            </Button>
                          }>
                        <Menu.Item
                            // onPress={() =>
                            //   alert(`View Details of ${item.patient}`)
                            // }
                            onPress={()=>{closeMenu(), props?.navigation.navigate('ViewPatientDetailsScreen',{
                              patients:item
                            })}}
                            title="View Details"
                          />

                        </Menu>
                      </View>
                    </Row>
                  </ScrollView>
                ))}

              
              </View>
            </View>
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
};
export default DiscoverytManagement;
