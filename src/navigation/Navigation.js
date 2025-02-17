import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import LudoBoardscreen from "../screens/LudoBoardscreen";
import HomeScreen from "../screens/HomeScreen";
import SplashScreen from "../screens/SplashScreen";
import { navigationRef } from "../helpers/NavigationUtil";

const Stack=createNativeStackNavigator();

function Navigation(){
    return(
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator
                initialRouteName="SplashScreen"
                screenOptions={()=>({headerShown:false})}
                >
                <Stack.Screen name="LudoBoardScreen" options={{animation:'fade'}} component={LudoBoardscreen} />
                <Stack.Screen name="HomeScreen" options={{animation:'fade'}} component={HomeScreen}/>
                <Stack.Screen name="SplashScreen" options={{animation:'fade'}} component={SplashScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}