import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import {RootStackParamList} from '.';
import HomeTabScreen from '../screens/HomeTabScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: {backgroundColor: 'white'},
        }}>
        <Stack.Screen name="HomeTab" component={HomeTabScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
