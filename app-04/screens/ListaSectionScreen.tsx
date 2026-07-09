import { SectionList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function ListaSectionScreen() {

    const [datos, setdatos] = useState([])

    useEffect(() => {
        cargarDatos()
        //console.log(datos)

    }, [])

    async function cargarDatos() {
        const resp = await fetch('https://jritsqmet.github.io/web-api/assets/data/api2/sections/crash-s.json');
        const json = await resp.json();
        setdatos(json);
    }

    return (
        <View>
            <Text>ListaSectionScreen</Text>
            <SectionList
                sections={datos}
                renderItem={({ item }) =>
                    <Text>{item.name}</Text>
                }

                renderSectionHeader={({ section }) => 
                <Text style={{fontWeight: 'bold', fontSize: 35}}>{section.title}</Text>
            }
            />
        </View>
    )
}

const styles = StyleSheet.create({})