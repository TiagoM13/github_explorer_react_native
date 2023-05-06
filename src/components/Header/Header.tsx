import React from 'react';
import { Text, View } from 'react-native';
import { GithubLogo } from 'phosphor-react-native';

import { styles } from './styles';

export const Header = () => {
  return (
    <View style={styles.container}>
      <GithubLogo size={26} weight="bold" color="white" />
      <Text style={styles.text}>Github Explorer</Text>
    </View>
  );
};
