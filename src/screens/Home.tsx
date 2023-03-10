import { SafeAreaView } from 'react-native-safe-area-context';

import { Header } from '../components/Header/Header';
import { RepositoryList } from '../components/RepositoryList/RepositoryList';

import { styles } from './styles';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <RepositoryList />
    </SafeAreaView>
  );
}

export default Home;
