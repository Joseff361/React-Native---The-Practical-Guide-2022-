import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Fragment } from 'react';
import { StyleSheet, Platform, StatusBar as RNStatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverview from './screens/MealsOverview';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Fragment>
      <StatusBar style="dark"></StatusBar>
      {/* Navigator offers to us a default SafeAreaView */}
      <NavigationContainer>
        {/* Out of the box, the top-most screen (i.e. the first child inside of <Stack.Navigator>) is used as the initial screen. */}
        <Stack.Navigator initialRouteName={'MealsCategory'}>
          <Stack.Screen name="MealsCategory" component={CategoriesScreen} />
          <Stack.Screen name="MealsOverview" component={MealsOverview} />
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
