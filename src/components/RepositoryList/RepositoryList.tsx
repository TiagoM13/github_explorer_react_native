import React from 'react';
import { useQuery } from 'react-query';
import { FlatList, View, Text } from 'react-native';

import { RepositoryItem } from '..';
import { getAllRepositories } from '@src/utils';

import { styles } from './styles';

export const RepositoryList = () => {
  const { data, isLoading } = useQuery('repos', getAllRepositories);

  if (isLoading) {
    return (
      <View style={styles.loading}>
        <Text style={styles.textLoad}>Loading repositories...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Repositórios</Text>

      <FlatList
        data={data}
        keyExtractor={item => item.name}
        renderItem={({ item }) => <RepositoryItem repository={item} />}
        contentContainerStyle={styles.contentStyle}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
