
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
      email: 'Mar@gmail.com',
      senha: '12345',
    };
  }

  realizarLogin = async () => {
    
    console.warn(this.state.email + ' ' + this.state.senha);

    const resposta = await api.post('/Login', {
      email: this.state.email, //ADM@ADM.COM
      senha: this.state.senha, //senha123
    });

    //mostrar no swagger para montar.
    const token = resposta.data.token;
    console.warn(token)
    await AsyncStorage.setItem('userToken', token);

    //agora sim podemos descomentar.
    if (resposta.status == 200) {
      console.warn('token')

      
      this.props.navigation.navigate('Listar')
    }

    //
  };

  render() {
    return (
      <ImageBackground 
        source={require('../../assets/logo.png' )}
        style={StyleSheet.absoluteFillObject}>
        <View style={styles.overlay} />
        <View style={styles.main}>
          <TextInput
            style={styles.inputLoginn}
            placeholder="Email"
            placeholderTextColor="#000"
            keyboardType="email-address"
            // ENVENTO PARA FAZERMOS ALGO ENQUANTO O TEXTO MUDA
            onChangeText={email => this.setState({email})}
          />

          <TextInput
            style={styles.inputLogin}
            placeholder="Senha"
            placeholderTextColor="#000"
            keyboardType="default" //para default nao obrigatorio.
            secureTextEntry={true} //proteje a senha.
            // ENVENTO PARA FAZERMOS ALGO ENQUANTO O TEXTO MUDA
            onChangeText={senha => this.setState({senha})}
            secureTextEntry={true} 
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
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },

  

  inputLoginn: {
    marginTop: 300,
    width: 240, //largura mesma do botao
    marginBottom: 40, //espacamento pra baixo
    fontSize: 18,
    color: '#000000',
    borderBottomColor: '#0000000', //linha separadora
    borderBottomWidth: 2, //espessura.
  },

  inputLogin: {
    width: 240, //largura mesma do botao
    marginBottom: 40, //espacamento pra baixo
    fontSize: 18,
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
    marginBottom: 50,

    marginLeft: 190,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 4,
    shadowOffset: {height: 1, width: 1},
  },
});
