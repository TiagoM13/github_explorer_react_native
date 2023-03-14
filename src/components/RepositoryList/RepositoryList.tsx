import React from 'react';
import { FlatList, View, Text, ActivityIndicator } from 'react-native';
import { useRepositories } from '@src/hooks/repositories';
import { RepositoryItem } from '@src/components/RepositoryItem/RepositoryItem';

import { styles } from './styles';

export const RepositoryList = () => {
  const { load, repositories } = useRepositories();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Repositórios</Text>

      {
        load ? (
          <View style={styles.loading}>
            <Text style={styles.textLoad}>
              Loading repositories...
            </Text>
          </View>
        ) : (
          <FlatList
            data={repositories}
            keyExtractor={item => item.name}
            renderItem={({ item }) => (
              <RepositoryItem repository={item} />
            )}
            contentContainerStyle={styles.contentStyle}
            showsVerticalScrollIndicator={false}
          />
        )
      }
    </View>
  );
}
