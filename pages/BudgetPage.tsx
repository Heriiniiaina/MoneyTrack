import BudgetView from "@/components/BudgetView";
import MyBudgetTitle from "@/components/MyBudgetTitle";
import TitleTransctionComponent from "@/components/TitleTransctionComponent";
import { colors } from "@/Constants/Color";
import { sortBydate } from "@/Constants/SortByDate";
import { BudgetType } from "@/Constants/type";
import { calculPercent } from "@/Constants/utils";
import { RootState } from "@/store/store";
import React from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";

type Props = {};

const { height, width } = Dimensions.get("window");
const TAB_BAR_HEIGHT = height * 0.11;
const BudgetPage = (props: Props) => {
  const budget:BudgetType[]= useSelector((state:RootState)=>state.budget.budget)
  const sorted:BudgetType[] = sortBydate(budget)
  return (
    <ScrollView
      style={style.container}
      contentContainerStyle={{ paddingBottom: TAB_BAR_HEIGHT + 20 }}
      showsVerticalScrollIndicator={true}
    >
      <View style={style.container}>
            <TitleTransctionComponent route={"/(tabs)"} text="Budget" width={width}/>
            <MyBudgetTitle />
            {
              sorted.map((budg, index)=>(
                <BudgetView  budget={budg} key={index} progress={calculPercent(Number(budg.amount), Number(budg.used))}/>
              ))
            }
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
export default BudgetPage;
