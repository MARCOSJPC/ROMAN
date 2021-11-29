/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import 'react-native-gesture-handler';

 import React from 'react';
 import { StatusBar } from 'react-native';
 
 import {NavigationContainer} from '@react-navigation/native';
 import {createStackNavigator} from '@react-navigation/stack';
 
 const AuthStack = createStackNavigator();
 
 import Login from './src/screens/login';
//  import Cadastrar from './src/screens/cadastrar';
//  import Listar from './src/screens/listar';
 
 export default function Stack() {
   return (
     <NavigationContainer>
       <StatusBar
         hidden={true}
       />
 
       <AuthStack.Navigator
         initialRouteName="Login"
         screenOptions={{
           headerShown: false,
         }}>
         <AuthStack.Screen name="Login" component={Login} />
         {/* <AuthStack.Screen name="Cadastrar" component={Main} />
         <AuthStack.Screen name="Listar" component={CameraPerfil} /> */}
       </AuthStack.Navigator>
     </NavigationContainer>
   );
 }