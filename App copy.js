import React, {Component} from "react";

import {View,Text,Image, TextInput, StyleSheet} from "react-native";
import foto from './kucing.jpg';
import {style} from "./style";

const App = () => {
  return (
    <View style={style.container}>
      <Teks />
      <Text style={style.tulisanku}>Selamat Datang</Text>
      <Image style={{width:100,height:100}} source={{uri:'https://placeimg.com/100/100/animals'}} ></Image>
      <TextInput style={{borderWidth:1}} />
      <Photo/>
      <Tampilan/>
      <Tulisan/>
      <Photoku/>
    </View>
    
  );
}

const Teks = ()=>{
  return (
    <Text style={style.tulisanku}>Hello World...</Text>
  );
}

const Photo = ()=> {
    return (
      <Image source={foto} style={{width:200,height:200}}></Image>
    );
 }

 const Tampilan = () => {
  return (
    <View style={{width:100,height:100, backgroundColor:'red'}} />
  );
 }

 class Tulisan extends Component{
  render() {
    return (
      <Text>Tampilan Dari Komponen Class</Text>
    );
  }
 }

 class Photoku extends Component{
  render(){
    return (
      <Image style={{width:200,height:200}} source={{uri:'https://placeimg.com/100/100/tech'}} />
    )
  }
 }

 
export default App;