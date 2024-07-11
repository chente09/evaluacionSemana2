import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { onValue, ref } from 'firebase/database'
import { db } from '../config/Config'

export default function HistorialScreen() {
  const [lista, setlista] = useState([])

  useEffect(() => {
    leer()
  }, [])

  function leer() {
    const starCountRef = ref(db, 'operacion/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);

      //TRANSFORMAR
      const listaTemporal: any = Object.keys(data).map((id) => ({ id, ...data[id] }))
      console.log(listaTemporal);

      setlista(listaTemporal)
    });
  }
  return (
    <View>
      <FlatList
        data={lista}
        renderItem={({ item }) =>
          <Card data={item} />
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({})