import {React, useState} from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CurrentWeatherPage from './pages/CurrentWeatherPage';
import WeatherForecastPage from './pages/WeatherForecastPage';
import SettingsPage from './pages/SettingsPage';

const stack = createNativeStackNavigator();
const tab = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <tab.Navigator>
        <tab.Screen name="CurrentWeather" component={CurrentWeatherPage} />
        <tab.Screen name="WeatherForecast" component={WeatherForecastPage} />
        <tab.Screen name="Settings" component={SettingsPage} />
      </tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
