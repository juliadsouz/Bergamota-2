import React, { Component } from "react";
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';

class App extends Component {
  
  async loadFonts() {
    await Font.loadAsync({
      Oswald_400Regular: require("@expo-google-fonts/oswald/Oswald_400Regular.ttf"),
    });
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }

  render() {
   
    return (
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Text style={{
          color: '#006400',
          fontSize: 25,
          margin: 10,
          fontFamily: 'Oswald_400Regular'
        }}>
          Bergamota
        </Text>

        <Text style={{
          color: '#FF1493',
          fontFamily: 'Oswald_400Regular'
        }}>
          Versão 1.0
        </Text>

        <TouchableOpacity style={{
          alignItems: "center",
          backgroundColor: "#f69f58",
          padding: 10,
          borderRadius: 4
        }}>
          <Image source={{
            uri: 'https://cdn.pixabay.com/photo/2024/08/16/03/50/ai-generated-8972600_1280.png'
          }}
            style={{ width: 300, height: 300 }}
          />
          <Text style={{
            color: '#006400',
            fontSize: 15,
            margin: 10,
            fontFamily: 'Oswald_400Regular'
          }}>
            Hábitos saudáveis para incluir na rotina
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
          alignItems: "center",
          backgroundColor: "#f26655",
          padding: 10,
          borderRadius: 4
        }}>
          <Image source={{
            uri: 'https://cdn.pixabay.com/photo/2021/01/29/17/26/time-5961665_1280.png'
          }}
            style={{ width: 300, height: 300 }}
          />
          <Text style={{
            color: '#006400',
            fontSize: 15,
            margin: 10,
            fontFamily: 'Oswald_400Regular'
          }}>
            Como criar uma rotina?
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

export default App;
