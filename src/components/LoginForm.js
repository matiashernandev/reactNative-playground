import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function LoginForm() {
	const [nombre, setNombre] = useState("");
	const [apellido, setApellido] = useState("");

	return (
		<View>
			<Text>Otro sarasa</Text>
			<TextInput
				onChangeText={(text) => setNombre(text)}
				placeholder="Nombre"
			/>
			<TextInput
				onChangeText={(text) => setApellido(text)}
				placeholder="Apellido"
			/>
			<Button
				onPress={(e) => console.log(nombre, apellido)}
				title="Título Botón"
			/>
		</View>
	);
}
