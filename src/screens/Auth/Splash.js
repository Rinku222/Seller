import React from 'react';
import Header from '../../components/Header/Header';
import {View, Button} from 'react-native';

const Splash = props => {
  const {navigation} = props;

  return (
    <View style={{flexGrow: 1}}>
      <Header />

      <View
        style={{
          marginLeft: 22,
          marginRight: 22,
          flexGrow: 1,
          justifyContent: 'center',
        }}>
        <View style={{marginBottom: 30}}>
          <Button
            onPress={() => {
              navigation.navigate('Login');
              console.log('-----> login');
            }}
            title="Log In"
            color="#F79E0E"
          />
        </View>

        <View>
          <Button
            onPress={() => navigation.navigate('signUp')}
            title="Sign Up"
            color="#F79E0E"
          />
        </View>
      </View>
    </View>
  );
};

export default Splash;
