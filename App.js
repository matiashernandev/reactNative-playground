import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/components/HomeScreen";
import ProfileScreen from "./src/components/PropileScreen";

// Creamos un navegador de pila utilizando createNativeStackNavigator
// Un navegador de pila permite navegar entre pantallas apilándolas una encima de otra
// En React Router v6, podríamos utilizar un componente Routes y definir diferentes rutas utilizando el componente Route
const Stack = createNativeStackNavigator();

const App = () => {
	return (
		// Envuelve la aplicación en un NavigationContainer
		// El NavigationContainer es el componente raíz de la navegación y mantiene el estado de navegación de la aplicación
		// En React Router v6, podríamos utilizar un componente BrowserRouter en su lugar
		<NavigationContainer>
			{/* Agregamos el navegador de pila al NavigationContainer */}
			{/* El navegador de pila se encarga de manejar la navegación entre las pantallas que se agregan a él */}
			{/* En React Router v6, podríamos utilizar un componente Routes en su lugar y definir diferentes rutas utilizando el componente Route */}
			<Stack.Navigator>
				{/* Agregamos las pantallas Home y Profile al navegador de pila */}
				{/* Cada pantalla se define utilizando el componente Stack.Screen y se le asigna un nombre y un componente */}
				{/* El nombre se utiliza para identificar la pantalla y navegar a ella utilizando el método navigate */}
				{/* En React Router v6, podríamos definir diferentes rutas utilizando el componente Route y asignarles un path y un elemento */}
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Profile" component={ProfileScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
