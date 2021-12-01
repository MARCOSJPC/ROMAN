import React, { Component } from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const bottomTab = createBottomTabNavigator();


import Cadastro from './cadastrar';
import Listar from './listar';

export default class Main extends Component {
  
  render() {
    return (
      <View style={styles.main}>
        <StatusBar 
          hidden={false}
          // backgroundColor={'black'}
        />

          <bottomTab.Navigator
            initialRouteName='Listar'

            screenOptions={ ({ route }) => ({
              tabBarIcon: () => {

                if (route.name === 'Listar') {

                    return (
                        <Image
                            source={require('../../assets/pessoa.png')
                            }
    
                        />
                    )
    
                }

                if (route.name === 'Cadastro') {
                  return(
                    <Image 
                    source={require('../../assets/prancheta.png')}
                     
                    />
                  )
                }


            
              },

              // React Navigation 6.x
              headerShown: false,
              tabBarShowLabel: false,
              tabBarActiveBackgroundColor: 'rgba(39,198,250,0.77)',
              tabBarInactiveBackgroundColor: 'rgba(39,198,250,0.41)',
              // tabBarActiveTintColor: 'red',
              // tabBarInactiveTintColor: 'blue',
              tabBarStyle: { height: 50 }
            }) }
          >

            <bottomTab.Screen name="Listar" component={listar} />
            <bottomTab.Screen name="Cadastro" component={cadastrar} />
           
          

          </bottomTab.Navigator>

      </View>
    );
  }
};

const styles = StyleSheet.create({
  main: {
    flex: 1
 
  }
});