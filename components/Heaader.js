import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({city}) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.cityTextStyle}>{city}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cityTextStyle: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
  viewStyle: {
    backgroundColor: 'lightblue',
  },
});

export default Header;
