import {View, Text, Button} from 'react-native';

const WeatherForecastPage = ({navigation}) => {
  const navigateToSettingsPage = () => {
    navigation.navigate('Settings');
  };
  return (
    <View>
      <Text>IT*S a test does this thing workk!!!?</Text>
      <Button title="Open settings" onPress={() => navigateToSettingsPage()} />
    </View>
  );
};

export default WeatherForecastPage;
