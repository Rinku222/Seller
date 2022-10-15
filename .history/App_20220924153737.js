import React, {useEffect} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Geolocation from '@react-native-community/geolocation';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {
  StateDropdown,
  RegionDropdown,
} from 'react-indian-state-region-selector';

import json from 'country-region-data/data.json';
import data from './cities.json';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  console.log(
    '----->json ',
    json.filter(i => i.countryName === 'India')[0].regions,
  );

  console.log('-----> data', data);

  return (
    <SafeAreaView>
      <Text>hello</Text>
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log('data', data);
          console.log('details', details);
        }}
        query={{
          key: 'AIzaSyB2fGr3NIMsTJW27JeGAuWV9t7BzOsy_74',
          language: 'en',
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
