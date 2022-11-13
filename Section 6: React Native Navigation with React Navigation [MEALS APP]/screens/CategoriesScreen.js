import { FlatList } from 'react-native';

import CategoryGridTitlte from '../components/CategoryGridTitlte';
import { CATEGORIES } from '../data/dummy-data';

// Special prop provided by Stack Navigation when you register this component as Stack.Screen
function CategoriesScreen({ navigation }) {
  const renderCategoryItem = itemData => {
    const pressHandler = () => {
      navigation.navigate('MealsOverview');
    };

    return (
      <CategoryGridTitlte
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={item => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
