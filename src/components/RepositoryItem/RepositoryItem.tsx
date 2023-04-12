import { View, Text, TouchableOpacity, Linking } from "react-native";

import { IRespositoryItem } from "@src/interfaces/repositoryItem";

import { styles } from "./styles";

export const RepositoryItem = ({ repository }: IRespositoryItem) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{repository.name}</Text>
      <Text style={styles.description}>{repository.description}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => Linking.openURL(repository.html_url)}
        activeOpacity={0.7}
      >
        <Text style={styles.textButton}>Acessar repo</Text>
      </TouchableOpacity>
    </View>
  );
};
