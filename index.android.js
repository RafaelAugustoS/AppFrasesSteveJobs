import React from 'react';
import {Text, AppRegistry} from 'react-native';

// Formatações
const Estilos = {
  estiloTexto: {
    fontSize: 50
  }
};

// Componente
const App = () => {
  return(
    <Text style={Estilos.estiloTexto}>Frases Steve Jobs</Text>
  );
};

// Renderizar dispositivo
AppRegistry.registerComponent('app2', () => App);