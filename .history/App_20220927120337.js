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

import {
  DarkTheme,
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';

import Geolocation from '@react-native-community/geolocation';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {
  StateDropdown,
  RegionDropdown,
} from 'react-indian-state-region-selector';

import json from 'country-region-data/data.json';
import data from './cities.json';

const theme = {
  ...DarkTheme,
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  console.log('-----> data', data.Gujarat);
  console.log('-----> object.keys', Object.keys(data));

  return (
    <PaperProvider theme={DarkTheme}>
      <SafeAreaView>
        <Text>hello</Text>
      </SafeAreaView>
    </PaperProvider>
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
