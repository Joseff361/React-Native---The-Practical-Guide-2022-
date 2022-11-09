import { FlatList } from 'react-native';

import CategoryGridTitlte from '../components/CategoryGridTitlte';
import { CATEGORIES } from '../data/dummy-data';

const renderCategoryItem = itemData => {
  return (
    <CategoryGridTitlte
      title={itemData.item.title}
      color={itemData.item.color}
    />
  );
};

function CategoriesScreen() {
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
