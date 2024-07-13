import {CrossModal} from 'assets/icons';
import {ModalWrapper} from 'components/atoms/modal-wrapper';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import {t} from 'i18next';
import React from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Medium from 'typography/medium-text';
import PrimaryInput, {
  InputWithIcon,
  PrimaryPhoneInput,
} from 'components/atoms/inputs';
const PatientManagemetDropdownModal = ({
  style = {},
  value,
  visible = false,
  onClose = item => {},
  onChangeText,
  items = [],
}) => {
  const [search, setSearch] = React.useState('');

  // Function to handle search input
  const handleSearch = (text) => {
    setSearch(text);
  };

  // Filtered items based on search input
  const filteredItems = items.filter((item) =>
    item.id.includes(search)
  );
  
  return (
    <ModalWrapper
      onBackdropPress={() => onClose()}
      onBackButtonPress={() => onClose()}
      visible={visible}
      style={[styles.contentContainerStyle, style]}>
      <View style={styles.container}>
        <View style={styles.header} />
        <TouchableOpacity onPress={() => onClose()} style={styles.cross}>
          <CrossModal height={mvs(25)} width={mvs(25)} />
        </TouchableOpacity>
        <Medium
          numberOfLines={2}
          style={styles.pick}
          label={'Serach and Select'}
          color={colors.black}
        />
        <View style={{paddingVertical:mvs(0),marginTop:mvs(20)}}>
        <PrimaryInput
                    keyboardType={'email-address'}
                    placeholder={t('Search')}
          value={search}
          onChangeText={handleSearch}
          containerStyle={{
            width:'90%',
            alignSelf:"center",
            borderWidth:1,
            borderColor:colors.primary,
            borderRadius:mvs(10),
          }}
                  
                  />
                  </View>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            paddingHorizontal: mvs(20),
            paddingTop: mvs(10),
          }}>
          {filteredItems?.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => onChangeText(item?.id, onClose())}
                style={styles.button}>
                <Medium
                  label={
                    item?.title ||
                    item?.name ||
                    item?.type ||
                    item?.id ||
                    item?.vehicle_type
                  }
                  color={colors.black}
                  style={{fontSize: mvs(16)}}
                />
                <Icon
                  name={
                    item?.id === value
                      ? 'radio-button-checked'
                      : 'radio-button-unchecked'
                  }
                  size={mvs(20)}
                />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </ModalWrapper>
  );
};
export default PatientManagemetDropdownModal;
const styles = StyleSheet.create({
  contentContainerStyle: {
    width: '100%',
    backgroundColor: colors.transparent,
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  container: {
    maxHeight: mvs(572),
    minHeight: mvs(200),
    backgroundColor: colors.white,
    paddingTop: mvs(15),
    borderTopRightRadius: mvs(20),
    borderTopLeftRadius: mvs(20),
  },
  header: {
    height: mvs(3),
    borderRadius: mvs(5),
    width: mvs(104),
    alignSelf: 'center',
    backgroundColor: colors.lightGray,
    marginBottom: mvs(20),
  },
  pick: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: mvs(20),
  },
  button: {
    // paddingHorizontal: mvs(30),
    marginBottom: mvs(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.7,
  },
  cross: {
    padding: mvs(18),
    alignSelf: 'flex-end',
    position: 'absolute',
    // backgroundColor: 'red',
  },
});
