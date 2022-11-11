import * as React from 'react';
import {View, Text, Button} from 'react-native';

const About = ({navigation}) =>{
  return (
    <View>
      <Text>About Screen</Text>
      <Button title='Go Back' 
      onPress={()=>navigation.goback()} />
      <Button title='Go To Detail' 
      onPress={()=>navigation.navigate('Detail')}>Go To Detail</Button>
    </View>
  );
}
export default About;