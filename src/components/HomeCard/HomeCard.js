import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Product from '../../assets/product.png';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeCard = () => {
  return (
    <TouchableOpacity
      onPress={() => {
        console.log('whole pressed');
      }}
      style={styles.mainContainer}>
      <View>
        <Image source={Product} resizeMode="cover" style={styles.image} />
        <TouchableOpacity
          onPress={() => console.log('Delete pressed')}
          style={styles.deleteIcon}>
          <MaterialCommunityIcons name="delete" color="#FF3131" size={24} />
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}>
        <View>
          <Text numberOfLines={2} style={styles.title}>
            Dummy Title
          </Text>
          <Text style={styles.price}>Rs 500</Text>
        </View>
        <TouchableOpacity onPress={() => console.log('Heart pressed')}>
          <Fontisto name="heart-alt" size={20} color="#000" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 20,
  },
  mainContainer: {
    backgroundColor: '#fff',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.6,
    shadowRadius: 10,
    borderRadius: 15,
    paddingBottom: 8,
  },
  deleteIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#fff',
    padding: 4,
    borderRadius: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  price: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
  },
  bottomContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
});

export default HomeCard;
