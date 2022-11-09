import { StatusBar } from 'expo-status-bar';
import { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar as RNStatusBar,
} from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';

export default function App() {
  return (
    <Fragment>
      <StatusBar style="light"></StatusBar>
      <SafeAreaView style={styles.safeArea}>
        <CategoriesScreen />
      </SafeAreaView>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? RNStatusBar.currentHeight : 0,
  },
});
