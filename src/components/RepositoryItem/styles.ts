import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#090909",
    width: "100%",
    paddingVertical: 24,
    paddingHorizontal: 16,
    marginBottom: 16,
    borderRadius: 10,
    justifyContent: "space-between",
  },
  text: {
    color: "#F31F5C",
    fontSize: 16,
    fontFamily: "Inter_600SemiBold",
    marginBottom: 10,
  },
  description: {
    color: "#DED6D9",
    fontSize: 12,
    fontFamily: "Inter_400Regular",
    fontWeight: "400",
  },
  button: {
    width: 90,
    marginTop: 20,
    // backgroundColor: "#F31F5C",
    // alignItems: "center",
  },
  textButton: {
    color: "#ccc",
    textDecorationLine: "underline",
    fontSize: 12,
    fontFamily: "Inter_400Regular",
    fontWeight: "600",
  },
});
