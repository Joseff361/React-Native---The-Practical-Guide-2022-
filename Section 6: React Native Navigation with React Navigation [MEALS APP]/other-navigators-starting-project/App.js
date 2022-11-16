import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';

const BottomTab = createBottomTabNavigator();
//const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#3c0a6b',
          },
          headerTintColor: 'white',
          tabBarActiveTintColor: '#3c0a6b',
        }}
      >
        <BottomTab.Screen
          name="Wellcome"
          component={WelcomeScreen}
          // options={{
          //   drawerLabel: 'Welcome Screen',
          //   drawerIcon: ({ color, size }) => {
          //     return <Ionicons color={color} size={size} name="home" />;
          //   },
          // }}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons color={color} size={size} name="home" />
            ),
          }}
        />
        <BottomTab.Screen
          name="User"
          component={UserScreen}
          // options={{
          //   drawerLabel: 'User Screen',
          //   drawerIcon: ({ color, size }) => {
          //     return <Ionicons color={color} size={size} name="person" />;
          //   },
          // }}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons color={color} size={size} name="person" />
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
