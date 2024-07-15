// import React from 'react';
// import { ScrollView, TouchableOpacity, View } from 'react-native';
// import { useIsFocused } from '@react-navigation/native';
// import { useAuth0 } from 'react-native-auth0';
// import i18n from 'translation';
// import { mvs } from 'config/metrices';
// import { colors } from 'config/colors';
// import { PATIENT_LIST_DATA } from 'config/constants';
// import { PrimaryButton } from 'components/atoms/buttons';
// import PatientManagementCard from 'components/molecules/patient-management-card';
// import { Row } from 'components/atoms/row';
// import Medium from 'typography/medium-text';
// import HeaderNewSearch from 'components/atoms/headers/header-new-search';
// import Entypo from 'react-native-vector-icons/Entypo';
// import { Button, Menu } from 'react-native-paper';
// import DraggableFlatList from 'react-native-draggable-flatlist';
// import styles from './styles';
// import { SearchInput } from 'components/atoms/inputs';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';

// const PatientManagement = props => {
//   const { t } = i18n;
//   const { authorize, clearSession, user } = useAuth0();
//   const isFocused = useIsFocused();

//   const [loading, setLoading] = React.useState(false);
//   const [data, setData] = React.useState(PATIENT_LIST_DATA);
//   const [menuVisible, setMenuVisible] = React.useState(false);

//   const openMenu = id => {
//     setMenuVisible(id);
//   };

//   const closeMenu = () => {
//     setMenuVisible(null);
//   };

//   const renderItem = ({ item, index, drag, isActive }) => (
//     <ScrollView horizontal >
//     <TouchableOpacity   key={item.id} onLongPress={drag}>
//     <Row

//       style={{
//         justifyContent: 'flex-start',
//         alignItems: 'center',
//         paddingVertical: mvs(10),
//         paddingHorizontal: mvs(10),
//         borderBottomWidth: 1,
//         borderBottomColor: colors.gray,
//         backgroundColor: isActive ? colors.lightGray : colors.white,
//       }}

//     >
//       {/* <TouchableOpacity  onLongPress={drag}> */}
//       <View style={{ width: mvs(180) }}>
//         <Medium
//           label={item.id}
//           numberOfLines={2}
//           color={colors.black}
//           fontSize={mvs(16)}
//         />
//       </View>
//       <View style={{ width: mvs(180) }}>
//         <Medium
//           style={{ marginLeft: mvs(10) }}
//           numberOfLines={2}
//           color={colors.black}
//           fontSize={mvs(16)}
//           label={item.appt}
//         />
//       </View>
//       <View style={{ width: mvs(180) }}>
//         <Medium
//           style={{ marginLeft: mvs(10) }}
//           numberOfLines={2}
//           color={colors.black}
//           fontSize={mvs(16)}
//           label={item.first_name + " " + item.last_name}
//         />
//       </View>
//       <View style={{ width: mvs(180) }}>
//         <Medium
//           style={{ marginLeft: mvs(10) }}
//           numberOfLines={2}
//           color={colors.black}
//           fontSize={mvs(16)}
//           label={item.phone}
//         />
//       </View>
//       <View style={{ width: mvs(180) }}>
//         <Medium
//           style={{ marginLeft: mvs(10) }}
//           numberOfLines={2}
//           color={colors.black}
//           fontSize={mvs(16)}
//           label={item.copay}
//         />
//       </View>
//       <View style={{ width: mvs(180) }}>
//         <Medium
//           style={{ marginLeft: mvs(10) }}
//           numberOfLines={2}
//           color={colors.black}
//           fontSize={mvs(16)}
//           label={item.dedecutable}
//         />
//       </View>
//       <View style={{ width: mvs(180) }}>
//         <Medium
//           style={{ marginLeft: mvs(10) }}
//           numberOfLines={2}
//           color={colors.black}
//           fontSize={mvs(16)}
//           label={item.insurance}
//         />
//       </View>
//       <View style={{ width: mvs(180) }}>
//         <Medium
//           style={{ marginLeft: mvs(10) }}
//           numberOfLines={2}
//           color={colors.black}
//           fontSize={mvs(16)}
//           label={item.status}
//         />
//       </View>
//       <View style={{ width: mvs(180), alignSelf: 'flex-start', justifyContent: 'center', alignItems: 'flex-start' }}>
//         <Menu
//           style={{ backgroundColor: colors.white }}
//           contentStyle={{ backgroundColor: colors.white }}
//           visible={menuVisible === item.id}
//           onDismiss={closeMenu}
//           anchor={
//             <Button onPress={() => openMenu(item.id)}>
//               <Entypo
//                 name="dots-three-vertical"
//                 size={mvs(16)}
//                 color={colors.black}
//               />
//             </Button>
//           }
//         >
//           <Menu.Item
//             onPress={() => {
//               closeMenu();
//               props.navigation.navigate('ViewPatientDetailsScreen', { patient: item });
//             }}
//             title="View Details"
//           />
//         </Menu>
//       </View>
//       {/* </TouchableOpacity> */}
//     </Row>
//     </TouchableOpacity>
//     </ScrollView>
//   );

