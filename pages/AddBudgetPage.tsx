import SelectedComponents, {
  SelectedType,
} from "@/components/SelectedComponents";
import TitleTransctionComponent from "@/components/TitleTransctionComponent";
import { colors } from "@/Constants/Color";
import { getFontSize } from "@/Constants/utils";
import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";

type Props = {};

const { width, height } = Dimensions.get("window");
const categoryList: SelectedType[] = [
  {
    name: "health",
    value: "health",
  },
  {
    name: "transport",
    value: "transport",
  },
  {
    name: "shopping",
    value: "shopping",
  },
  {
    name: "health",
    value: "health",
  },
  {
    name:"others",
    value:"others"
  }
];
const AddBudgetPage = (props: Props) => {
  const [category, setCategory] = useState<string>("");
  return (
    <View style={style.container}>
      <View>
        <TitleTransctionComponent
          route={"/(tabs)/budget"}
          text="Add budget"
          width={width}
        />
        <View style={style.input}>
          <Text
            style={{
              fontSize: getFontSize(width, "other") - 2,
              color: colors.textColor,
            }}
          >
            Amount limit
          </Text>
          <TextInput
            style={style.textInput}
            placeholder="Amount"
            placeholderTextColor={colors.placeholder}
          />
        </View>
        <View style={{padding:10}}>
          <Text style={{color:colors.textColor, fontSize:getFontSize(width, "other") - 2}}>Category</Text>
          <SelectedComponents item={categoryList} setSelected={setCategory}/>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  input: {
    padding: 10,
    gap: 10,
  },
  textInput: {
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.grey,
    padding: 5,
    borderRadius: 10,
    color: colors.textColor,
    fontSize: getFontSize(width, "min"),
    height: height * 0.07,
  },
});
export default AddBudgetPage;
