import AddTransactionPage from '@/pages/AddTransactionPage'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

type Props = {}

const addTransaction = (props: Props) => {
  return (
    <SafeAreaProvider>
        <SafeAreaView style={{flex:1}}>
            <AddTransactionPage/>
        </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default addTransaction