import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/home';
import IssLocationScreen from './screens/IssLocation';
import MeteorScreen from './screens/Meteor';
import {CreateStackNavigator} from "@react-navigation/stack"
import {NavigatonContainer} from "@react-navigation/native"

const stack=CreateStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="IssLocation" component={IssLocationScreen} />
      <Stack.Screen name="Meteors" component={MeteorScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
