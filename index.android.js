import React from 'react';
import {Text, AppRegistry, View, Image, TouchableOpacity, Alert} from 'react-native';

// Formatações
const Estilos = {
  principal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botao: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20
  },
  textoBotao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
};

const botaoPressionado = () => {
  var numeroAleatorio = Math.random();
  numeroAleatorio = Math.floor(numeroAleatorio * 10);

  // Frases
  var frases = Array();
  frases[0] = 'Se tu o desejas, podes voar, só tens de confiar muito em ti.';
  frases[1] = 'Design é função, não forma.';
  frases[2] = 'Trocava toda minha tecnologia por uma tarde com Sócrates.';
  frases[3] = 'Às vezes a vida vai-te golpear a cabeça com um tijolo. Não percas a fé.';
  frases[4] = 'Você pode encarar um erro como uma besteira a ser esquecida, ou como um resultado que aponta uma nova direção.';
  frases[5] = 'As pessoas não sabem o que querem, até mostrarmos a elas.';
  frases[6] = 'Cada sonho que você deixa pra trás, é um pedaço do seu futuro que deixa de existir.';
  frases[7] = 'Foco é dizer não.';
  frases[8] = 'As pessoas ligam a televisão quando querem desligar o cérebro.';
  frases[9] = 'Concentre-se naquilo que você é bom, delegue todo o resto.';

  var fraseEscolhida = frases[numeroAleatorio];
  Alert.alert('Steve Jobs diz:',fraseEscolhida);
}

// Componente
const App = () => {
  const {principal,botao, textoBotao} = Estilos;
  return(
    <View style={principal}>
      <Image source={require('./images/logo.png')}/>
      <TouchableOpacity onPress={botaoPressionado} style={botao}>
        <Text style={textoBotao}>Nova Frase</Text>
      </TouchableOpacity>
    </View>  
  );
};

// Renderizar dispositivo
AppRegistry.registerComponent('app2', () => App);