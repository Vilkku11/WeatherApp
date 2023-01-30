import {React, useState} from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';

import WeatherInfo from './components/WeatherInfo';
import Header from './components/Header';
import WeatherData from './components/WeatherData';
import {WEATHER_API} from '@env';

const App = () => {
  const [weatherData, setWeatherData] = useState({
    city: 'Tampere',
    description: 'Cloudy',
    temperature: -6,
    windSpeed: 4,
  });
  const url =
    'https://api.openweathermap.org/data/2.5/weather?q=Tampere&appid=' +
    WEATHER_API;
  const getWeatherData = () => {
    /*setWeatherData({
      city: 'Helsinki',
      description: 'Sunny',
      temperature: 12,
      windSpeed: 2,*/

    const url =
      'https://api.openweathermap.org/data/2.5/weather?q=Tampere&appid=' +
      WEATHER_API;
  };

  return (
    <View style={styles.screenContainer}>
      <Header style={styles.header} city={weatherData.city}></Header>
      <Text>{url}</Text>
      <View style={styles.weatherInfoView}>
        <WeatherInfo
          temperature={weatherData.temperature}
          wind={weatherData.windSpeed}
          description={weatherData.description}
        />
      </View>
      <WeatherData></WeatherData>
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

export default App;
