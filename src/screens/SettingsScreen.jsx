import { View, Text, Button, SafeAreaView } from "react-native";
export default function SettingsScreen({ navigation }) {
	const goToPage = (page) => {
		navigation.navigate(page);
	};

	return (
		<SafeAreaView>
			<Text>SettingsScreen</Text>
			<Text>SettingsScreen</Text>
			<Text>SettingsScreen</Text>
			<Text>SettingsScreen</Text>
			<Text>SettingsScreen</Text>
			<Text>SettingsScreen</Text>
			<Text>SettingsScreen</Text>
			<Text>SettingsScreen</Text>
			<Text>SettingsScreen</Text>
			<Text>SettingsScreen</Text>
			<Text>SettingsScreen</Text>
			<Text>SettingsScreen</Text>
			<Text>SettingsScreen</Text>
			<Text>SettingsScreen</Text>
			<Text>SettingsScreen</Text>
			<Text>SettingsScreen</Text>
			<Button onPress={() => goToPage("Home")} title="Go Home" />
		</SafeAreaView>
	);
}
