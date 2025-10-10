import { colors } from "@/Constants/Color";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
type Props = {};

const Balance = (props: Props) => {
  return (
    <LinearGradient
      colors={[colors.background, colors.primary]}
      start={{ x: 0.5, y: 0.0 }}
      end={{ x: 0.5, y: 2.0 }}
      style={style.gradientContainer}
    >
      <View style={style.container}>
        <View style={style.totalBalance}>
          <View>
            <Text style={{ color: colors.textColor, fontSize: 15 }}>
              Total balance
            </Text>
            <Text style={{ color: colors.textColor, fontSize: 20 }}>
              Ar. 390000
            </Text>
          </View>
          <View>
            <Text style={[{ color: colors.textColor }, style.date]}>
              Sep 2025
            </Text>
          </View>
        </View>
        <View style={style.transactionBalance}>
          <View style={style.transaction}>
            <View style={[style.transactionIcon, {backgroundColor:colors.primary}]}>
              <Feather
                style={{ color: colors.textColor }}
                name="arrow-up"
                size={20}
              />
            </View>
            <View>
              <Text style={{ color: colors.textColor }}>Income</Text>
              <Text style={{ color: colors.textColor }}>Ar. 10000</Text>
            </View>
          </View>
          <View style={style.transaction}>
            <View style={[{backgroundColor:"red"}, style.transactionIcon ]}>
              <Feather
                style={{ color: colors.textColor }}
                name="arrow-down"
                size={20}
              />
            </View>
            <View>
              <Text style={{ color: colors.textColor }}>Expense</Text>
              <Text style={{ color: colors.textColor }}>Ar. 10000</Text>
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const style = StyleSheet.create({
  gradientContainer: {
    padding: 10,
    margin: 10,
    borderRadius: 20,
  },
  container: {
    justifyContent: "center",
    padding: 10,
    gap: 20,
  },
  totalBalance: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  transactionBalance: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  date: {
    borderColor: colors.textColor,
    borderWidth: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
    padding: 5,
    borderRadius: 10,
  },
  transaction:{
    flexDirection:"row",
    alignItems:"center",
    gap:5
  },
  transactionIcon:{
    borderRadius:50,
    padding:2
  }
});
export default Balance;
