import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';


class App extends Component {
  render() {
    return(
      <View>
            <Text style={{
              color: '#006400', 
              fontSize: 25, 
              margin: 10}}>

          Bergamota</Text>

        <Text style={{
          color: '#FF1493'}}>
            
            Versão 1.0</Text>

 
  <TouchableOpacity style={{
    alignItems: "center", 
    backgroundColor: "#f69f58", 
    padding: 10, 
    borderRadius: 4 }}>

        <Image source={{
          uri: 'https://cdn.pixabay.com/photo/2024/08/16/03/50/ai-generated-8972600_1280.png'}}
        
        style={{
          width: 300, 
          height: 300}}
        />


       <Text style={{
        color: '#006400', 
        fontSize: 15, 
        margin: 10}}>

          Hábitos saudáveis para incluir na rotina</Text>

          </TouchableOpacity>
       
       
          <TouchableOpacity style={{
    alignItems: "center", 
    backgroundColor: "#f26655", 
    padding: 10, 
    borderRadius: 4 }}>

        <Image source={{
          uri: 'https://cdn.pixabay.com/photo/2021/01/29/17/26/time-5961665_1280.png'}}
        
        style={{
          width: 300, 
          height: 300}}
        />


       <Text style={{
        color: '#006400', 
        fontSize: 15, 
        margin: 10}}>

          Como criar uma rotina?</Text>

          </TouchableOpacity>
      
      </View>

    );
  }
}

export default App;