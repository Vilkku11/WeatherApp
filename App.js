import {React, useState} from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';

import WeatherInfo from './components/WeatherInfo';
import Header from './components/Header';
import {TEST} from '@env';

const App = () => {
  const [weatherData, setWeatherData] = useState({
    city: 'Tampere',
    description: 'Cloudy',
    temperature: -6,
    windSpeed: 4,
  });

  const getWeatherData = () => {
    setWeatherData({
      city: 'Helsinki',
      description: 'Sunny',
      temperature: 12,
      windSpeed: 2,
    });
  };

  return (
    <View style={styles.screenContainer}>
      <Header style={styles.header} city={weatherData.city}></Header>
      <Text>{TEST}</Text>
      <View style={styles.weatherInfoView}>
        <WeatherInfo
          temperature={weatherData.temperature}
          wind={weatherData.windSpeed}
          description={weatherData.description}
        />
      </View>
      <Button
        style={{flex: 3}}
        title="Update"
        onPress={getWeatherData}></Button>
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
