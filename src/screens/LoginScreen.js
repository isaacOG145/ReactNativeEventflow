import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { Colors, fontSizes, Spacing } from '../kernel/Styles';
import BlueButton from '../components/BlueButton';
import InputComponent from '../components/InputComponent';
import PasswordInput from '../components/PasswordInput';
import MessageModal from '../components/MessageModal';
import api from '../config/api';
import { saveToken, removeToken } from '../services/storage/AuthService';
//images
const userImg = require('../../assets/icons/user.png');
const passwordImg = require('../../assets/icons/password.png');
const loginLogo = require('../../assets/logo/loginLogo.png');

export default function LoginScreen({ navigation }) {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('success');
  const [modalMessage, setModalMessage] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const showMessage = (type, message) => {
    setModalType(type);
    setModalMessage(message);
    setShowModal(true);
  };

  const handleLogin = async () => {
    let valid = true;

    if (!email) {
      setEmailError('El correo es obligatorio');
      valid = false;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('La contraseña es obligatoria');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (!valid) return;

    try {
      const response = await api.post('/login', {
        email,
        password,
      });

      const  jwt  = response.data.result.jwt;

      await saveToken(jwt);
      showMessage('success', "Acceso autorizado");

      setTimeout(() => {
        navigation.navigate('Home');
      }, 1500);

    } catch (error) {
      console.log(error)

      if (error.response) {
        const status = error.response.status;

        if (status == 401) {
          showMessage('error', 'Correo o contraseña incorrectas.');
        } else if (status == 403) {
          showMessage('error', 'Usuario inactivo. Contacta al administrador.');
        } else {
          showMessage('error', 'Error al iniciar sesión. Intenta nuevamente.');
        }
      } else if (error.message && error.message.includes('Network Error')) {
        showMessage('error', 'Error de conexión. Intente nuevamente.');
      } else {
        showMessage('error', 'Error al iniciar sesión.');
      }
    }

  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ImageBackground
        source={require('../../assets/background/background.png')} // Ruta a tu imagen PNG
        style={styles.backgroundImage}
        resizeMode="cover" // Asegura que la imagen cubra toda la pantalla
      >
        <View style={styles.content}>
          <Image
            source={loginLogo}
            style={styles.loginLogo}
          />
          <View style={styles.card}>
            <Text style={styles.title}>Iniciar sesión</Text>

            <InputComponent
              value={email}

              onChangeText={setEmail}
              error={emailError}
              label="Ingresar usuario"
              required={true}
              imageSource={userImg}
              imageStyle={{ width: 20, height: 20 }}
            />

            <PasswordInput
              value={password}
              onChangeText={setPassword}
              error={passwordError}
              label="Ingresar contraseña"
              required={true}
              imageSource={passwordImg}
              imageStyle={{ width: 24, height: 24 }}
            />

            <BlueButton onPress={handleLogin}>
              Iniciar sesión
            </BlueButton>
          </View>

          <TouchableOpacity
            style={styles.linkContainer}
            onPress={() => navigation.navigate('RecoverPassword1')}
          >
            <Text style={styles.link}>¿Has olvidado tu contraseña?</Text>
          </TouchableOpacity>
        </View>
        <MessageModal
          show={showModal}
          message={modalMessage}
          onClose={() => setShowModal(false)}
          type={modalType}
        />
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginLogo: {
    height: 120,
    width: 200,
    marginBottom: Spacing.small
  },
  card: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 12,
    marginTop: Spacing.large,
    padding: Spacing.xxxlarge,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: fontSizes.large,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 36,
    marginBottom: 36,
    color: Colors.blue
  },
  linkContainer: {
    marginTop: Spacing.xxxlarge,
    alignSelf: 'center'
  },
  link: {
    color: Colors.violet,
    fontWeight: '500',
    textDecorationLine: 'none'
  }
});
