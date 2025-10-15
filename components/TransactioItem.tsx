import { colors } from "@/Constants/Color";
import { getFontSize } from "@/Constants/utils";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import LineHr from "./LineHr";

type Props = {
  type: "income" | "expense";
  note?: string;
};
const { width } = Dimensions.get("window");
let iconSize = width * 0.061;
if (width < 400) iconSize = width * 0.055;



const TransactioItem = ({ type, note }: Props) => {
  const color = type == "income" ? colors.primary : "red";
  return (
    <View>
      <View style={style.container}>
        <View style={style.item}>
          <View style={style.icon}>
            <AntDesign
              name="dollar"
              size={iconSize}
              style={{ color: color, padding: 5 }}
            />
          </View>
          <View>
            <Text
              style={{
                color: colors.textColor,
                fontSize: getFontSize(width, "max") - 3,
              }}
            >
              Salary
            </Text>
            {note ? (
              <Text
                style={{
                  color: colors.grey,
                  fontSize: getFontSize(width, "min") - 2,
                }}
              >
                {note}
              </Text>
            ) : null}
          </View>
        </View>
        <View>
          <Text
            style={{ fontSize: getFontSize(width, "min"), color: color }}
          >
            {type == "income" ? "+" : "-"} $400
          </Text>
        </View>
      </View>
      <LineHr/>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  icon: {
    width: iconSize + 20,
    height: iconSize + 20,
    backgroundColor: colors.grey,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});

export default TransactioItem;
