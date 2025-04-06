import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/screens/LoginScreen';
import RecoverPasswordScreen1 from './src/screens/RecoverPasswordScreen1';
import RecoverPasswordScreen2 from './src/screens/RecoverPasswordScreen2';
import RecoverPasswordScreen3 from './src/screens/RecoverPasswordScreen3';
import HomeScreen from './src/screens/HomeScreen';
import DetalleUsuario from './src/screens/DetalleUsuario';
import DashboardUsuario from './src/screens/DashboardUsuario';
import ModalQR from './src/screens/ModalQr';
import Perfil from './src/screens/Perfil';
import Sidebar from './src/components/Sidebar';
import ChangePasswordScreen from './src/screens/ChangePasswordScreen'; // Nueva importación

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="RecoverPassword1" component={RecoverPasswordScreen1} />
        <Stack.Screen name="RecoverPassword2" component={RecoverPasswordScreen2} />
        <Stack.Screen name="RecoverPassword3" component={RecoverPasswordScreen3} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DetalleUsuario" component={DetalleUsuario} />
        <Stack.Screen name="MisEventos" component={DashboardUsuario} />
        <Stack.Screen name="ModalQR" component={ModalQR} />
        <Stack.Screen name="Menu" component={Sidebar} />
        <Stack.Screen name="Perfil" component={Perfil} />
        {/* Agrega esta nueva pantalla */}
        <Stack.Screen 
          name="ChangePasswordScreen" 
          component={ChangePasswordScreen}
          options={{ title: 'Cambiar Contraseña' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}