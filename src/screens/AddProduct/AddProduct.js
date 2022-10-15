import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Formik from 'formik';
import RenderSelect from '../../components/RenderSelect';

const AddProduct = () => {
  const cityRef = React.useRef();

  return (
    <View style={styles.mainContainer}>
      <View style={styles.title}>
        <Ionicons name="chevron-back" size={24} color="#000" />
        <Text style={styles.headingText}>Add Product</Text>
      </View>
      <Formik
        validateOnBlur={false}
        validateOnChange={false}
        initialValues={{city: ''}}
        // validationSchema={schema}
        onSubmit={() => console.log('submited')}>
        {({
          handleChange,
          setFieldValue,
          values,
          handleSubmit,
          handleBlur,
          isValid,
          errors,
        }) => (
          <View style={styles.container}>
            <View style={styles.inputsContainer}>
              {/* <RenderSelect
                name="project_state"
                label={t('label_project_state')}
                ref={stateRef}
                containerStyles={styles.input}
                value={values.project_state}
                options={stateOptions}
                onSelect={value => {
                  setFieldValue('project_state', value);
                  getCities({state_id: value});
                }}
                error={errors.project_state}
              /> */}
              <RenderSelect
                name="project_city"
                label={'city'}
                ref={cityRef}
                options={[
                  {label: 'name', value: 'name'},
                  {label: 'world', value: 'world'},
                ]}
                containerStyles={styles.input}
                value={values.project_city}
                onSelect={value => setFieldValue('city', value)}
                // onSubmitEditing={() => pinRef?.current.focus()}
                error={errors.project_city}
              />
            </View>
            {/* <ActionButtons
              style={styles.actionContainer}
              cancelLabel="Back"
              submitLabel="Save"
              onCancel={navigation.goBack}
              onSubmit={handleDebounce(handleSubmit)}
            /> */}
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 14,
  },
  mainContainer: {
    marginHorizontal: 20,
  },
  headingText: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
  },
});

export default AddProduct;
