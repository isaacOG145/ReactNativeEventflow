import React from "react";
import { View, Text, ImageBackground, StyleSheet, Dimensions } from "react-native";

export default function Login() {
  return (
    <ImageBackground
      source={require("../../../assets/background/backgroundLogin.png")}  // Ruta a tu imagen
      style={styles.background}
      resizeMode="cover" // Asegura que la imagen cubra toda la pantalla sin distorsionarse
    >
      <View style={styles.container}>
        <Text style={styles.text}>Bienvenido</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1, // Ocupa todo el espacio disponible
    justifyContent: "center", // Centra el contenido en el eje vertical
    alignItems: "center", // Centra el contenido en el eje horizontal
    width: "100%", // Asegura que la imagen cubra todo el ancho de la pantalla
    height: Dimensions.get("window").height, // Ajusta la altura según el tamaño de la pantalla
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20, // Espaciado para el contenido
  },
  text: {
    color: "#fff", // Color del texto
    fontSize: 24,  // Tamaño del texto
  },
});
