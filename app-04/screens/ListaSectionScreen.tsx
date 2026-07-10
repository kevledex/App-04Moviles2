import { SectionList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Tarjeta from '../components/Tarjeta'

export default function ListaSectionScreen() {

    const [datos, setdatos] = useState<any>([])

    useEffect(() => {
        cargarDatos()
    }, [])

    async function cargarDatos() {
        const resp = await fetch('https://jritsqmet.github.io/web-api/assets/data/api2/sections/crash-s.json');
        const json = await resp.json();
        setdatos(json);
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#1E1E1E' }}>
            <Text style={styles.titulo}>ListaSectionScreen</Text>

            <SectionList
                sections={datos}
                keyExtractor={(item) => item.id}

                renderItem={({ item }) => (
                    <Tarjeta datos={item} />
                )}

                renderSectionHeader={({ section }) => (
                    <Text style={styles.barraTitulo}>{section.title}</Text>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    titulo: {
        fontSize: 20,
        color: '#ffffff',
        textAlign: 'center',
        marginVertical: 10,
    },
    barraTitulo: {
        fontWeight: 'bold',
        fontSize: 28,
        color: '#ffffff',
        backgroundColor: '#616161',
        paddingVertical: 5,
        paddingHorizontal: 15,
        marginVertical: 10,
    }
})