import NewExpense from '@/components/NewExpense'
import NewIncome from '@/components/NewIncome'
import SelectedType from '@/components/SelectedType'
import TitleTransctionComponent from '@/components/TitleTransctionComponent'
import { colors } from '@/Constants/Color'
import { getFontSize } from '@/Constants/utils'
import { useUserId } from '@/services/userServices'
import React, { useState } from 'react'
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native'

type Props = {}



const {width, height} = Dimensions.get("window")
const TAB_BAR_HEIGHT = height * 0.11;
const AddTransactionPage = (props: Props) => {
  const [type, setType] = useState<string>("income")
  const [isLoading, setIsLoading] = useState(false)
    const id = useUserId()
    console.log(id)
  return (
     <ScrollView
          style={style.container}
          contentContainerStyle={{ paddingBottom: TAB_BAR_HEIGHT + 20 }}
          showsVerticalScrollIndicator={true}
        >
            <View style={style.container}>
        <TitleTransctionComponent route={"/(tabs)"} text='Add transaction' width={width}  fontSize={getFontSize(width, "min") + 4}/>
        <View>
        <SelectedType setType={setType} type={type}/>
        </View>
        <View>
           {type == "expense" ?  <NewExpense/> : <NewIncome/>}
        </View>
       
    </View>
        </ScrollView>
    
  )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.background,
    },
  
  
})
export default AddTransactionPage