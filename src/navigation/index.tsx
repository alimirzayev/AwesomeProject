import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../models";
import { HomeScreen } from "../screens";

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={"HomeScreen"} component={HomeScreen} />
        </Stack.Navigator>
    )
}

export default Navigator