import TitleTransctionComponent from '@/components/TitleTransctionComponent'
import { colors } from '@/Constants/Color'
import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'

type Props = {}

const {width} = Dimensions.get("window")
const AddBudgetPage = (props: Props) => {
  return (
    <View style={style.container}>
       <View>
            <TitleTransctionComponent route={"/(tabs)/budget"} text='Add budget' width={width}/>
       </View>
    </View>
  )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.background
    }
})
export default AddBudgetPage