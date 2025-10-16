// app/_layout.tsx

import Loading from "@/components/Loading";
import { colors } from "@/Constants/Color";
import { Raleway_800ExtraBold, useFonts } from "@expo-google-fonts/raleway";
import { Slot } from "expo-router";
import { View } from "react-native";
import AuthNavigator from "../components/AuthNavigator";
import { ReduxProvider } from "../components/ReduxProvider";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Raleway_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (

    <ReduxProvider>
      <AuthNavigator />
    </ReduxProvider>
  );
}

export function BaseApp() {
    return (
        <View style={{flex:1,backgroundColor:colors.background}}>
            <Slot />
        </View>
    );
}