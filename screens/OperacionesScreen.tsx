import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { ref, set } from 'firebase/database';
import { db } from '../config/Config';

export default function OperacionesScreen({ navigation }: any) {
  const [id, setOperationId] = useState('');
  const [amount, setAmount] = useState('');
  const [operationType, setOperationType] = useState('');
  const [comment, setComment] = useState('');

  function limpiarCampos() {
    setOperationId("");
    setAmount("");
    setOperationType("");
    setComment("");
  }

  function guardarOperacion() {
    set(ref(db, 'operacion/' + id), {
        monto: amount,
        tipo: operationType,
        comentario: comment
    })
    .then(() => {
      limpiarCampos();
      Alert.alert('Éxito', 'La operación se ha guardado con éxito.');
    })
    .catch((error) => {
      Alert.alert('Error', 'Hubo un problema al guardar la operación.');
      console.error(error);
    });
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Operaciones</Text>
      <TextInput
        style={styles.input}
        placeholder="ID Operación"
        placeholderTextColor="#ccc"
        value={id}
        onChangeText={setOperationId}
      />
      <TextInput
        style={styles.input}
        placeholder="Monto"
        placeholderTextColor="#ccc"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      <TextInput
        style={styles.input}
        placeholder="Tipo de Operación"
        placeholderTextColor="#ccc"
        value={operationType}
        onChangeText={setOperationType}
      />
      <TextInput
        style={styles.input}
        placeholder="Comentario"
        placeholderTextColor="#ccc"
        value={comment}
        onChangeText={setComment}
      />
      <TouchableOpacity style={styles.button} onPress={guardarOperacion}>
        <Text style={styles.buttonText}>Ejecutar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Historial')}>
        <Text style={styles.buttonText}>Ver Historial</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
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
