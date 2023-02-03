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
      <Stack.Navigator>
        <Stack.Screen name="Current weather" compnent={CurrentWeatherPage} />
        <Stack.Screen name="Weather forecast" component={WeatherForecastPage} />
        <Stack.Screen name="Settings" compnent={SettingsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
