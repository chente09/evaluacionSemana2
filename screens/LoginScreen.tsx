import { Alert, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/Config';

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  function login() {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigation.navigate('Operaciones');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        let titulo = '';
        let mensaje = '';

        switch (errorCode) {
          case 'auth/invalid-email':
            titulo = 'Correo inválido';
            mensaje = 'Revisar que el email sea el correcto';
            break;
          case 'auth/invalid-credential':
            titulo = 'Error de Usuario';
            mensaje = 'El usuario no se encuentra registrado';
            break;
          case 'auth/missing-password':
            titulo = 'Error en Contraseña';
            mensaje = 'La contraseña es incorrecta';
            break;
          default:
            titulo = 'Error';
            mensaje = 'Revisar credenciales';
            break;
        }

        console.log(errorCode);
        Alert.alert(titulo, mensaje);
      });
  }

  return (
    <ImageBackground 
      source={{ uri: 'https://i.pinimg.com/736x/68/24/64/6824645a85e9d32f4d98aa78c52f7860.jpg' }} 
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Correo"
          placeholderTextColor="#ccc"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          placeholderTextColor="#ccc"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={login}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: '100%',
    color: '#000',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});