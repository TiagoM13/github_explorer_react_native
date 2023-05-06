import { View, ActivityIndicator } from 'react-native';

import { styles } from './styles';

export const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#FFF" />
    </View>
  );
};
