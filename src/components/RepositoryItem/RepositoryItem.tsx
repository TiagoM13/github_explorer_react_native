import { View, Text } from 'react-native';

import { styles } from './styles';

export interface IRespositoryItem {
  repository: {
    name: string;
    description: string;
    html_url: string;
  };
}

export const RepositoryItem = ({ repository }: IRespositoryItem) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {repository.name}
      </Text>
      <Text style={styles.description}>
        {repository.description}
      </Text>
    </View>
  );
}
