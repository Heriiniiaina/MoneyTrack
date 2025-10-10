import { colors } from '@/Constants/Color';
import { FontAwesome } from '@expo/vector-icons'; // Ou une autre lib d'icônes
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const {width} = Dimensions.get("window")
let iconSize = width * 0.038;
if (width < 400)
    iconSize = width * 0.029
const CircularProgressIcon = ({ progress = 75, radius = iconSize, strokeWidth = 2, color = '#3498db', type = "heart" }) => {
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
        <FontAwesome name={type} size={radius} color={colors.textColor} />
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
