import React, {useState} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import Header from '../../components/Header/Header';
import HomeCard from '../../components/HomeCard/HomeCard';
import RenderInput from '../../components/RenderInput/RenderInput';
import LinearGradient from 'react-native-linear-gradient';

const DATA = [1, 2, 3, 4, 5, 6];

const Home = () => {
  const [search, setSearch] = useState('');

  const renderItem = ({item}) => <HomeCard title={item} />;

  return (
    <View>
      <Header style={{marginBottom: 5, marginTop: 10}} />
      <LinearGradient colors={['#F79E0E', '#EEBD23']} style={styles.container}>
        <RenderInput
          placeholder="Search"
          value={search}
          onChange={e => {
            setSearch(e);
          }}
          style={{marginBottom: 20}}
        />
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  separator: {
    marginBottom: 20,
  },
  container: {
    paddingHorizontal: 20,
    // backgroundColor: '#D49973',
    paddingTop: 20,
  },
});

export default Home;
