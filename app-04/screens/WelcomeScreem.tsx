import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function WelcomeScreem({ navigation }: any) {
    return (
        <View>
            <Text>WelcomeScreem</Text>
            <Button
                title='Ir a Listas'
                onPress={() => navigation.navigate("Drawer")} />
        </View>
    )
}

const styles = StyleSheet.create({})