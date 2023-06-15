import { SafeAreaView } from 'react-native-safe-area-context';

import { Header, RepositoryList } from '@app/components';

import { styles } from './styles';

export const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <RepositoryList />
    </SafeAreaView>
  );
};
