import React from 'react';
import { FlatList, Text, View } from 'react-native';
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
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <RepositoryItem item={item.title} description={item.description} />
        )}
      />
    </View>
  );
}
