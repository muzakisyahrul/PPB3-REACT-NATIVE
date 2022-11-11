import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Detail from './Detail';
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Karyawan" component={Home}/>
        <Stack.Screen name="Detail" component={Detail}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

 
export default App;