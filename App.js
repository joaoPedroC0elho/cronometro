import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

let timer = null;
let ss = 0;
let mm = 0;
let hh = 0;

export default function App() {
  const [numero, setNumero] = useState("00:00:00");
  const [botao, setBotao] = useState("Iniciar");
  const [ultimo, setUltimo] = useState(null);

  function iniciar() {
    if (timer !== null) {
      //Aqui parar o timer
      clearInterval(timer);
      timer = null;
      setBotao("Continuar");
    } else {
      //Comecar a girar o time
      timer = setInterval(() => {
        ss++;

        if (ss == 60) {
          ss = 0;
          mm++;
        }

        if (mm == 60) {
          mm = 0;
          hh++;
        }

        let format =
          (hh < 10 ? "0" + hh : hh) +
          ":" +
          (mm < 10 ? "0" + mm : mm) +
          ":" +
          (ss < 10 ? "0" + ss : ss);

        setNumero(format);
      }, 100);

      setBotao("Parar");
    }
  }

  function zerar() {
    if (timer !== null) {
      //Parar o timer
      clearInterval(timer);
      timer = null;
      setBotao("Iniciar");
      setUltimo("");
      setNumero("00:00:00");
      ss = 0;
      mm = 0;
      hh = 0;
    } else {
      setUltimo(numero);
      setNumero("00:00:00");
      ss = 0;
      mm = 0;
      hh = 0;
      setBotao("Iniciar");
    }
  }

  return (
    <View style={styles.container}>
      
      <Text style={styles.timer}>{numero}</Text>
      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btnButton} onPress={iniciar}>
          <Text style={styles.btnText}>{botao}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnButton} onPress={zerar}>
          <Text style={styles.btnText}>Zerar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.areaUtimo}>
        <Text style={styles.textCorrida}>
          {ultimo ? "Ultimo tempo: " + ultimo : " "}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  timer: {
    marginTop: -160,
    fontSize: 40,
    fontWeight: "bold",
    color: "#000",
  },
  btnArea: {
    flexDirection: "row",
    marginTop: 130,
    height: 40,
  },
  btnButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    margin: 17,
    backgroundColor: "#fff",
    borderRadius: 9,
  },
  btnText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#",
  },
  areaUtimo: {
    marginTop: 45,
  },
  textCorrida: {
    fontSize: 20,
    color: "#000",
    fontStyle: "italic",
  },
});
