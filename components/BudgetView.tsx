import { AntDesignTypeName } from "@/Constants/type";
import { capitalize } from "@/Constants/utils";
import { AntDesign, Entypo } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ProgressBar from "./HorizontalProgressBar";

type Props = {
  name: AntDesignTypeName;
  color: string;
  backgroundColor: string;
  type: string;
};

const BudgetView = ({ name, color, backgroundColor, type }: Props) => {
  return (
    <View style={style.container}>
      <View style={style.title}>
        <View style={style.iconStyle}>
          <View style={[{ backgroundColor: backgroundColor }]}>
            <AntDesign name={name} style={{ color: color }} />
          </View>
          <View>
            <Text>{capitalize(type)}</Text>
          </View>
        </View>
        <View>
            <Entypo name="dots-three-vertical"/>
        </View>
      </View>
      <View style={{flexDirection:"row", justifyContent:"space-between"}}>
        <Text>Ar 190</Text>
        <Text>50%</Text>
      </View>
      <View>
        <ProgressBar progress={51} height={5}/>
      </View>
    </View>
  );
};


const style = StyleSheet.create({
container:{
    padding:10
    },
  iconStyle: {
    flexDirection:"row",
    alignItems:"center",
    gap:10
  },
  title:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"
  }

});
export default BudgetView;
