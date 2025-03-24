import { createStackNavigator } from "@react-navigation/stack";
import Login from "../../modules/public/Login";

export default function PublicStack({ setSession }) {
    const Stack = createStackNavigator();

    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen 
            name="login" 
            component={Login}
            initialParams={{ setSession }}
            options={{ title: 'Inicio de sesión' }} />
        </Stack.Navigator>
    );
}