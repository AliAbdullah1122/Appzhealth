import {useIsFocused} from '@react-navigation/native';
import Header1x2x from 'components/atoms/headers/header-1x-2x';
import {InputWithIconNew} from 'components/atoms/inputs';
import {Row} from 'components/atoms/row';
import ServiceCard from 'components/molecules/service-card';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import {useAppDispatch} from 'hooks/use-store';
import React from 'react';
import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
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
import { PrimaryButton } from 'components/atoms/buttons';
import { UTILS } from 'utils';
import { FileSVG } from 'assets/icons';
import ImageView from 'react-native-image-viewing';
const ImportPatientScreen = props => {
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

  const [saveFile, setSaveFile] = React.useState({});
  const [fileLoading, setFileLoading] = React.useState(false);
  const [visible, setIsVisible] = React.useState(false);
  const [imageUri, setImageUri] = React.useState('');

  const itemSeparatorComponent = () => {
    return <View style={{paddingVertical: mvs(5)}}></View>;
  };

  const onPressAttachment = async () => {
    try {
      setFileLoading(true);
      const res = await UTILS._returnImageGallery();
      console.log(res);
      if (res) {
        const selectedFile = res;
        setSaveFile({
          uri: selectedFile.uri,
          name: selectedFile.name,
          type: selectedFile?.type,
        });

        console.log('Selected Image:', selectedFile.name);
      } else {
        // Handle the case where no image was selected.
        console.log('No image selected.');
      }
    } catch (error) {
      console.log('error=>>', error);
    } finally {
      setFileLoading(false);
    }
  };
  const handleImagePress = uri => {
    setImageUri(uri);
    setIsVisible(true);
  };

  const images = [
    {
      uri: imageUri, // The URI of the image you want to display
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1,paddingBottom:mvs(100)}}>
        {/* <Header1x2x
          back={true}
          title={'Patients'}
          // style={{backgroundColor: colors.transparent}}
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
          <Medium label={'Upload a new CSV file'} color={colors.black} fontSize={mvs(20)} />
          <View style={{paddingVertical:mvs(30)}}>
          <TouchableOpacity

                            style={styles.uploadphotoview}
                            onPress={() => onPressAttachment()}>
                            { saveFile?.uri ? (
                              <>
                                <Row style={{justifyContent: 'space-between'}}>
                                  <TouchableOpacity
                                    style={{width: mvs(150), height: mvs(150)}}
                                    onPress={() =>
                                      handleImagePress(
                            
                                          saveFile?.uri,
                                      )
                                    }>
                                    <Image
                                      // label={
                                      //   saveFile?.uri || documentList?.license_photo
                                      // }
                                      source={{
                                        uri:
                                          saveFile?.uri ||
                                          'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg',
                                      }}
                                      resizeMode="cover"
                                      style={{width: mvs(150), height: mvs(150)}}
                                      // color={colors.primary}
                                      // fontSize={mvs(14)}
                                      // style={styles.filenametext}
                                    />
                                  </TouchableOpacity>

                                  <View
                                    style={{
                                      // marginLeft: mvs(60),
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      borderWidth: 1,
                                      borderStyle: 'dashed',
                                      padding: mvs(5),
                                      borderRadius: mvs(5),
                                      borderColor: colors.bluecolor,
                                      paddingVertical: mvs(8),
                                    }}>
                                    <Medium
                                      label={'Change Photo'}
                                      color={colors.bluecolor}
                                    />
                                  </View>
                                </Row>
                              </>
                            ) : (
                              <Row style={{justifyContent: 'center',alignItems:"center",alignSelf:"center"}}>
                                <FileSVG width={mvs(25)} height={mvs(25)} />
                                <Bold
                                  label={'Upload CSV'}
                                  color={colors.black}
                                  fontSize={mvs(22)}
                                  style={{marginLeft: mvs(10),fontWeight:'900'}}
                                />
                              </Row>
                            )}
                          </TouchableOpacity>

                          </View>


            
            
           
          </View>
        </View>
      </ScrollView>
      <ImageView
        images={images}
        imageIndex={0}
        visible={visible}
        onRequestClose={() => setIsVisible(false)}
      />
    </View>
  );
};
export default ImportPatientScreen;
