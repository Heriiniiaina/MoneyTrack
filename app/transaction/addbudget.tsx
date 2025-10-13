import AddBudgetPage from "@/pages/AddBudgetPage";
import React from "react";
import { View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

type Props = {};

const addbudget = (props: Props) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
             <AddBudgetPage/>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default addbudget;
