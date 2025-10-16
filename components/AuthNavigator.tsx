import type { RootState } from "@/store/store";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { BaseApp } from "../app/_layout";

export default function AuthNavigator() {
  const router = useRouter();

  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticiated
  );

  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/(tabs)");
    } else {
      router.replace("/auth/login");
    }
  }, [isAuthenticated, router]);
  return <BaseApp />;
}
