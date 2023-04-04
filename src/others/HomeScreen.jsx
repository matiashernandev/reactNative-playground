import { Button, Text, View } from "react-native";

export default function HomeScreen({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>Home Screen</Text>
			{/* Agregamos un botón que al presionarse navega a la pantalla Profile */}
			{/* Utilizamos el método navigate del objeto navigation para navegar a la pantalla Profile */}
			{/* En React Router v6, podríamos utilizar el hook useNavigate para obtener la función navigate y utilizarla para navegar a otra ruta */}
			<Button
				title="Ir al perfil"
				onPress={() => navigation.navigate("Profile")}
			/>
		</View>
	);
}
