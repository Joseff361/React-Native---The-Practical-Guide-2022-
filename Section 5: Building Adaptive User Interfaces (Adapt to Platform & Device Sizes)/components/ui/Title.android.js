import { Text, StyleSheet, Platform } from 'react-native';

import Colors from '../../constants/colors';

function Title({ children, style }) {
  return <Text style={[styles.title, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.white,
    textAlign: 'center',
    borderWidth: Platform.OS === 'android' ? 2 : 0,
    // Another way to set a value according to the paltform
    borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderColor: Colors.white,
    padding: 12,
    maxWidth: '80%',
    width: 300,
  },
});

export default Title;
