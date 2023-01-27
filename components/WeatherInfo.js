import React from 'react';
import {View, Text} from 'react-native';

const WeatherInfo = (temperature, wind, description, weatherIcon) => {
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <View style={{flex: 1, backgroundColor: 'lightblue'}} />
      <View style={{flex: 3, flexDirection: 'row'}}>
        <View style={{flex: 1, backgroundColor: 'orange'}} />
        <View style={{flex: 1, flexDirection: 'column'}}>
          <Text style={{flex: 1, fontSize: 25, textAlign: 'center'}}>-6C</Text>
          <View style={{flex: 1, backgroundColor: 'blue'}} />
        </View>
      </View>
    </View>
  );
};
export default WeatherInfo;
