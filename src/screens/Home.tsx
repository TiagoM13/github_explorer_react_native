import { View } from 'react-native';

import { Header } from '../components/Header/Header';
import { RepositoryList } from '../components/RepositoryList/RepositoryList';

const Home = () => {
  return (
    <View>
      <Header />
      <RepositoryList />
    </View>
  );
}

export default Home;