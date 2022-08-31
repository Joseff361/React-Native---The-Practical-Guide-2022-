import { Text, StyleSheet } from 'react-native';

import Colors from '../../constants/colors';

// the prop style doesn't have to be "style"
function InstructionText({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: 'open-sans',
    color: Colors.accent500,
    fontSize: 24,
  },
});

export default InstructionText;
