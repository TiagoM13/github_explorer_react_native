import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { useRepositories } from '../../hooks/repositories';
import { RepositoryItem } from '../RepositoryItem/RepositoryItem';

import { styles } from './styles';

const data = [
  {
    id: '1',
    title: 'Web Server',
    description: 'Application React/Node',
  },
  {
    id: '2',
    title: 'Shopp App',
    description: 'Application React/Node',
  },
  {
    id: '3',
    title: 'Landing Page',
    description: 'Application React/Node',
  },
  {
    id: '4',
    title: 'Services Back-End',
    description: 'Application React/Node',
  },
  {
    id: '5',
    title: 'NLW Setup',
    description: 'Application React/Node',
  },
];

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
