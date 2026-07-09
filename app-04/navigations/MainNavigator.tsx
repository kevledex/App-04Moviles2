import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import WelcomeScreem from '../screens/WelcomeScreem';
import ListaScreen from '../screens/ListaScreen';
import ListaSectionScreen from '../screens/ListaSectionScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

//STACK
function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Welcome' component={WelcomeScreem} />
            <Stack.Screen name='Drawer' component={MyDrawer} />
        </Stack.Navigator>
    )
}

//DRAWER
function MyDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='Lista' component={ListaScreen} />
            <Drawer.Screen name='Seccion' component={ListaSectionScreen} />
        </Drawer.Navigator>
    )
}

export function MainNavigator() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
}