import React from 'react';
import {View} from 'react-native';

import WeatherInfo from './components/WeatherInfo';

const App = () => {
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <View style={{flex: 1, backgroundColor: 'red'}}></View>
      <View style={{flex: 5}}>
        <WeatherInfo />
      </View>
      <View style={{flex: 2, backgroundColor: 'green'}}></View>
    </View>
  );
};
export default App;
