import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  TextInput,
  FlatList,
  
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../services/api';

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = { 
        listaProjetos: []
    }
}

buscarProj = async () => {
    const token = await AsyncStorage.getItem('userToken');
   

    const resp = await api.get('/Projetos',{
        headers: {
          Authorization: 'Bearer ' + token,
        },
      }
      );
    this.setState({listaProjetos: resp.data})
};

componentDidMount(){
    this.buscarProj();

}


  render() {
    return (
      <ImageBackground 
        source={require('../../assets/listar.png' )}
        style={StyleSheet.absoluteFillObject}>
        {/* retangulo roxo */}
        <View style={styles.overlay} />
        <View style={styles.main}>
          {/* <Image
            source={require('../../assets/img/loginIcon2x.png')}
            style={styles.mainImgLogin}
          /> */}
          <FlatList 
          
          data = {this.state.listaProjetos}
          keyExtractor={item => item.idProjeto}
          renderItem={this.renderItem}

          />

        </View>
      <TouchableOpacity
            style={styles.btnLogin}
            
            onPress={this.realizarLogin}>
            <Text style={styles.btnLoginText}>Login</Text>
          </TouchableOpacity>

      </ImageBackground>
      
      
      

    );
  }
  renderItem = ({item}) => (

  <View style={styles.cardastro}>
    <View style={styles.textos}>
      <Image style={styles.pranche} source={require('../../assets/prancheta.png' )}/>
      <Text>
        {item.nomeProjeto}</Text>
    </View>
    <View style={styles.textos}>
        <Image style={styles.certo} source={require('../../assets/certo.png' )}/>
        <Text>{item.idTemaNavigation.nomeTema}</Text>
    </View>

    
  </View>

  )
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
    // // backgroundColor: '#F1F1F1', retirar pra nao ter conflito.
    // justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    marginTop: 150,
  },

  cardastro: {
      width: 337,
      height: 144,
      backgroundColor: '#FF7A00',
      borderRadius: 16,
      marginBottom: 10,
           // alignItems: 'center',
     
  },


  pranche: {
    marginTop: 30,
    marginBottom: 30,
    height: 25,
    width: 26,
    

  },

  certo: {

    height: 25,
    width: 26,

  },

  textos: {
    alignItems: 'center',
      flexDirection: 'row', 
      marginLeft: 40,
    fontSize: 12, //aumentar um pouco
    fontFamily: 'Rock Salt', //troca de fonte
    color: '#000000', //mesma cor identidade

  },

  btnLogin: {
    // alignItems: 'space-between',
    // justifyContent: 'center',
    height: 20,
    // width: 70,
    marginBottom: 50,

    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 4,
    shadowOffset: {height: 1, width: 1},
  },
  btnLoginText: {
    
    fontSize: 12, //aumentar um pouco
    fontFamily: 'Rock Salt', //troca de fonte
    color: '#000000', //mesma cor identidade
    letterSpacing: 6, //espacamento entre as letras
    textTransform: 'uppercase', //estilo maiusculo
  },
});

