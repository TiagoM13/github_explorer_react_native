import { View, Text } from 'react-native';

import { IRespositoryItem } from '@src/interfaces/repositoryItem';

import { styles } from './styles';

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
