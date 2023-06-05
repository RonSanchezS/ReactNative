import React from "react";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import MostrarValor from "./MostrarValor";
const FormPersona = () => {
    const [nombre, setNombre] = useState("");
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Formulario de Persona</Text>
            <Text>Nombre</Text>
            <TextInput value={nombre} style={styles.textfield} onChangeText={setNombre} />
            <MostrarValor nombre={"Nombre"} valor={nombre} />
            <TouchableOpacity style={styles.button} onPress={() => setNombre("")}>
                <Text style={styles.innerText}>Limpiar</Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    textfield: {
        borderColor: "gray",
        borderWidth: 1,
    },
    header: {
        marginTop: 20,
        fontSize: 20,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#000000",
        padding: 10,
        marginTop: 10,
    },
    innerText: {
        color: "#ffffff",
    },
});
export default FormPersona;
