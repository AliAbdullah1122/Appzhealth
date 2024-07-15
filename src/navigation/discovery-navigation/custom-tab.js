import React, { useRef } from 'react';
import { ScrollView, View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from 'config/colors';
import { mvs } from 'config/metrices';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const CustomTabBar = ({ state, descriptors, navigation, position }) => {
  const scrollViewRef = useRef(null);

  const scrollToTab = (index) => {
    scrollViewRef.current?.scrollTo({
      x: index * mvs(200), // Adjust the scroll position
      animated: true,
    });
  };

  const isOnFirstTab = state.index === 0;
  const isOnLastTab = state.index === state.routes.length - 1;

  return (
    <View style={styles.tabContainer}>
      {!isOnFirstTab && (
        <TouchableOpacity
          style={styles.arrow}
          onPress={() => scrollViewRef.current?.scrollTo({ x: 0, animated: true })}
        >
<MaterialIcons name='arrow-back-ios' color={colors.primary} />
          {/* <Text style={styles.arrowText}>{'<'}</Text> */}
        </TouchableOpacity>
      )}
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tabItem}
              key={route.key}
            >
              {typeof label === 'function' ? label({ focused: isFocused }) : label}
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      {!isOnLastTab && (
        <TouchableOpacity
          style={styles.arrow}
          onPress={() => scrollToTab(state.routes.length - 1)}
        >
          <MaterialIcons name='arrow-forward-ios' color={colors.primary} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  arrow: {
    width: mvs(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowText: {
    fontSize: mvs(20),
    color: colors.bluecolor,
  },
  scrollView: {
    flexGrow: 1,
  },
  tabItem: {
    paddingHorizontal: mvs(10),
    paddingVertical: mvs(15),
  },
});

export default CustomTabBar;
