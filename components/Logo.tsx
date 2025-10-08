import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BudgetAuraTitle = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <Text style={styles.green}>Money</Text>
        <Text style={styles.white}>Track</Text>
      </Text>
      <View style={styles.underline} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontFamily: 'Raleway_800ExtraBold',
    letterSpacing: 2,
  },
  green: {
    color: '#00c953',
  },
  white: {
    color: '#ffffff',
  },
  underline: {
    marginTop: 6,
    width: 120,
    height: 4,
    backgroundColor: '#00c953',
    borderRadius: 2,
  },
});

export default BudgetAuraTitle;
