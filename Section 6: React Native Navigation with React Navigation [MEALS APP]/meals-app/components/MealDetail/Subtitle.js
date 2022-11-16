import { View, Text, StyleSheet } from 'react-native';

function Subtitle({ subtitle }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitleContainer: {
    borderBottomColor: '#e2b497',
    borderBottomWidth: 2,
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
  },
  subtitle: {
    color: '#e2b497',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Subtitle;
