import {useIsFocused} from '@react-navigation/native';
import Header1x2x from 'components/atoms/header-home/header-1x-2x';
import {InputWithIconNew} from 'components/atoms/inputs';
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
import { SERVICE_LIST, SERVICE_LIST_NEW } from 'config/constants';
import ChartComponent from 'components/molecules/rn-chart';
import ServiceCardNew from 'components/molecules/service-card-new';
import PatientsClaimsChart from 'components/molecules/rn-chart-bar';
const HomeTab = props => {
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
  // const user = useAppSelector(s => s?.user);
  const isFcous = useIsFocused();
  // const userInfo = user?.userInfo;
  // console.log('user==>', user);
  const language = user?.language;
  const dispatch = useAppDispatch();
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
      <ScrollView contentContainerStyle={{flexGrow: 1,paddingBottom:mvs(100)}}>
        <Header1x2x
          back={false}
          style={{backgroundColor: colors.transparent}}
        />
        <Row
          style={{
            alignItems: 'center',

            paddingHorizontal: mvs(20),
          }}>
          <Medium
            label={`Hi, ${user?.nickname}`}
            fontSize={mvs(20)}
            color={colors.primary}
          />
        </Row>

        <View style={styles.contentContainerStyle}>
          <View style={styles.contentContainerStyleNew}>
            <Row style={{justifyContent: 'space-between'}}>
              <Medium
                label={'Pateint Overview'}
                color={colors.black}
                fontSize={mvs(18)}
              />
              <View>
                <InputWithIconNew
                  placeholder={'Filter'}
                  onChangeText={id => setFilter(id)}
                  value={filter}
                  id={filter}
                  items={FilterDays}
                />
              </View>
            </Row>
            <View style={styles.body}>
                <CustomFlatList
                  contentContainerStyle={styles.contentContainerStyle2}
                  showsVerticalScrollIndicator={false}
                  data={SERVICE_LIST}
                  renderItem={renderServiceList}
                  // columnWrapperStyle={{justifyContent: 'space-between'}}
                  ItemSeparatorComponent={itemSeparatorComponent()}
                />
              </View>
              <View style={styles.contentContainerStyleChart}>
                <ChartComponent/>
              </View>

              <Row style={{justifyContent: 'space-between',marginVertical:mvs(20)}}>
              <Medium
                label={'Pateint Claims Insight'}
                color={colors.black}
                fontSize={mvs(18)}
              />
              <View>
                <InputWithIconNew
                  placeholder={'Filter'}
                  onChangeText={id => setFilter(id)}
                  value={filter}
                  id={filter}
                  items={FilterDays}
                />
              </View>
            </Row>

            <View style={styles.body}>
                <CustomFlatList
                  contentContainerStyle={styles.contentContainerStyle2}
                  showsVerticalScrollIndicator={false}
                  data={SERVICE_LIST_NEW}
                  renderItem={renderServiceListNew}
                  // columnWrapperStyle={{justifyContent: 'space-between'}}
                  ItemSeparatorComponent={itemSeparatorComponent()}
                />
              </View>


              <View style={styles.contentContainerStyleChartNew}>
                <Medium  label={'Pateint Claims Chart'}
                color={colors.black}
                fontSize={mvs(28)}
                style={{paddingBottom:mvs(10),marginLeft:mvs(20)}}/>
                <PatientsClaimsChart/>
              </View>
            
            
           
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default HomeTab;
