import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import * as Font from "expo-font";
import { Oswald_300Light } from "@expo-google-fonts/oswald";

const HabitCard = ({ titulo, imagem, fontLoaded }) => {
  return (
    <View style={styles.card}>

      <View style={styles.titleContainer}>

        <Image source={{ uri: imagem }} style={styles.cardimagem} />

        <Text style={[styles.titulo, fontLoaded && { fontFamily: 'Oswald_300Light' }]}>

          {titulo}
        </Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dcd1b4', 
    flex: 1
  },
  scrollViewContent: {
    paddingBottom: 20
  },
  card: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 10, 
    elevation: 3
  },
  titleContainer: { 
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardimagem: {
    width: 40,
    height: 40,
    marginRight: 10
  },
  titulo: {
    fontSize: 18, 
    fontWeight: 'bold', 
    color: "#8B4513", 
    letterSpacing: 1,
    flex: 1
  },
  bordacard: {
    flex: 1, 
    paddingHorizontal: 10
  },
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      fontsLoaded: false, 
      showHabits: false 
    };
  }

  async componentDidMount() {
    await Font.loadAsync({ Oswald_300Light });
    this.setState({ fontsLoaded: true });
  }

  toggleHabits = () => {
    this.setState((prevState) => ({
      showHabits: !prevState.showHabits
    }));
  };

  render() {
    const { showHabits } = this.state;
    const habits = [
      {
        titulo: "Ler um livro",
        imagem: "https://cdn-icons-png.flaticon.com/512/3389/3389081.png"
      },
      {
        titulo: "Organizar o espaço para o dia seguinte",
        imagem: "https://cdn-icons-png.flaticon.com/512/2400/2400629.png"
      },
      {
        titulo: "Beber 2 litros de água",
        imagem: "https://cdn-icons-png.flaticon.com/512/2447/2447764.png"
      },
      {
        titulo: "Praticar exercícios",
        imagem: "https://cdn-icons-png.flaticon.com/512/2936/2936886.png"
      },
      {
        titulo: "Praticar a gratidão",
        imagem: "https://cdn-icons-png.flaticon.com/512/12649/12649647.png"
      }
    ];

    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <Text style={{ color: "#8B4513", fontSize: 25, margin: 10 }}>
            Bergamota
          </Text>

          <TouchableOpacity
            style={{ alignItems: "center", backgroundColor: '#fab87f', padding: 10, borderRadius: 70, margin: 20, marginBottom: 8 }}
            onPress={this.toggleHabits}>
            <Image
              source={{ uri: "https://cdn.pixabay.com/photo/2024/08/16/03/50/ai-generated-8972600_1280.png" }}
              style={{ width: 300, height: 300 }} />
            <Text
              style={{
                fontFamily: this.state.fontsLoaded ? "Oswald_300Light" : "System",
                fontSize: 20, 
                margin: 10, 
                fontWeight: 'bold', 
                color: "#8B4513"
              }}>
              Hábitos saudáveis para incluir na rotina
            </Text>
          </TouchableOpacity>

          {showHabits && (
            <View style={styles.bordacard}>
              {habits.map((habit, index) => (
                <HabitCard
                  key={index}
                  titulo={habit.titulo}
                  imagem={habit.imagem}
                  fontLoaded={this.state.fontsLoaded}
                />
              ))}
            </View>
          )}
        </ScrollView>
      </View>
    );
  }
}
