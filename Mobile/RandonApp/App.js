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
 //import Listar from './src/screens/listar'
 
 const AuthStack = createStackNavigator();
 
 import Login from './src/screens/login';
 import Listar from './src/screens/listar';
 import main from './src/screens/main';

 
 
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
         <AuthStack.Screen name="Listar" component={Listar} />
         <AuthStack.Screen name="Main" component={main} />
         {/* <AuthStack.Screen name="Cadastrar" component={Main} />
         <AuthStack.Screen name="Listar" component={CameraPerfil} /> */}
       </AuthStack.Navigator>
     </NavigationContainer>
   );
 }