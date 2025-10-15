import SelectedComponents, {
  SelectedType,
} from "@/components/SelectedComponents";
import TitleTransctionComponent from "@/components/TitleTransctionComponent";
import { colors } from "@/Constants/Color";
import { getFontSize } from "@/Constants/utils";
import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

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
    name: "bill",
    value: "bill",
  },
  {
    name: "others",
    value: "others",
  },
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
        <View style={{ padding: 10 }}>
          <Text
            style={{
              color: colors.textColor,
              fontSize: getFontSize(width, "other") - 2,
            }}
          >
            Category
          </Text>
          <SelectedComponents
            item={categoryList}
            setSelected={setCategory}
            selected={category}
          />
        </View>
        <View style={style.input}>
          <Text
            style={{
              color: colors.textColor,
              fontSize: getFontSize(width, "other") - 2,
            }}
          >
            Note
          </Text>
          <TextInput
            style={{
              borderColor: colors.grey,
              borderWidth: 1,
              color: colors.textColor,
              height: height * 0.1,
              borderRadius: 10,
            }}
            multiline={true}
            numberOfLines={4}
          />
        </View>
          <TouchableOpacity style={style.btn}>
            <Text style={{color:colors.textColor, fontSize:getFontSize(width, "max")}}>Add Budget</Text>
          </TouchableOpacity>
       
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
  btn: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: height * 0.1,
    backgroundColor: colors.primary,
    height:height * 0.05,
    margin:10,
    borderRadius:10
  },
});
export default AddBudgetPage;
