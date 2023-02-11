import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Header } from '../components/Header/Header';
import { RepositoryList } from '../components/RepositoryList/RepositoryList';

import { styles } from './styles';

const Home = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Header />
        <RepositoryList />
      </SafeAreaView>
    </View>
  );
}

export default Home;
