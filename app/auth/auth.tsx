import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

type Props = {}

const auth = (props: Props) => {
  return (
    <SafeAreaProvider>
        <SafeAreaView>
        <View>
      <Text>auth</Text>
    </View>
        </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default auth