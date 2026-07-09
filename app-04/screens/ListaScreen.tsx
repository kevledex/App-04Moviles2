import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function ListaScreen() {

    const [videojuegos, setvideojuegos] = useState([])

    useEffect(() => {
        cargarDatos()
        console.log(videojuegos)

    }, [])

    async function cargarDatos() {
        const resp = await fetch('https://jritsqmet.github.io/web-api/video_juegos.json');
        const json = await resp.json();
        setvideojuegos(json.videojuegos);
    }

    type juego = {
        titulo: String
        precio: Number
    }

    return (
        <View>
            <Text>ListaScreen</Text>
            <FlatList
                data={videojuegos}
                renderItem={({ item }: { item: juego }) =>
                    <Text>{item.titulo}</Text>
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({})