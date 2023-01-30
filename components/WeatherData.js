import {React} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {WEATHER_API} from '@env';

const WeatherData = () => {
  const getWeatherData = () => {};
  return (
    <View>
      <Button
        style={styles.fetchButton}
        title="Update"
        onPress={getWeatherData}></Button>
    </View>
  );
};

const styles = StyleSheet.create({});

export default WeatherData;
