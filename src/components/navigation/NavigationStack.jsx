import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
export default function NavigationStack() {
	return <Stack.Navigator></Stack.Navigator>;
}
