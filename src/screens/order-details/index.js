import * as IMG from 'assets/images';
import Header1x2x from 'components/atoms/headers/header-1x-2x';
import { Loader } from 'components/atoms/loader';
import { Row } from 'components/atoms/row';
import { colors } from 'config/colors';
import { mvs } from 'config/metrices';
import { useAppDispatch, useAppSelector } from 'hooks/use-store';

import { PrimaryButton } from 'components/atoms/buttons';
import CustomFlatList from 'components/atoms/custom-flatlist';
import {
  InputWithIcon2,
  InputWithIcon3
} from 'components/atoms/inputs';
import ItemDetailsCard from 'components/molecules/item-details-card';
import OrderDetailsCard from 'components/molecules/order-details-card';
import RatingStar from 'components/molecules/rating-star';
import { navigate } from 'navigation/navigation-ref';
import React from 'react';
import {
  Alert,
  Image,
  Linking,
  ScrollView,
  TouchableOpacity,
  View
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  getOrderDetails,
  getOrderDetailsStatusChange,
  getOrderDetailsStatusChange2,
  getVehcileListOrder
} from 'services/api/auth-api-actions';
import { onCreateConveration } from 'services/api/chat-api-actions';
import i18n from 'translation';
import Medium from 'typography/medium-text';
import Regular from 'typography/regular-text';
import { UTILS } from 'utils';
import styles from './styles';
const OrderDetailsScreen = props => {
  const {id} = props?.route?.params;
  console.log(id);
  const dispatch = useAppDispatch();
  const {user} = useAppSelector(s => s);
  const {vehicle_types} = user;
  const {userInfo, notifications} = useAppSelector(s => s.user);
  const {t} = i18n;
  const [loading, setLoading] = React.useState(false);

  const [orderData, setOrderData] = React.useState({});
  const [chatLoading, setChatLoading] = React.useState(false);

  const [vehicle_id, setVehicle_id] = React.useState('');
  const [vehicle_number, setVehicle_number] = React.useState('');
  const [vehcileLists, setVehicleLists] = React.useState([]);

  React.useEffect(() => {
    getList();
    getListVehcile();
  }, []);
  const getListVehcile = async () => {
    try {
      // setLoading(true);
      const res = await getVehcileListOrder();
      setVehicleLists(res?.vehicles);

      console.log('screen1', res?.vehicles);
    } catch (error) {
      // setLoading(false);
    } finally {
      // setLoading(false);
    }
  };
  const getList = async () => {
    try {
      setLoading(true);
      const res = await getOrderDetails(id);
      setOrderData(res?.value);

      // console.log('data===>>>', res?.value);
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  const origin = {
    latitude: orderData?.pickup_lat * 1 || 37.78825,
    longitude: orderData?.pickup_long * 1 || -122.4324,
  };

  const destination = {
    latitude: orderData?.dropoff_lat * 1 || 37.7749,
    longitude: orderData?.dropoff_long * 1 || -122.4194,
  };
  // console.log(
  //   'lat',
  //   orderData?.pickup_lat,
  //   orderData?.pickup_long,
  //   orderData?.dropoff_lat,
  //   orderData?.dropoff_long,
  // );

  const onMessagePress = async user_id => {
    try {
      setChatLoading(true);
      const res = await onCreateConveration({
        receiver_id: user_id,
      });
      // console.log('create message res check karna===>', res);
      navigate('InboxScreen', {
        id: res?.conversation_id,
        title: res?.receiver_name,
        email: res?.receiver_email,
        image: res?.receiver_image,
      });
    } catch (error) {
      console.log('Error in create conversion====>', error);
      Alert.alert('Error', UTILS.returnError(error));
    } finally {
      setChatLoading(false);
    }
  };

  const ChangeStatus = async (status, id) => {
    console.log('id', status, id);
    // return;
    try {
      // const status = isRejected ? 0 : 1;

      const res = await getOrderDetailsStatusChange(status, id);
      Alert.alert(res.message);
      // console.log('resp==========>', res);
    } catch (error) {
      Alert.alert(res.message);
      console.log('Error:', UTILS.returnError(error));
      Alert.alert('Error', UTILS.returnError(error));
    }
  };

  const vehcile_id_two = orderData?.vehicle?.id;
  const vehciel_number_two = orderData?.vehicle?.vehicle_number;
  const ChangeStatus2 = async (
    status,
    id,
    vehicle_id,
    vehcile_id_two,
    vehciel_number_two,
    vehicle_number,
  ) => {
    console.log(
      'id',
      status,
      id,
      vehicle_id,
      vehicle_number,
      vehcile_id_two,
      vehciel_number_two,
    );
    // return;
    try {
      // const status = isRejected ? 0 : 1;

      const res = await getOrderDetailsStatusChange2(
        status,
        id,
        vehicle_id,
        vehicle_number,
        vehcile_id_two,
        vehciel_number_two,
      );

      console.log('Response:', res);
      Alert.alert(res.message);
      // if (!res || res.status !== 200) {
      //   throw new Error(res?.data?.message || 'Failed to start the order');
      // }
      console.log('resp==========>', res);
    } catch (error) {
      Alert.alert(res.message);
      console.log('Error:', UTILS.returnError(error));
      Alert.alert('Error', UTILS.returnError(error));
    }
  };

  // const onPressAccept = () => {
  //   // Display an alert to confirm the acceptance
  //   Alert.alert(
  //     'Start',
  //     'Do you want to Start this order?',
  //     [
  //       {
  //         text: 'Cancel',
  //         style: 'cancel',
  //       },
  //       {
  //         text: 'Start',
  //         onPress: async () => {
  //           // If the user confirms the acceptance, call the ChangeStatus function
  //           await ChangeStatus2(
  //             console.log(

  //               id,
  //               vehicle_id,
  //               vehicle_number,
  //               orderData?.vehicle?.id,
  //               orderData?.vehicle?.vehicle_number,
  //             ),
  //             'start',
  //             id,
  //             vehicle_id || orderData?.vehicle?.id,
  //             vehicle_number || orderData?.vehicle?.vehicle_number,
  //           );
  //           // Then, refresh the list

  //           Alert.alert('Order has been Started');
  //           await getList();
  //           // goBack();
  //         },
  //       },
  //     ],
  //     {cancelable: false},
  //   );
  // };
  const selectedVehicleId = vehicle_id || (orderData?.vehicle?.id ?? undefined);
  const selectedVehicleNumber =
    vehicle_number || (orderData?.vehicle?.vehicle_number ?? undefined);

  const onPressAccept = () => {
    const selectedVehicleId =
      vehicle_id || (orderData?.vehicle?.id ?? undefined);
    const selectedVehicleNumber =
      vehicle_number || (orderData?.vehicle?.vehicle_number ?? undefined);

    // Display an alert to confirm the acceptance
    Alert.alert(
      'Start',
      'Do you want to Start this order?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Start',
          onPress: async () => {
            try {
              // If the user confirms the acceptance, call the ChangeStatus function
              await ChangeStatus2(
                'start',
                id,
                selectedVehicleId,
                selectedVehicleNumber,
              );
              // if (res.status == 200) {
              // Then, refresh the list
              // Alert.alert('Order has been Started');
              // Alert.alert(res.message);
              await getList();
              // } else {
              //   Alert.alert(res.message);
              // }
              // goBack();
            } catch (error) {
              // If there's an error, display an error alert
              // Alert.alert(res.message);
            }
          },
        },
      ],
      {cancelable: false},
    );
  };

  const onPressReject = () => {
    // Display an alert to confirm the acceptance
    Alert.alert(
      'Complete',
      'Are you sure you want to complete this order?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Completed',
          onPress: async () => {
            // If the user confirms the acceptance, call the ChangeStatus function
            await ChangeStatus('delivered', id);
            // Then, refresh the list

            await Alert.alert('Order has been Completed');
            // await Alert.alert('Order has been Completed');
            getList();
            // goBack();
          },
        },
      ],
      {cancelable: false},
    );
  };

  const renderAppointmentItem = ({item, index}) => {
    return <ItemDetailsCard item={item} />;
  };
  const openGoogleMapsDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&origin=${origin.latitude},${origin.longitude}&destination=${destination.latitude},${destination.longitude}`;
    Linking.openURL(url);
  };

  const itemSeparatorComponent = () => {
    return <View style={{paddingVertical: mvs(5)}}></View>;
  };
  const openPhoneDialer = phoneNumber => {
    // Verify that the phoneNumber is not empty
    if (!phoneNumber) {
      console.log('Phone number is empty.');
      return;
    }

    // Define the URL format for both iOS and Android
    let phoneUrl;
    if (Platform.OS === 'android') {
      phoneUrl = `tel:${phoneNumber}`;
    } else {
      phoneUrl = `telprompt:${phoneNumber}`;
    }

    Linking.openURL(phoneUrl)
      .then(() => {
        console.log('Phone dialer opened successfully.');
      })
      .catch(error => {
        console.error('Error opening phone dialer:', error);
      });
  };
  console.log('orderData?.any_instruction', orderData?.any_instruction);

  return (
    <View style={styles.container}>
      <Header1x2x title={t('order_details')} />
      {loading ? (
        <Loader color={colors.white} />
      ) : (
        <View style={{flex: 1}}>
          {orderData ? (
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
              {/* <View style={{height: mvs(250)}}>
                <CustomMap
                  initialRegion={{
                    latitude: origin?.latitude,
                    longitude: origin?.longitude,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05,
                  }}>
                  <Marker coordinate={origin} />
                  <Marker coordinate={destination} />
                  <MapDirections
                    origin={origin}
                    destination={destination}
                    strokeWidth={3}
                    strokeColor="blue"
                  />
                </CustomMap>
              </View> */}

              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  // width: mvs(120),
                  paddingHorizontal: mvs(10),
                  paddingVertical: mvs(5),
                  backgroundColor: colors.white,
                  position: 'absolute',
                  top: mvs(180),
                  right: mvs(20),
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: mvs(5),
                }}
                onPress={openGoogleMapsDirections}>
                <Row style={{alignItems: 'center'}}>
                  <FontAwesome5
                    name="directions"
                    size={mvs(30)}
                    color={colors.bluecolor}
                  />
                  <Medium
                    label={t('get_direction')}
                    color={colors.primary}
                    fontSize={mvs(12)}
                    style={{marginLeft: mvs(10)}}
                  />

                  {/* <PrimaryButton
                  title="Get Directions"
                  onPress={openGoogleMapsDirections}
                  containerStyle={{backgroundColor: colors.green}}
                /> */}
                </Row>
              </TouchableOpacity>
              <View style={styles.contentContainerStyle}>
                <OrderDetailsCard item={orderData} />

                {orderData?.price_type != 'hour_price' && (
                  <Medium
                    label={t('item_details')}
                    color={colors.white}
                    style={{alignSelf: 'center'}}
                  />
                )}
                <CustomFlatList
                  // emptyList={<EmptyList label={t('no_notification')} />}
                  contentContainerStyle={styles.contentContainerStyleFlatlist}
                  showsVerticalScrollIndicator={false}
                  numColumns={2}
                  data={orderData?.json}
                  renderItem={renderAppointmentItem}
                  columnWrapperStyle={{justifyContent: 'space-between'}}
                  // ItemSeparatorComponent={itemSeparatorComponent()}
                  keyExtractor={(_, index) => index?.toString()}
                />
                {orderData?.any_instruction && (
                  <View>
                    <Medium
                      label={'Any Instruction:'}
                      fontSize={mvs(12)}
                      color={colors.white}
                    />
                    <View
                      style={{
                        width: '100%',
                        backgroundColor: colors.gray,
                        padding: mvs(5),
                        borderRadius: mvs(4),
                      }}>
                      <Medium
                        label={orderData?.any_instruction}
                        fontSize={mvs(10)}
                        color={colors.black}
                        numberOfLines={10}
                      />
                    </View>
                  </View>
                )}
              </View>
              {orderData?.driver_status === 'delivered' &&
                orderData?.review && (
                  <Row
                    style={{
                      backgroundColor: colors.white,
                      // width: mvs(200),
                      marginHorizontal: mvs(20),
                      padding: mvs(10),
                      borderRadius: mvs(10),
                      justifyContent: 'flex-start',
                      gap: mvs(20),
                    }}>
                    <Image
                      source={
                        orderData?.user?.avatar
                          ? {uri: orderData?.user?.avatar}
                          : IMG.Drawerman
                      }
                      // source={IMG.Drawerman}
                      style={{
                        height: mvs(40),
                        width: mvs(40),
                        borderRadius: mvs(15),
                      }}
                    />
                    <View style={{flex: 1}}>
                      {/* <Medium label={orderData?.review?.title} /> */}
                      <Medium
                        label={orderData?.name || 'N/A'}
                        fontSize={mvs(14)}
                      />
                      <View style={{width: mvs(100)}}>
                        <RatingStar rate={orderData?.review?.review || 'N/A'} />
                      </View>
                      <Regular
                        fontSize={mvs(12)}
                        numberOfLines={10}
                        label={orderData?.review?.description || 'N/A'}
                        style={{marginTop: mvs(6)}}
                      />
                    </View>
                  </Row>
                )}
              {orderData?.driver_status !== 'start' &&
                orderData?.driver_status !== 'delivered' &&
                orderData?.status === 'accepted' && (
                  <View style={{marginHorizontal: mvs(20)}}>
                    {orderData?.price_type != 'hour_price' && (
                      <Medium
                        label={'Please Select Vechile before start order'}
                        color={colors.white}
                        fontSize={mvs(12)}
                      />
                    )}
                    {orderData?.price_type != 'hour_price' && (
                      <InputWithIcon2
                        placeholder={t('select_vehicle_type')}
                        onChangeText={selectedId => setVehicle_id(selectedId)}
                        value={vehicle_id}
                        id={vehicle_id}
                        items={vehcileLists}
                      />
                    )}
                    {orderData?.price_type === 'hour_price' && (
                      <InputWithIcon3
                        editable={true}
                        placeholder={t('select_vehicle_type')}
                        label2={orderData?.vehicle?.vehicle_type}
                        onChangeText={selectedId => setVehicle_id(selectedId)}
                        value={vehicle_id}
                        id={vehicle_id}
                        items={vehcileLists}
                      />
                    )}
                  </View>
                )}
            </ScrollView>
          ) : (
            <Medium label={t('no_order_data')} color={colors.white} /> // Render an empty state when orderData is not available yet
          )}

          <Row
            style={{
              paddingHorizontal: mvs(20),
              alignItems: 'center',
              marginBottom: mvs(20),
              paddingTop: mvs(16),
            }}>
            {orderData?.status !== 'free' &&
              orderData?.status !== 'paid' &&
              (orderData?.driver_status === null ||
                orderData?.driver_status === 'start' ||
                orderData?.driver_status === 'delivered') && (
                <PrimaryButton
                  containerStyle={styles.acceptbutton}
                  // title={
                  //   orderData?.driver_status === 'delivered' ||
                  //   orderData?.driver_status === 'start'
                  //     ? 'Delivered'
                  //     : 'Start'
                  // }
                  title={
                    orderData?.driver_status === 'delivered'
                      ? 'Completed'
                      : orderData?.driver_status === 'start'
                      ? 'Complete'
                      : 'Start'
                  }
                  disabled={orderData?.driver_status === 'delivered'}
                  onPress={
                    orderData?.driver_status === 'delivered' ||
                    orderData?.driver_status === 'start'
                      ? () => onPressReject(id)
                      : () =>
                          onPressAccept(
                            id,
                            // vehicle_id || orderData?.vehicle?.id,
                            selectedVehicleId,
                            // vehicle_number ||
                            //   orderData?.vehicle?.vehicle_number,
                            selectedVehicleNumber,
                          )
                  }
                />
              )}
            {['start', 'accepted', 'delivered'].includes(orderData?.status) && (
              <TouchableOpacity
                style={{
                  backgroundColor: colors.white,
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '30%',
                  paddingHorizontal: mvs(10),
                  paddingVertical: mvs(5),
                  borderRadius: mvs(6),
                }}
                onPress={() => onMessagePress(orderData?.user_id)}>
                <Row style={{alignItems: 'center'}}>
                  <Ionicons
                    name="chatbox-ellipses-outline"
                    color={colors.primary}
                    size={mvs(20)}
                  />
                  <Medium
                    label={t('chat')}
                    color={colors.primary}
                    fontSize={mvs(16)}
                    style={{marginLeft: mvs(6)}}
                  />
                </Row>
              </TouchableOpacity>
            )}
            {/* {orderData?.status === 'accepted' && (
              // <Row style={{}}>
              <PrimaryButton
                containerStyle={styles.phonebutton}
                // loading={loading}
                title={t('phone')}
                onPress={() => UTILS.dialPhone('9218223676')}
              />
              // </Row>
            )} */}
            {['start', 'accepted', 'delivered'].includes(orderData?.status) && (
              <TouchableOpacity
                style={{
                  backgroundColor: colors.grey,
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '30%',
                  paddingHorizontal: mvs(10),
                  paddingVertical: mvs(5),
                  borderRadius: mvs(6),
                }}
                onPress={() => openPhoneDialer(orderData?.phone)}>
                <Row style={{alignItems: 'center'}}>
                  <Foundation
                    name="telephone"
                    color={colors.white}
                    size={mvs(20)}
                  />
                  {/* <PrimaryButton
                  containerStyle={styles.rejectbutton}
                  textStyle={{color: colors.primary}}
                  // loading={loading}
                  title={t('chat_now')}
                  onPress={() => {
                    onMessagePress(orderData?.user_id);
                    // Handle the action when the "Start" button is pressed
                    // You can add your logic here
                  }}
                /> */}
                  <Medium
                    label={t('call')}
                    color={colors.white}
                    fontSize={mvs(16)}
                    style={{marginLeft: mvs(6)}}
                  />
                </Row>
              </TouchableOpacity>
            )}
          </Row>
        </View>
      )}
    </View>
  );
};
export default OrderDetailsScreen;
