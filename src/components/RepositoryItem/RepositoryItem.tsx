import { View, Text } from 'react-native';

import { styles } from './styles';

interface ItemProps {
  item: string;
  description?: string;
}

export const RepositoryItem = (props: ItemProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {props.item}
      </Text>
      <Text style={styles.description}>
        {props.description}
      </Text>
    </View>
  );
}
