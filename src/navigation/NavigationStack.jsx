import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen.jsx";
import SettingsScreen from "../screens/SettingsScreen.jsx";

const Stack = createNativeStackNavigator();
export default function NavigationStack() {
	return (
		<Stack.Navigator initialRouteName="Settings">
			<Stack.Screen name="Home" component={HomeScreen} />
			<Stack.Screen name="Settings" component={SettingsScreen} />
		</Stack.Navigator>
	);
}
