import { View, StatusBar } from 'react-native';
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_900Black
} from '@expo-google-fonts/inter';

import Home from './src/screens/Home';

import { Loading } from './src/components/Loading/Loading';

import { styles } from './src/styles/global';

export default function App() {
  const [fontLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_900Black
  })

  return (
    <View style={styles.container}>

      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="#000"
      />

      {fontLoaded ? <Home /> : <Loading />}

    </View>
  );
}
