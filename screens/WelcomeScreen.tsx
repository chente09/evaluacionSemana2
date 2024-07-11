import { StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native'
import React from 'react'

export default function WelcomeScreen({ navigation }: any) {
  return (
    <ImageBackground 
      source={{ uri: 'https://i.pinimg.com/736x/68/24/64/6824645a85e9d32f4d98aa78c52f7860.jpg' }} 
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={{color:'black', fontSize:60,fontWeight: 'bold',}}>WELCOME</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Registro')}>
          <Text style={styles.buttonText}>Regístrate</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
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
})
