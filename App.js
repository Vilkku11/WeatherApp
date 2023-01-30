import {React, useState} from 'react';
import {View, Button, Text} from 'react-native';

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
    <View style={{flex: 1, flexDirection: 'column'}}>
      <Header style={{height: '5%'}} city={weatherData.city}></Header>
      <Text>{TEST}</Text>
      <View style={{flex: 3}}>
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
export default App;
