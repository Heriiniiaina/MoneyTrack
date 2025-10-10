import { FontAwesome } from '@expo/vector-icons'; // Ou une autre lib d'icônes
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const CircularProgressIcon = ({ progress = 75, radius = 40, strokeWidth = 8, color = '#3498db' }) => {
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <View style={styles.container}>
      <Svg height={radius * 2} width={radius * 2}>
        {/* Cercle de fond */}
        <Circle
          stroke="#e6e6e6"
          fill="none"
          cx={radius}
          cy={radius}
          r={normalizedRadius}
          strokeWidth={strokeWidth}
        />
        {/* Cercle de progression */}
        <Circle
          stroke={color}
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
      {/* Icône centrée */}
      <View style={[styles.iconWrapper, { width: radius * 2, height: radius * 2 }]}>
        <FontAwesome name="heart" size={radius} color="#333" />
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
