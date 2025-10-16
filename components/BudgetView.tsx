import { colors } from "@/Constants/Color";
import { CardType } from "@/Constants/type";
import { capitalize, getFontSize } from "@/Constants/utils";
import { AntDesign, Entypo } from "@expo/vector-icons";
import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import ProgressBar from "./HorizontalProgressBar";
type Props = {
 card:CardType,
 progress:number
};
const {width} = Dimensions.get("window")

const iconSize = width < 400 ? width * 0.06 : width * 0.07

const BudgetView = ({ card, progress}: Props) => {
  return (
    <View style={style.container}>
      <View style={style.title}>
        <View style={style.iconStyle}>
          <View style={[{ backgroundColor: card.background, width:iconSize+10, height:iconSize+10, justifyContent:"center", alignItems:"center", borderRadius:10 }]}>
            <AntDesign name={card.name} style={{ color: card.color }} size={iconSize}/>
          </View>
          <View>
            <Text style={{color:colors.textColor}}>{capitalize(card.title)}</Text>
          </View>
        </View>
        <View>
            <Entypo style={{color:colors.textColor}} name="dots-three-vertical"/>
        </View>
      </View>
      <View style={{flexDirection:"row", justifyContent:"space-between"}}>
        <Text style={{color:colors.textColor, fontSize:getFontSize(width, "max")}}>Ar 190</Text>
        <Text style={{color:colors.textColor, fontSize:getFontSize(width, "min")}}>{progress}%</Text>
      </View>
      <View>
        <ProgressBar progress={progress} height={5} color={colors.primary}/>
      </View>
      <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
         <Text style={{color:colors.textColor, fontSize:getFontSize(width, "min")}}>Ar120</Text>
         <Text style={{color:colors.textColor, fontSize:getFontSize(width, "min")}}>Ar 60 left</Text>
      </View>
    </View>
  );
};


const style = StyleSheet.create({
container:{
    padding:20,
    gap:10,
    backgroundColor:colors.grey,
    margin:"2%",
    borderRadius:10
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
