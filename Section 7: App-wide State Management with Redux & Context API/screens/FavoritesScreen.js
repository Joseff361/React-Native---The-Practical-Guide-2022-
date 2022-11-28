import { StyleSheet, Text, View } from 'react-native';
import { useContext } from 'react';
import { useSelector } from 'react-redux';

import MealsList from '../components//MealList/MealsList';
import { FavoritesContext } from '../store/context/favorites-context';
import { MEALS } from '../data/dummy-data';

function FavoritesScreen() {
  // const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMealsIds = useSelector(state => state.favoriteMeals.ids);

  const favoritesMeals = MEALS.filter(meal =>
    // favoriteMealsCtx.ids.includes(meal.id),
    favoriteMealsIds.includes(meal.id),
  );

  if (favoritesMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet</Text>
      </View>
    );
  }

  return <MealsList items={favoritesMeals} />;
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default FavoritesScreen;
