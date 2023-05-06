import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

export const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Github Explorer</Text>
    </View>
  );
};
