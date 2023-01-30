import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const WeatherInfo = ({temperature, wind, description, weatherIcon}) => {
  return (
    <View style={styles.wholeColumn}>
      <View style={styles.bluebox} />
      <View style={styles.row}>
        <View style={styles.leftBox} />
        <View style={styles.wholeColumn}>
          <Text style={styles.temperature}>{temperature}C</Text>
          <Text style={styles.wind}>{wind} m/s</Text>
        </View>
      </View>
    </View>
  );
};
// Todo: fix stylesheet names when adding final content!
const styles = StyleSheet.create({
  wholeColumn: {
    flex: 1,
    flexDirection: 'column',
  },
  bluebox: {
    flex: 1,
    backgroundColor: 'blue',
  },
  row: {
    flex: 3,
    flexDirection: 'row',
  },
  leftBox: {
    flex: 1,
    backgroundColor: 'orange',
  },
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
