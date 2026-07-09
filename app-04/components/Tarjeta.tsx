import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function Tarjeta(props: any) {

    const [ocultarModal, setocultarModal] = useState(false)

    return (

        <TouchableOpacity
            onPress={() => setocultarModal(!ocultarModal)}
            style={styles.container}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#6C8196",
        margin: 10,
        borderRadius: 15,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
    }
})