import {React, useState} from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CurrentWeatherPage from './pages/CurrentWeatherPage';
import WeatherForecastPage from './pages/WeatherForecastPage';
import SettingsPage from './pages/SettingsPage';

const stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="CurrentWeather" component={CurrentWeatherPage} />
        <stack.Screen name="WeatherForecast" component={WeatherForecastPage} />
        <stack.Screen name="Settings" component={SettingsPage} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
