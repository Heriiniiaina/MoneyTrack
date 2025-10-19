import { colors } from '@/Constants/Color';
import { BudgetType } from '@/Constants/type';
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { getIconName } from './SelectedComponents';

type Props = {
  progress?:number,
  radius?:number,
  strokeWidth?:number,
  color?:string,
  type?:string,
  budget:BudgetType
}
const {width} = Dimensions.get("window")
const iconSize = width < 400 ? width * 0.05 : width * 0.06;
const CircularProgressIcon = ({ progress = 75, radius = iconSize, strokeWidth = 2, color = '#3498db', type = "heart" , budget}:Props) => {
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;
  return (
    <View style={styles.container}>
      <Svg height={radius * 2} width={radius * 2}>
       
        <Circle
          stroke={colors.background}
          fill="none"
          cx={radius}
          cy={radius}
          r={normalizedRadius}
          strokeWidth={strokeWidth}
        />
        <Circle
          stroke={colors.primary}
          fill="none"
          cx={radius}
          cy={radius}
          r={normalizedRadius}
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          rotation="-90"
          originX={radius}
          originY={radius}
        />
      </Svg>
      <View style={[styles.iconWrapper, { width: radius * 2, height: radius * 2 }]}>
        {
          getIconName(budget.category, true)
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconWrapper: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CircularProgressIcon;
