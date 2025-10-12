import TitleTransctionComponent from "@/components/TitleTransctionComponent";
import { colors } from "@/Constants/Color";
import React from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";

type Props = {};

const { height, width } = Dimensions.get("window");
const TAB_BAR_HEIGHT = height * 0.11;
const BudgetPage = (props: Props) => {
  return (
    <ScrollView
      style={style.container}
      contentContainerStyle={{ paddingBottom: TAB_BAR_HEIGHT + 20 }} // padding pour éviter d'être caché par la tabBar
      showsVerticalScrollIndicator={true}
    >
      <View style={style.container}>
            <TitleTransctionComponent route={"/(tabs)"} text="Budget" width={width}/>
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
