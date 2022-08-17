//import * as React from 'react';
//import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native';
import AddressScreen from './AddressScreen';
import CustomDate from './CustomDatePicker';
import HomeScreen from './HomeScreen';
import SkillsScreen from './SkillsScreen';
import Summary from './Summary';


const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{
          title: 'Add Employee',
          headerRight: () => (
            <Button
              onPress={() => console.log('This is a button!')}
              title="Draft"
              color="orange"
            />
          )
        }}>
        <Stack.Screen name="Home" component={HomeScreen} /*options={{
          title: 'Add Employee',
          headerRight: () => (
            <Button
              onPress={() => console.log('This is a button!')}
              title="Draft"
              color="orange"
            />
          )
        }} *//>
        <Stack.Screen name='Summary' component={Summary}/>
        <Stack.Screen name='Address' component={AddressScreen}/>
        <Stack.Screen name='Skills' component={SkillsScreen}/>
        <Stack.Screen name='Date' component={CustomDate}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;