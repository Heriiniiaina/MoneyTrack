import Loading from "@/components/Loading";
import { Raleway_800ExtraBold, useFonts } from '@expo-google-fonts/raleway';
import { Slot, useRouter, useSegments } from "expo-router";
import { useEffect, useState } from "react";
export default function RootLayout() {
  const segments = useSegments();
  const router = useRouter();
  const [fontsLoaded] = useFonts({
    Raleway_800ExtraBold,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(false);
      setIsLoading(false);
    }, 200);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      if (!isLoggedIn) {
        router.replace("/auth/login");
      } else if (isLoggedIn) {
        router.replace("/(tabs)");
      }
    }
  }, [isLoading, isLoggedIn]);

  if (isLoading) {
    return <Loading />;
  }

  return <Slot />;
}
