import { Text } from "react-native";

const MostrarValor = ({ nombre, valor }) => {
    return (
        <Text>El {nombre} es {valor}</Text>
    );
}

export default MostrarValor;