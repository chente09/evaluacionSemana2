import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import OperacionesScreen from '../screens/OperacionesScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HistorialScreen from '../screens/HistorialScreen';
import PerfilScreen from '../screens/PerfilScreen';
import RegistroScreen from '../screens/RegistroScreen';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator  initialRouteName='Welcome'>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Registro" component={RegistroScreen} />
      <Stack.Screen name="Operaciones" component={OperacionesScreen} />
      <Stack.Screen name="Historial" component={MyTabs} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown:false}} >
      <Tab.Screen name="Historial" component={HistorialScreen} />
      <Tab.Screen name="Perfil" component={PerfilScreen} />
    </Tab.Navigator>
  );
}


export default function Navegacion(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}