import { StyleSheet, Text, TouchableOpacity, View, Image, Modal, Button } from 'react-native'
import React, { useState } from 'react'

export default function Tarjeta(props: any) {

    const [ocultarModal, setocultarModal] = useState(false)

    return (
        <View
            style={styles.container}
        >
            <Image
                source={{ uri: props.datos.image }}
                style={styles.img}
            />

            <View style={styles.txtContainer}>
                <Text style={styles.txtnombre}>{props.datos.name}</Text>

                <Text style={styles.txtdescripcion}>
                    {props.datos.description}
                </Text>

                <Text style={styles.txtatributos}>
                    Atributos: {props.datos.atributos.join(', ')}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#979797",
        margin: 10,
        borderRadius: 15,
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    img: {
        width: 80,
        height: 100,
        resizeMode: 'contain',
        marginRight: 15,
    },
    txtContainer: {
        flex: 1,
    },
    txtnombre: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    txtdescripcion: {
        fontSize: 13,
        color: '#ffffff',
        marginBottom: 6,
    },
    txtatributos: {
        fontSize: 12,
        fontWeight: 'bold'
    }
})