//   return (
//     // <GestureHandlerRootView style={{flex:1}}>
//     <View style={styles.container}>
//       <ScrollView contentContainerStyle={{flexGrow: 1, paddingBottom: mvs(100)}}>

//         <HeaderNewSearch
//           back={true}
//           style={{ backgroundColor: colors.transparent }}
//           onPress={() => props.navigation.navigate('NewSearchScreen')}
//         />

//         <View style={{ marginBottom: mvs(20), marginHorizontal: mvs(20) }}>
//           <SearchInput />
//         </View>
//         <ScrollView horizontal contentContainerStyle={{flexGrow: 1}}>
//         <View style={styles.contentContainerStyle}>
//           <View style={styles.contentContainerStyleNew}>
//             <View style={styles.body}>
//               <Row
//                 style={{
//                   justifyContent: 'space-between',
//                   alignItems: 'center',
//                   paddingVertical: mvs(10),
//                   paddingHorizontal: mvs(10),
//                   borderBottomWidth: 1,
//                   borderBottomColor: colors.gray,
//                   backgroundColor: colors.mildgrey,
//                 }}
//               >
//                 <View style={{ width: mvs(180) }}>
//                   <Medium
//                     label={'ID#'}
//                     numberOfLines={2}
//                     color={colors.black}
//                     fontSize={mvs(18)}
//                   />
//                 </View>
//                 <View style={{ width: mvs(180), borderLeftWidth: 2, borderColor: colors.gray }}>
//                   <Medium
//                     style={{ marginLeft: mvs(10) }}
//                     label={'Appt'}
//                     numberOfLines={2}
//                     color={colors.black}
//                     fontSize={mvs(18)}
//                   />
//                 </View>
//                 <View style={{ width: mvs(180), borderLeftWidth: 2, borderColor: colors.gray }}>
//                   <Medium
//                     label={'Patient'}
//                     style={{ marginLeft: mvs(10) }}
//                     numberOfLines={2}
//                     color={colors.black}
//                     fontSize={mvs(18)}
//                   />
//                 </View>
//                 <View style={{ width: mvs(180), borderLeftWidth: 2, borderColor: colors.gray }}>
//                   <Medium
//                     label={'Phone'}
//                     style={{ marginLeft: mvs(10) }}
//                     numberOfLines={2}
//                     color={colors.black}
//                     fontSize={mvs(18)}
//                   />
//                 </View>
//                 <View style={{ width: mvs(180), borderLeftWidth: 2, borderColor: colors.gray }}>
//                   <Medium
//                     label={'Copay'}
//                     style={{ marginLeft: mvs(10) }}
//                     numberOfLines={2}
//                     color={colors.black}
//                     fontSize={mvs(18)}
//                   />
//                 </View>
//                 <View style={{ width: mvs(180), borderLeftWidth: 2, borderColor: colors.gray }}>
//                   <Medium
//                     label={'Deductible'}
//                     style={{ marginLeft: mvs(10) }}
//                     numberOfLines={2}
//                     color={colors.black}
//                     fontSize={mvs(18)}
//                   />
//                 </View>
//                 <View style={{ width: mvs(180), borderLeftWidth: 2, borderColor: colors.gray }}>
//                   <Medium
//                     label={'Insurance'}
//                     style={{ marginLeft: mvs(10) }}
//                     numberOfLines={2}
//                     color={colors.black}
//                     fontSize={mvs(18)}
//                   />
//                 </View>
//                 <View style={{ width: mvs(180), borderLeftWidth: 2, borderColor: colors.gray }}>
//                   <Medium
//                     label={'Status'}
//                     style={{ marginLeft: mvs(10) }}
//                     numberOfLines={2}
//                     color={colors.black}
//                     fontSize={mvs(18)}
//                   />
//                 </View>
//                 <View style={{ width: mvs(180), borderLeftWidth: 2, borderColor: colors.gray }}>
//                   <Medium
//                     label={''}
//                     style={{ marginLeft: mvs(10) }}
//                     numberOfLines={2}
//                     color={colors.green}
//                     fontSize={mvs(18)}
//                   />
//                 </View>
//               </Row>
// <View >
//               <DraggableFlatList
//                 data={data}
//                 // horizontal
//                 onDragEnd={({ data }) => setData(data)}
//                 keyExtractor={(item, index) => `draggable-item-${item.id}`}
//                 renderItem={renderItem}
//                 horizontal={false} // Ensures vertical scrolling
//                 scrollEnabled={true} // Enables scrolling
//               />
//               </View>
//             </View>
//           </View>
//         </View>
//       </ScrollView>
//       </ScrollView>
//     </View>
//     // </GestureHandlerRootView>
//   );
// };

// export default PatientManagement;
import React from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';
import {colors} from 'config/colors';
import Medium from 'typography/medium-text';
import {Row} from 'components/atoms/row';
import {Menu, Button} from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import {SearchInput} from 'components/atoms/inputs';
import HeaderNewSearch from 'components/atoms/headers/header-new-search';
import {mvs} from 'config/metrices';
import styles from './styles';
import {PATIENT_LIST_DATA} from 'config/constants'; // Assuming you import your PATIENT_LIST_DATA

