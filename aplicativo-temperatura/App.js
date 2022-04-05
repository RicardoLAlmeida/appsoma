import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';




export default function App() {
  
  //Variáveis
  var [C, setC] = useState('');
  var [F, setF] = useState('');
  
  
  function CalcularTemperatura(){

    //F=(9*C+160) / 5
    F = (9 * parseFloat(C) + 160)/5;

    alert("TEMPERATURA EM FAHRENHEIT: " +F);

  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Aplicativo Temperarura</Text>

      <TextInput style={styles.campo} placeholder="Digite uma temperatura em celsius"             keyboardType="numeric" onChangeText={ (C) => setC(C) } />

      <TouchableOpacity style={styles.botao} onPress={CalcularTemperatura}>
        <Text style={styles.textoBotao}>Calcular</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6495ED"
  },

  titulo: {
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 40,
    fontSize: 30,
    color: "#FFF"
  },

  campo: {
    backgroundColor: "#FFF",
    borderRadius: 30,
    margin: 15,
    padding: 10,
    fontSize: 15
  },

  botao: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    backgroundColor: '#FFD700',
    paddin: 10,
  },

  textoBotao: {
    fontSize: 20
  }

});
