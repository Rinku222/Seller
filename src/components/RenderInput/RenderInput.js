import React from 'react';
import {View, TextInput} from 'react-native';
import {styles} from './styles.js';

const RenderInput = props => {
  const {placeholder, value, onChange, style} = props;

  return (
    <View>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChange}
        value={value}
        style={[styles.input, style]}
      />
    </View>
  );
};

export default RenderInput;
