import {React, useState} from 'react';
import {View, StyleSheet} from 'react-native';

import WeatherInfo from '../components/WeatherInfo';
import Header from '../components/Header';
import WeatherData from '../components/WeatherFetch';

const CurrentWeatherPage = () => {
  const [weatherData, setWeatherData] = useState({
    city: 'Tampere',
    description: 'Cloudy',
    temperature: -6,
    windSpeed: 4,
  });

  return (
    <View style={styles.screenContainer}>
      <Header style={styles.header} city={weatherData.city}></Header>
      <View style={styles.weatherInfoView}>
        <WeatherInfo
          temperature={weatherData.temperature}
          wind={weatherData.windSpeed}
          description={weatherData.description}
        />
      </View>
      <WeatherData setWeatherData={setWeatherData}></WeatherData>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    flexFirection: 'column',
  },
  header: {
    height: '5%',
  },
  weatherInfoView: {
    flex: 3,
  },
});

export default CurrentWeatherPage;
