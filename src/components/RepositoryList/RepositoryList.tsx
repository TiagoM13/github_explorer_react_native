import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { useRepositories } from '../../hooks/repositories';
import { RepositoryItem } from '../RepositoryItem/RepositoryItem';

import { styles } from './styles';

export const RepositoryList = () => {
  const { repositories } = useRepositories();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Repositórios</Text>

      <FlatList
        data={repositories}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <RepositoryItem repository={item} />
        )}
        contentContainerStyle={styles.contentStyle}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
