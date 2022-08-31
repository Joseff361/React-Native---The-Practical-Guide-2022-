import { View, StyleSheet, Alert, FlatList } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState, useEffect } from 'react';

import NumberContainer from '../components/game/NumberContainer';
import InstructionText from '../components/ui/InstructionText';
import PrimaryButton from '../components/ui/PrimaryButton';
import GuessLog from '../components/game/GuessLog';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import Colors from '../constants/colors';
import { generateRandomBetween } from '../utils';

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(
    minBoundary,
    maxBoundary,
    userNumber,
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
      minBoundary = 1;
      maxBoundary = 100;
    }
  }, [currentGuess, userNumber]);

  const nextGuessHandler = direction => {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ]);
      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess,
    );
    setCurrentGuess(newRndNumber);
    setGuessRounds(currentGuessRounds => [newRndNumber, ...currentGuessRounds]);
  };

  const guessRoundsListLength = guessRounds.length;

  return (
    <View style={styles.screen}>
      <Title style={styles.androidTitle}>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or lower?
        </InstructionText>
        <View style={styles.buttons}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler('lower')}>
              <Ionicons name="md-remove" size={24} color={Colors.white} />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
              <Ionicons name="md-add" size={24} color={Colors.white} />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          keyExtractor={guessRound => guessRound}
          renderItem={wrappedItem => (
            <GuessLog
              roundNumber={guessRoundsListLength - wrappedItem.index}
              guess={wrappedItem.item}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  androidTitle: {
    marginTop: 30,
  },
  instructionText: {
    marginBottom: 12,
  },
  buttons: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 0.5,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});

export default GameScreen;
