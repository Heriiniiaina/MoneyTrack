// ProgressBar.js

import React from 'react';
import { StyleSheet, View } from 'react-native';

const ProgressBar = ({ progress = 0, height = 10, color = '#00BFA5', backgroundColor = '#2D2D2D' }) => {
  // S'assure que la progression est entre 0 et 100
  const clampedProgress = Math.min(100, Math.max(0, progress));

  return (
    <View style={[styles.container, { height, backgroundColor }]}>
      <View style={[styles.progressBar, { width: `${clampedProgress}%`, backgroundColor: progress < 90 ? color : "red" }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 8,
    overflow: 'hidden', // Important pour que la barre intérieure ait des coins arrondis
  },
  progressBar: {
    height: '100%',
    borderRadius: 8,
  },
});

export default ProgressBar;