import React from "react";
import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <Text>index</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default index;
