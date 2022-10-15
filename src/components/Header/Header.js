import React from 'react';
import {View, Image} from 'react-native';
import {styles} from './styles.js';
import Logo from '../../assets/logo.png';

const Header = props => {
  const {style} = props;

  return (
    <View style={[styles.container, style]}>
      <Image source={Logo} />
    </View>
  );
};

export default Header;
