import React from 'react';
import {View, Button, Image, ScrollView} from 'react-native';
import {Text} from 'react-native-paper';
import RenderInput from '../../components/RenderInput/RenderInput';
import {Formik} from 'formik';
import Logo from '../../assets/logo.png';
import * as Yup from 'yup';
import Header from '../../components/Header/Header';

const schema = Yup.object().shape({
  phone: Yup.number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(1000000000, 'Enter a valid Number.')
    .max(9999999999, 'Enter a valid Number.')
    .required('A phone number is required'),
  password: Yup.string()
    .required('Password is required.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});

const Login = () => {
  return (
    <View style={{flexGrow: 1, paddingLeft: 22, paddingRight: 22}}>
      <Header />
      <View style={{marginBottom: 20}}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
          }}>
          Welcome
        </Text>
      </View>
      <Formik
        initialValues={{phone: '', password: ''}}
        validateOnBlur={false}
        validateOnChange={false}
        validationSchema={schema}
        onSubmit={values => {
          console.log('-----> values', values);
        }}>
        {({values, errors, handleChange, handleSubmit}) => (
          <View style={{flexGrow: 1}}>
            <View style={{marginBottom: 20}}>
              <Text style={{marginBottom: 8}}>Mobile Number*</Text>

              <RenderInput
                placeholder="Phone Number"
                name="phone"
                value={values.phone}
                onChange={handleChange('phone')}
              />
              {errors.phone && (
                <Text style={{fontSize: 12, color: 'red'}}>{errors.phone}</Text>
              )}
            </View>
            <View>
              <Text style={{marginBottom: 8}}>Password*</Text>

              <RenderInput
                placeholder="Password"
                name="password"
                value={values.password}
                onChange={handleChange('password')}
              />
              {errors.password && (
                <Text style={{fontSize: 12, color: 'red'}}>
                  {errors.password}
                </Text>
              )}
            </View>

            <View style={{position: 'absolute', bottom: 22, left: 0, right: 0}}>
              <Button onPress={handleSubmit} title="Log In" color="#F79E0E" />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Login;
