import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  TextInput,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../services/api';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
    };
  }
  //como vamos trabalhar com assync historage,
  //nossa funcao tem que ser async.
  realizarLogin = async () => {
    //nao temos mais  console log.
    //vamos utilizar console.warn.

    //apenas para teste.
    console.warn(this.state.email + ' ' + this.state.senha);

    const resposta = await api.post('/login', {
      email: this.state.email, //ADM@ADM.COM
      senha: this.state.senha, //senha123
    });

    //mostrar no swagger para montar.
    const token = resposta.data.token;
    await AsyncStorage.setItem('userToken', token);

    //agora sim podemos descomentar.
    if (resposta.status == 200) {
      this.props.navigation.navigate('./listar');
    }

    console.warn(token);

    //
  };

  render() {
    return (
      <ImageBackground 
        source={require('../../assets/cadastro.png' )}
        style={StyleSheet.absoluteFillObject}>
        {/* retangulo roxo */}
        <View style={styles.overlay} />
        <View style={styles.main}>
          {/* <Image
            source={require('../../assets/img/loginIcon2x.png')}
            style={styles.mainImgLogin}
          /> */}
          <Text style={styles.texto}>
            CADASTRAR PROJETO
          </Text>
          <TextInput
            style={styles.inputLoginn}
            placeholder="Usuario"
            placeholderTextColor="#000"
            keyboardType="email-address"
            // ENVENTO PARA FAZERMOS ALGO ENQUANTO O TEXTO MUDA
            onChangeText={email => this.setState({email})}
          />

          <TextInput
            style={styles.inputLoginnn}
            placeholder="Titulo"
            placeholderTextColor="#000"
            keyboardType="email-address"
            // ENVENTO PARA FAZERMOS ALGO ENQUANTO O TEXTO MUDA
            onChangeText={email => this.setState({email})}
          />

          <TextInput
            style={styles.inputLogin}
            placeholder="Tema"
            placeholderTextColor="#000"
            keyboardType="default" //para default nao obrigatorio.
            // ENVENTO PARA FAZERMOS ALGO ENQUANTO O TEXTO MUDA
            onChangeText={senha => this.setState({senha})}
          />

          <TouchableOpacity
            style={styles.btnLogin}
            
            onPress={this.realizarLogin}>
            <Text style={styles.btnLoginText}>Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  //antes da main
  overlay: {
    ...StyleSheet.absoluteFillObject, //todas as prop do styleShhet, e vamos aplica o abosluteFIL...
    // backgroundColor: 'rgba(183,39,255,0.79)', //rgba pq vamos trabalhar com transparencia.
  },

  // conteúdo da main
  main: {
    // flex: 1,
    // backgroundColor: '#F1F1F1', retirar pra nao ter conflito.
    justifyContent: 'center',
    marginLeft: 50,
    width: '100%',
    height: '100%',
    
  },

  texto: {

    fontSize: 20,
    color: '#000000',
    marginLeft: 40,

  },

  inputLoginn: {
    marginTop: 50,
    width: 300, //largura mesma do botao
    marginBottom: 30, //espacamento pra baixo
    fontSize: 13,
    color: '#000000',
    borderBottomColor: '#0000000', //linha separadora
    borderBottomWidth: 1, //espessura.
  },

  inputLoginnn: {

    width: 300, //largura mesma do botao
    marginBottom: 30, //espacamento pra baixo
    fontSize: 13,
    color: '#000000',
    borderBottomColor: '#0000000', //linha separadora
    borderBottomWidth: 1, //espessura.
  },

  inputLogin: {
    width: 300, //largura mesma do botao
    marginBottom: 30, //espacamento pra baixo
    fontSize: 13,
    color: '#0000000',
    borderBottomColor: '#000000', //linha separadora
    borderBottomWidth: 1, //espessura.
  },

  btnLoginText: {
    
    fontSize: 12, //aumentar um pouco
    fontFamily: 'Rock Salt', //troca de fonte
    color: '#000000', //mesma cor identidade
    letterSpacing: 6, //espacamento entre as letras
    textTransform: 'uppercase', //estilo maiusculo
  },
  btnLogin: {
    // alignItems: 'space-between',
    // justifyContent: 'center',
    height: 20,
    // width: 70,
    marginTop: 40,

    marginLeft: 19,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 4,
    shadowOffset: {height: 1, width: 1},
  },
});