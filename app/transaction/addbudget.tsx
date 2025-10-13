import AddBudgetPage from "@/pages/AddBudgetPage";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

type Props = {};

const addbudget = (props: Props) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1}}>
            <AddBudgetPage/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default addbudget;
