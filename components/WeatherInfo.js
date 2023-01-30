import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const WeatherInfo = ({temperature, wind, description, weatherIcon}) => {
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <View style={{flex: 1, backgroundColor: 'lightblue'}} />
      <View style={{flex: 3, flexDirection: 'row'}}>
        <View style={{flex: 1, backgroundColor: 'orange'}} />
        <View style={{flex: 1, flexDirection: 'column'}}>
          <Text style={styles.temperature}>{temperature}C</Text>
          <Text style={styles.wind}>{wind} m/s</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  temperature: {
    flex: 1,
    fontSize: 25,
    textAlign: 'center',
  },
  wind: {
    flex: 1,
    fontSize: 25,
    textAlign: 'center',
  },
});
export default WeatherInfo;
