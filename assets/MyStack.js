import Jogo from './screens/Jogo';
import Menu from './screens/Menu';

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Menu" 
          component={Menu} 
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="Jogo"
          component={Jogo}
          options={{headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack