import {React, useState} from 'react';
import {View, Button, StyleSheet, Text} from 'react-native';
import {WEATHER_API} from '@env';

const WeatherData = ({setWeatherData}) => {
  const [testi, setTesti] = useState('JOU');
  const city = 'Tampere';
  const url =
    'https://api.openweathermap.org/data/2.5/weather?q=' +
    city +
    '&appid=' +
    WEATHER_API +
    '&units=metric';
  const getWeatherData = async () => {
    const response = await fetch(url);
    const answer = await response.json();

    if (answer) {
      setWeatherData({
        city: 'Tampere',
        description: 'Cloudy',
        temperature: answer.main.temp,
        windSpeed: answer.wind.speed,
      });
    }
    setTesti(answer.main.temp);
  };
  return (
    <View>
      <Text>{testi}</Text>
      <Button
        style={styles.fetchButton}
        title="Update"
        onPress={getWeatherData}></Button>
    </View>
  );
};

const styles = StyleSheet.create({});

export default WeatherData;
