import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Tarjeta2(props: any) {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: props.datos.imagen }}
                style={styles.img}
            />

            <View style={styles.txtContainer}>
                <Text style={styles.txttitulo}>{props.datos.titulo}</Text>

                <Text style={styles.txtdescripcion}>
                    {props.datos.descripcion}
                </Text>

                <Text style={styles.txtinfo}>
                    Plataformas: {props.datos.plataforma.join(', ')}
                </Text>

                <Text style={styles.txtinfo}>
                    Géneros: {props.datos.genero.join(', ')}
                </Text>

                <Text style={styles.txtinfo}>
                    Desarrollador: {props.datos.desarrollador}
                </Text>

                <Text style={styles.txtinfo}>
                    Lanzamiento: {props.datos.lanzamiento}
                </Text>

                <Text style={styles.txtprecio}>
                    Precio: ${props.datos.precio}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#2C2C2C",
        marginHorizontal: 15,
        marginVertical: 10,
        borderRadius: 15,
        overflow: 'hidden',
    },
    img: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
    txtContainer: {
        padding: 15,
    },
    txttitulo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 6,
    },
    txtdescripcion: {
        fontSize: 13,
        color: '#d1d1d1',
        marginBottom: 10,
    },
    txtinfo: {
        fontSize: 12,
        color: '#aaaaaa',
        marginBottom: 3,
    },
    txtprecio: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#00FFCC',
        marginTop: 8,
    }
})