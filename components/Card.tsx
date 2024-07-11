import { Alert, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Card(props: any) {
    

    return (
        <TouchableOpacity >
            <View style={styles.container}>
                <Text style={styles.txt}>Nombre: {props.data.comentario}</Text>
                <Text style={styles.txt}>Especie: {props.data.monto}</Text>
                <Text style={styles.txt}>Edad: {props.data.tipo}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f0f4f8',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginVertical: 10,
        marginHorizontal: 20,
        borderRadius: 12,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    txt: {
        fontSize: 18,
        color: '#333',
        marginVertical: 4,
    }
});
