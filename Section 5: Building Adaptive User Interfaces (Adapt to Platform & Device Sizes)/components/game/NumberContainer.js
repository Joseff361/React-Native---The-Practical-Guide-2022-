import { Text, View, StyleSheet, Dimensions } from 'react-native';

import Colors from '../../constants/colors';

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

/*
  window: all the space without status bar
  screen: all the space including status bar
  fontScale is the font selected by the user in its own device
*/

const deviceWitdh = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: deviceWitdh < 380 ? 12 : 24,
    borderRadius: 8,
    margin: deviceWitdh < 380 ? 12 : 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: Colors.accent500,
    fontSize: deviceWitdh < 380 ? 28 : 36,
    fontFamily: 'open-sans-bold',
  },
});

export default NumberContainer;
