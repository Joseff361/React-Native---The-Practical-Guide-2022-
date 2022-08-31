import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState, useMemo } from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOver from './screens/GameOver';
import Colors from './constants/colors';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(false);
  const [guessRound, setGuessRound] = useState(0);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  const pickedGameHandler = pickedNumber => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };

  const gameOverHandler = numberOfRounds => {
    setGuessRound(numberOfRounds);
    setGameIsOver(true);
  };

  const startNewGameHandler = () => {
    setUserNumber(null);
    setGuessRound(0);
    setGameIsOver(false);
  };

  const currentScreen = useMemo(() => {
    if (gameIsOver)
      return (
        <GameOver
          userNumber={userNumber}
          roundsNumber={guessRound}
          onStartNewGame={startNewGameHandler}
        />
      );

    return userNumber ? (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    ) : (
      <StartGameScreen onPickNumber={pickedGameHandler} />
    );
  }, [userNumber, guessRound, gameIsOver]);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require('./assets/images/background.png')}
        // takes all the avaiable space but not distorting it, just zooming it
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{currentScreen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  //  View widget takes as much space as its children takes
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
