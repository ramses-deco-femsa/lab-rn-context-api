import {Text} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet, View} from 'react-native';

export const Header = () => (
  <View style={styles.container}>
    <Text category="h1">LAB Context</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
