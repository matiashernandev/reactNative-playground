import { View, Text, Button } from "react-native";

export default function HomeScreen({ navigation }) {
	//console.log(navigation);

	return (
		<View>
			<Text>HomeScreen</Text>
			<Text>HomeScreen</Text>
			<Text>HomeScreen</Text>
			<Text>HomeScreen</Text>
			<Text>HomeScreen</Text>
			<Text>HomeScreen</Text>
			<Text>HomeScreen</Text>
			<Text>HomeScreen</Text>
			<Text>HomeScreen</Text>
			<Text>HomeScreen</Text>
			<Text>HomeScreen</Text>
			<Text>HomeScreen</Text>
			<Text>HomeScreen</Text>
			<Button
				onPress={() => navigation.navigate("Settings")}
				title="Go Settings"
			/>
		</View>
	);
}
