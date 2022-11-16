import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useLayoutEffect } from 'react';

import MealMinutiae from '../components/MealMinutiae';
import IconButton from '../components/IconButton';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import { MEALS } from '../data/dummy-data';

function MealDetail({ route, navigation }) {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  const headerButtonPressHandler = () => {
    console.log('Pressed!');
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={headerButtonPressHandler}
            icon="star"
            color="white"
          />
        );
      },
    });
  }, [navigation, headerButtonPressHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealMinutiae
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle subtitle={'Ingredients'} />
          <List data={selectedMeal.ingredients} />
          <Subtitle subtitle={'Steps'} />
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    maxWidth: '80%',
  },
});

export default MealDetail;
