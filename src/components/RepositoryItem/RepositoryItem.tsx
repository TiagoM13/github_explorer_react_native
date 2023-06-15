import { Text, TouchableOpacity, Linking } from 'react-native';

import { IRespositoryItem } from '@app/interfaces';

import { styles } from './styles';

export const RepositoryItem = ({ repository }: IRespositoryItem) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => Linking.openURL(repository.html_url)}
      activeOpacity={0.7}
    >
      <Text style={styles.text}>{repository.name}</Text>
      <Text style={styles.description}>{repository.description}</Text>
    </TouchableOpacity>
  );
};
