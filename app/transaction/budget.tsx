import BudgetPage from "@/pages/BudgetPage";
import React from "react";
import { View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

type Props = {};

const budget = (props: Props) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
             <BudgetPage/>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default budget;
