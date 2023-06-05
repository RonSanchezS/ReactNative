import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
const Calculadora = () => {
    const [result, setResult] = useState("");
    const [numeroEnMemoria, setNumeroEnMemoria] = useState(0);
    const [operacionActual, setOperacionActual] = useState("ninguna");
    const addNumber = (number) => {
        if (result === "0") {
            setResult(number);
            return;
        }
        setResult(result + number);
    };
    const hacerSuma = () => {
        setOperacionActual("suma");
        setNumeroEnMemoria(result);
        setResult("0");
    };
    const hacerResta = () => {
        setOperacionActual("resta");
        setNumeroEnMemoria(result);
        setResult("0");
    };
    const hacerMultiplicacion = () => {
        setOperacionActual("multiplicacion");
        setNumeroEnMemoria(result);
        setResult("0");
    };
    const hacerDivision = () => {
        setOperacionActual("division");
        setNumeroEnMemoria(result);
        setResult("0");
    };
    const hacerIgual = () => {
        if (operacionActual === "suma") {
            setResult(parseInt(numeroEnMemoria) + parseInt(result));
        }
        if (operacionActual === "resta") {
            setResult(parseInt(numeroEnMemoria) - parseInt(result));
        }
        if (operacionActual === "multiplicacion") {
            setResult(parseInt(numeroEnMemoria) * parseInt(result));
        }
        if (operacionActual === "division") {
            setResult(parseInt(numeroEnMemoria) / parseInt(result));
        }
    };
    return (
        <View style={styles.container}>
            <Text>{result ? result : "0"}</Text>
            <Text>{numeroEnMemoria}</Text>
            <Text>{operacionActual}</Text>
            <View style={styles.botones}>
                <TouchableOpacity
                    style={styles.boton}
                    onPress={() => {
                        addNumber(1);
                    }}>
                    <Text>1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.boton}
                    onPress={() => {
                        addNumber(2);
                    }}>
                    <Text>2</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.boton}
                    onPress={() => {
                        addNumber(3);
                    }}>
                    <Text>3</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.botones}>
                <TouchableOpacity
                    style={styles.boton}
                    onPress={() => {
                        addNumber(4);
                    }}>
                    <Text>4</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.boton}
                    onPress={() => {
                        addNumber(5);
                    }}>
                    <Text>5</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.boton}
                    onPress={() => {
                        addNumber(6);
                    }}>
                    <Text>6</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.botones}>
                <TouchableOpacity
                    style={styles.boton}
                    onPress={() => {
                        addNumber(7);
                    }}>
                    <Text>7</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.boton}
                    onPress={() => {
                        addNumber(8);
                    }}>
                    <Text>8</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.boton}
                    onPress={() => {
                        addNumber(9);
                    }}>
                    <Text>9</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.botones}>
                <TouchableOpacity
                    style={styles.boton}
                    onPress={() => {
                        addNumber(0);
                    }}>
                    <Text>0</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.botones}>
                <TouchableOpacity style={styles.boton} onPress={hacerSuma}>
                    <Text>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.boton} onPress={hacerResta}>
                    <Text>-</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.boton} onPress={hacerMultiplicacion}>
                    <Text>x</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.boton} onPress={hacerDivision}>
                    <Text>/</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.boton} onPress={hacerIgual}>
                    <Text>=</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    botones: {
        flexDirection: "row",
    },
    boton: {
        flex: 1,
        backgroundColor: "#cccccc",
        padding: 10,
        textAlign: "center",
        margin: 5,
    },
});

export default Calculadora;