const PatientManagement = props => {
  const [data, setData] = React.useState(PATIENT_LIST_DATA);
  const [headerData, setHeaderData] = React.useState([
    {id: '#ID', key: 'id'},
    {id: 'APPT', key: 'appt'},
    {id: 'PATIENT', key: 'first_name'},
    {id: 'PHONE', key: 'phone'},
    {id: 'COPAY', key: 'copay'},
    {id: 'DEDUCTABLE', key: 'dedecutable'},
    {id: 'INNSURANCE', key: 'insurance'},
    {id: 'STATUS', key: 'status'},
    {id: 'DETAILS', key: 'details'},
    // Add more headers as needed
  ]);
  const [menuVisible, setMenuVisible] = React.useState(false);

  const openMenu = id => {
    setMenuVisible(id);
  };

  const closeMenu = () => {
    setMenuVisible(null);
  };

  const onHeaderDragEnd = ({data: newHeaderData}) => {
    // Update header order
    setHeaderData(newHeaderData);
    // Rearrange data columns according to new header order
    const newData = data.map(item => {
      const updatedItem = {};
      newHeaderData.forEach(header => {
        updatedItem[header.key] = item[header.key];
      });
      return updatedItem;
    });
    setData(newData);
  };

  const renderDataColumn = (item, headerKey) => (
    // <View style={{width: mvs(180)}}>
    <Medium
      label={item[headerKey]}
      numberOfLines={2}
      color={colors.black}
      fontSize={mvs(16)}
    />
    // </View>
  );

  const renderItem = ({item, drag}) => (
    <TouchableOpacity key={item.id} onLongPress={drag}>
      <Row
        style={{
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingVertical: mvs(10),
          paddingHorizontal: mvs(10),
          borderBottomWidth: 1,
          borderBottomColor: colors.gray,
          backgroundColor: colors.white,
        }}>
        {headerData.map(header => (
          <View key={header.key} style={{width: mvs(180)}}>
            {renderDataColumn(item, header.key)}
          </View>
        ))}
        <View
          style={{
            width: mvs(180),
            alignSelf: 'flex-start',
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}>
          <Menu
            style={{backgroundColor: colors.white}}
            contentStyle={{backgroundColor: colors.white}}
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
              onPress={() => {
                closeMenu();
                props.navigation.navigate('ViewPatientDetailsScreen', {
                  patient: item,
                });
              }}
              title="View Details"
            />
          </Menu>
        </View>
      </Row>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <HeaderNewSearch
        back={true}
        style={{backgroundColor: colors.transparent}}
        onPress={() => props.navigation.navigate('NewSearchScreen')}
      />

      <View style={{marginBottom: mvs(20), marginHorizontal: mvs(20)}}>
        <SearchInput />
      </View>

      {/* Draggable Headers */}
      {/* <ScrollView contentContainerStyle={{flexGrow:1}}> */}
      <View style={styles.contentContainerStyle}>
            <View style={styles.contentContainerStyleNew}>
      <DraggableFlatList
        data={headerData}
        horizontal
        keyExtractor={item => `header-${item.key}`}
        renderItem={({item, drag}) => (
          <TouchableOpacity
            style={{paddingVertical: mvs(10), backgroundColor: colors.mildgrey}}
            onLongPress={drag}>
            <View
              style={{
                width: mvs(180),
                borderLeftWidth: 1,
                borderLeftColor: colors.gray,
                paddingHorizontal: mvs(20),
              }}>
              <Medium
                label={item.id}
                numberOfLines={2}
                color={colors.black}
                fontSize={mvs(16)}
              />
            </View>
          </TouchableOpacity>
        )}
        onDragEnd={onHeaderDragEnd}
      />
      {/* </ScrollView> */}

      {/* Vertical Data */}
      <ScrollView style={{flexGrow: 1}}>
        {data.map(item => (
          <View
            key={item.id}
            style={{
              borderBottomWidth: 1,
              paddingHorizontal: mvs(10),
              borderBottomColor: colors.gray,
            }}>
            <Row
              style={{
                justifyContent: 'flex-start',
                alignItems: 'center',
                paddingVertical: mvs(10),
                paddingHorizontal: mvs(10),
                backgroundColor: colors.white,
              }}>
              {headerData.map(header => (
                <View key={header.key} style={{width: mvs(180)}}>
                  {renderDataColumn(item, header.key)}
                </View>
              ))}
              <View
                style={{
                  width: mvs(180),
                  alignSelf: 'flex-start',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                }}>
                <Menu
                  style={{backgroundColor: colors.white}}
                  contentStyle={{backgroundColor: colors.white}}
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
                    onPress={() => {
                      closeMenu();
                      props.navigation.navigate('ViewPatientDetailsScreen', {
                        patient: item,
                      });
                    }}
                    title="View Details"
                  />
                </Menu>
              </View>
            </Row>
          </View>
        ))}
      </ScrollView>
      </View>
      </View>
    </View>
  );
};

export default PatientManagement;
