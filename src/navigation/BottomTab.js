import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Ionicons from 'react-native-vector-icons/Ionicons';

const ICONS = {
  home: props => <Feather {...props} name="home" size={30} />,
  chat: props => <Ionicons {...props} name="chatbubbles-outline" size={30} />,
  wishlist: props => (
    <MaterialCommunityIcons {...props} name="cards-heart-outline" size={30} />
  ),
  profile: props => <AntDesign {...props} name="user" size={30} />,
};

function BottomTab({state, descriptors, navigation}) {
  const tabItems = state.routes.map((route, index) => {
    const {options} = descriptors[route.key];

    const {name} = route;

    const isFocused = state.index === index;

    const onPress = () => {
      const event = navigation.emit({
        type: 'tabPress',
        target: route.key,
        canPreventDefault: true,
      });

      if (!isFocused && !event.defaultPrevented) {
        navigation.navigate({name: route.name, merge: true});
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
        accessibilityLabel={options.tabBarAccessibilityLabel}
        accessibilityRole="button"
        accessibilityState={isFocused ? {selected: true} : {}}
        key={route.name}
        style={styles.tabItemsContainer}
        testID={options.tabBarTestID}
        onLongPress={onLongPress}
        onPress={onPress}>
        <View style={[styles.tabItemsIcons]}>
          {ICONS[name]({
            color: isFocused ? '#F79E0E' : '#AFAFAF',
          })}
          <Text style={isFocused ? styles.focussed : styles.unFocussed}>
            {name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  });

  // const floatingTab = (
  //   <TouchableOpacity
  //     key="key"
  //     style={styles.floatingTabContainer}
  //     onPress={() => navigation.navigate('video')}>
  //     <View style={styles.floatingTabIcon}>
  //       <Ionicons color="red" name="ios-play" size={30} />
  //     </View>
  //   </TouchableOpacity>
  // );

  // tabItems.splice(2, 0, floatingTab);

  return (
    <View style={styles.container}>
      <View style={styles.tabItems}>{tabItems}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    elevation: 4,
    borderTopWidth: 0,
    shadowOpacity: 0.4,
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
  focussed: {
    color: '#F79E0E',
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  unFocussed: {
    textTransform: 'capitalize',
    fontWeight: 'normal',
    color: '#AFAFAF',
  },
  tabItems: {
    flexDirection: 'row',
    paddingVertical: 20,
  },
  floatingTabContainer: {
    marginTop: -35,
  },
  floatingTabIcon: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 50,
  },
  tabItemsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabItemsIcons: {
    borderRadius: 50,
    padding: 5,
    alignItems: 'center',
  },
});

export default BottomTab;
