import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    textDecorationLine: 'underline',
    marginBottom: 10,
  },
  contentStyle: {
    paddingTop: 10,
    paddingBottom: 80,
    paddingHorizontal: 12,
  },
  loading: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textLoad: {
    fontSize: 18,
    fontWeight: '600',
  }
});
