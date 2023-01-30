import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import CityList from './CityList';

const WeatherInfo = ({temperature, wind, description, weatherIcon}) => {
  return (
    <View style={styles.wholeColumn}>
      <View style={styles.bluebox}>
        <CityList></CityList>
      </View>
      <View style={styles.row}>
        <View style={styles.leftBox}>
          <Text style={styles.text}>{description}</Text>
          <Text style={styles.text}>second</Text>
        </View>
        <View style={styles.wholeColumn}>
          <Text style={styles.text}>{temperature}C</Text>
          <Text style={styles.text}>{wind} m/s</Text>
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
    flexDirection: 'column',
  },
  text: {
    flex: 1,
    fontSize: 25,
    textAlign: 'center',
  },
});
export default WeatherInfo;
