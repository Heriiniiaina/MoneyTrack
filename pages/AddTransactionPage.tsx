import NewExpense from '@/components/NewExpense'
import NewIncome from '@/components/NewIncome'
import SelectedType from '@/components/SelectedType'
import TitleTransctionComponent from '@/components/TitleTransctionComponent'
import { colors } from '@/Constants/Color'
import { getFontSize } from '@/Constants/utils'
import React, { useState } from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'

type Props = {}



const {width, height} = Dimensions.get("window")
const AddTransactionPage = (props: Props) => {
  const [type, setType] = useState<string>("income")
  const [isLoading, setIsLoading] = useState(false)

  return (
    <View style={style.container}>
        <TitleTransctionComponent route={"/(tabs)"} text='Add transaction' width={width}  fontSize={getFontSize(width, "min") + 4}/>
        <View>
        <SelectedType setType={setType} type={type}/>
        </View>
        <View>
           {type == "expense" ?  <NewExpense/> : <NewIncome/>}
        </View>
       
    </View>
  )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.background,
    },
  
  
})
export default AddTransactionPage