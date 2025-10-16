import { colors } from "@/Constants/Color";
import { capitalize, getFontSize } from "@/Constants/utils";
import { AntDesign, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
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
const iconSize = width < 400 ? width * 0.05 : width * 0.06;
export const getIconName = (name: string): JSX.Element => {
  if (name == "health")
    return <FontAwesome name="heartbeat" size={iconSize} style={style.icon} />;
  if (name == "shopping")
    return <AntDesign name="shop" size={iconSize} style={style.icon} />;
  if (name == "bill")
    return <FontAwesome name="money" size={iconSize} style={style.icon} />;
  if (name == "freelance")
    return <FontAwesome5 name="handshake" size={iconSize} style={style.icon} />;
  if (name == "business")
    return <FontAwesome name="building" size={iconSize} style={style.icon} />;
  if (name == "rent")
    return <FontAwesome5 name="home" size={iconSize} style={style.icon} />;
  if (name == "rental")
    return <FontAwesome5 name="home" size={iconSize} style={style.icon} />;
  if (name == "food")
    return <FontAwesome5 name="utensils" size={iconSize} style={style.icon} />;
  if (name == "education")
    return <FontAwesome5 name="graduation-cap" size={iconSize} style={style.icon} />;
  if (name == "travel")
    return <FontAwesome5 name="plane" size={iconSize} style={style.icon} />;
  if (name == "transport")
    return <FontAwesome5 name="car" size={iconSize} style={style.icon} />;
  if (name == "debt")
    return <FontAwesome5 name="credit-card" size={iconSize} style={style.icon} />;
  if (name == "salary")
    return <AntDesign name="dollar" size={iconSize} style={style.icon} />;
  return <AntDesign name="ellipsis" size={iconSize} style={style.icon} />;
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
    height: iconSize + 40,
    width: iconSize + 40,
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
