import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Fragment } from 'react';
import { StyleSheet, Platform, StatusBar as RNStatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverview from './screens/MealsOverview';
import MealDetail from './screens/MealDetail';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Fragment>
      <StatusBar style="light"></StatusBar>
      {/* Navigator offers to us a default SafeAreaView */}
      <NavigationContainer>
        {/* Out of the box, the top-most screen (i.e. the first child inside of <Stack.Navigator>) is used as the initial screen. */}
        <Stack.Navigator
          initialRouteName={'MealsCategory'}
          screenOptions={{
            headerTintColor: '#ffffff',
            headerStyle: {
              backgroundColor: '#351401',
            },
            contentStyle: {
              backgroundColor: '#3f2f25',
            },
          }}
        >
          <Stack.Screen
            name="MealsCategory"
            component={CategoriesScreen}
            options={{
              title: 'All Categories',
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverview}
            // This function will be executed whenever the screen becomes active
            // options={({ route, navigation }) => {
            //   // Return the options object
            //   const catId = route.params.categoryId;
            //   return {
            //     title: catId
            //   }
            // }}
          />
          <Stack.Screen name="MealDetail" component={MealDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? RNStatusBar.currentHeight : 0,
  },
});
