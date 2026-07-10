import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Tarjeta2 from '../components/Tarjeta2'

type juego = {
    titulo: string
    plataforma: string[]
    genero: string[]
    desarrollador: string
    precio: number
    lanzamiento: string
    descripcion: string
    imagen: string
}

export default function ListaScreen() {

    const [videojuegos, setvideojuegos] = useState<juego[]>([])

    useEffect(() => {
        cargarDatos()
    }, [])

    async function cargarDatos() {
        const resp = await fetch('https://jritsqmet.github.io/web-api/video_juegos.json');
        const json = await resp.json();
        setvideojuegos(json.videojuegos);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Lista de Videojuegos</Text>

            <FlatList
                data={videojuegos}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }: { item: juego }) => (
                    <Tarjeta2 datos={item} />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1E1E',
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
        marginVertical: 15,
    }
})