import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      {/* The second argument you pass to bind method will be the first parameter
      received by the function */}
      <Pressable
        // android_ripple={{ color: '#210644' }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={pressedData => pressedData.pressed && styles.pressedItem}
      >
        {/* Text widget cant use borderRadius property on ios (use View widget instead) */}
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: '#fff',
    padding: 9,
  },
});

export default GoalItem;
