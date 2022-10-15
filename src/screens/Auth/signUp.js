import React from 'react';
import {View, Button, Image, ScrollView} from 'react-native';
import {Text} from 'react-native-paper';
import RenderInput from '../../components/RenderInput/RenderInput';
import {Formik} from 'formik';
import Logo from '../../assets/logo.png';
import * as Yup from 'yup';
import Header from '../../components/Header/Header';

const schema = Yup.object().shape({
  email: Yup.string().email('Enter a valid email Id').required('Required'),
  phone: Yup.number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(1000000000, 'Enter a valid Number.')
    .max(9999999999, 'Enter a valid Number.')
    .required('A phone number is required'),
  name: Yup.string().min(3).required('Required'),
  password: Yup.string()
    .required('Password is required.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match',
  ),
});

const SignUp = () => {
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
        initialValues={{
          phone: '',
          password: '',
          name: '',
          email: '',
          confirmPassword: '',
        }}
        validateOnBlur={false}
        validateOnChange={false}
        validationSchema={schema}
        onSubmit={values => {
          console.log('-----> values', values);
        }}>
        {({values, errors, handleChange, handleSubmit, touched}) => (
          <View style={{flexGrow: 1}}>
            <ScrollView style={{flex: 1}}>
              <View style={{marginBottom: 20}}>
                <Text style={{marginBottom: 8}}>Name*</Text>

                <RenderInput
                  placeholder="Name"
                  name="name"
                  value={values.name}
                  onChange={handleChange('name')}
                />
                {errors.name && (
                  <Text style={{fontSize: 12, color: 'red'}}>
                    {errors.name}
                  </Text>
                )}
                {console.log('-----> touched', touched)}
              </View>
              <View style={{marginBottom: 20}}>
                <Text style={{marginBottom: 8}}>Email*</Text>

                <RenderInput
                  placeholder="Email"
                  name="email"
                  value={values.email}
                  onChange={handleChange('email')}
                />
                {errors.email && (
                  <Text style={{fontSize: 12, color: 'red'}}>
                    {errors.email}
                  </Text>
                )}
              </View>
              <View style={{marginBottom: 20}}>
                <Text style={{marginBottom: 8}}>Mobile Number*</Text>

                <RenderInput
                  placeholder="Mobile Number"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange('phone')}
                />
                {errors.phone && (
                  <Text style={{fontSize: 12, color: 'red'}}>
                    {errors.phone}
                  </Text>
                )}
              </View>
              <View style={{marginBottom: 20}}>
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
              <View>
                <Text style={{marginBottom: 8}}>Re-enter Password*</Text>

                <RenderInput
                  placeholder="Re-enter Password"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange('confirmPassword')}
                />
                {errors.confirmPassword && (
                  <Text style={{fontSize: 12, color: 'red'}}>
                    {errors.confirmPassword}
                  </Text>
                )}
              </View>
            </ScrollView>

            <View
              style={{
                marginBottom: 22,
                marginTop: 22,
              }}>
              <Button
                onPress={handleSubmit}
                title="Log In"
                color="#F79E0E"
                // color="linear-gradient(to right, #FF9B3E, #F79E0E)"
                // color="linear-gradient(#FF9B3E, #F79E0E)"
              />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default SignUp;
