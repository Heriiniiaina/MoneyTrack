import { colors } from "@/Constants/Color";
import { capitalize, getFontSize } from "@/Constants/utils";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import React, { JSX, SetStateAction } from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const {width} = Dimensions.get("window")
export type SelectedType = {
  name: string;
  value: string;
};

type Props = {
  item: SelectedType[],
  setSelected:React.Dispatch<SetStateAction<string>>,
  selected:string
 
};
const iconSize = width < 400 ? width * 0.03 : 0.05;
export const getIconName = (name: string): JSX.Element => {
  if (name == "health")
    return <FontAwesome name="heartbeat" size={iconSize} style={style.icon} />;
  if (name == "shopping")
    return <AntDesign name="shop" size={iconSize} style={style.icon} />;
  if (name == "bill")
    return <FontAwesome name="money" size={iconSize} style={style.icon} />;
  return <AntDesign name="heart" size={iconSize} style={style.icon} />;
};

const SelectedComponents = ({ item, setSelected, selected }: Props) => {
    const handleClick = (name:string)=>{
        setSelected(name)
        console.log("Clicked:", selected);
    }
  return (
    <View style={style.container}>
      {item.map((it, index) => {
        const isSelected = it.name === selected
        return (
            <TouchableOpacity key={index} style={[style.iconContain, {borderColor:isSelected ? colors.primary : colors.textColor}]} onPress={()=>handleClick(it.name)}>
              <View style={{alignItems:"center"}}>
                {getIconName(it.name)}
                <Text style={{fontSize:getFontSize(width, "min")- 2, color:isSelected ? colors.primary : colors.textColor}}>{capitalize(it.name)}</Text>
              </View>
            </TouchableOpacity>
        );
      })}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
    padding:10
  },
  iconContain: {
    height: iconSize + 30,
    width: iconSize + 30,
    borderWidth: 1,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:10
  },
  icon: {
    color: colors.textColor,
  },
});
export default SelectedComponents;
