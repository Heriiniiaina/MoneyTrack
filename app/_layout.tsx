// app/_layout.tsx

import Loading from "@/components/Loading";
import { colors } from "@/Constants/Color";
import { Raleway_800ExtraBold, useFonts } from "@expo-google-fonts/raleway";
import { Slot } from "expo-router"; // Gardons Slot pour l'instant
import { View } from "react-native";
// 👈 NOUVEAU : Importez votre conteneur Redux
import { ReduxProvider } from "../components/ReduxProvider";
// 👈 NOUVEAU : Importez le composant qui gère la logique de navigation
import AuthNavigator from "../components/AuthNavigator";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Raleway_800ExtraBold,
  });

  // Gère uniquement le chargement des polices
  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    // 👈 1. ENVELOPPEMENT PRINCIPAL AVEC REDUX
    <ReduxProvider>
      {/* 2. Le composant AuthNavigator gère la redirection basée sur l'état Redux */}
      <AuthNavigator />
    </ReduxProvider>
  );
}

// Composant pour l'affichage de base (peut rester ici ou être déplacé)
export function BaseApp() {
    return (
        <View style={{flex:1,backgroundColor:colors.background}}>
            {/* Slot rendra la route appropriée sélectionnée par AuthNavigator */}
            <Slot />
        </View>
    );
}