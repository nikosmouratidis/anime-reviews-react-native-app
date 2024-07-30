import { useFonts } from "expo-font"
import { useEffect } from "react"
import * as SplashScreen from "expo-splash-screen"

import Home from "./screens/Home"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import ReviewDetails from "./screens/ReviewDetails"
import About from "./screens/About"
import { RootStackParamList, DrawerParamList } from "./@types"
import { StatusBar } from "expo-status-bar"
import { createDrawerNavigator } from "@react-navigation/drawer"

const Stack = createNativeStackNavigator<RootStackParamList>()
const Drawer = createDrawerNavigator<DrawerParamList>()

const DrawerNavigator = () => (
  <Drawer.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "#FACB80" },
      headerTintColor: "black",
      sceneContainerStyle: { backgroundColor: "#F69770" },
      drawerStyle: {
        backgroundColor: "#FACB80",
        width: 240,
      },
    }}
  >
    <Drawer.Screen
      name="Home"
      component={Home}
      options={{
        title: "Home",
      }}
    />
    <Drawer.Screen name="About" component={About} />
  </Drawer.Navigator>
)

export default function App() {
  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  })

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerBackTitleVisible: false,
            headerStyle: { backgroundColor: "#FACB80" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#F69770" },
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ReviewDetails"
            component={ReviewDetails}
            options={({ route }) => ({
              title: route.params.title,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}
