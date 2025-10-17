import { colors } from '@/Constants/Color';
import { groupDataByDate, GroupedSection } from '@/Constants/SortByDate';
import { TransactionType } from '@/Constants/type';
import { RootState } from '@/store/store';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import LineHr from './LineHr';
import TransactionItem from './TransactionItem';

type Props = {}


  

const TransactionList = (props: Props) => {
   const transaction:TransactionType[] = useSelector((state:RootState)=>state.transaction.transaction)
   const transactions:GroupedSection[] = groupDataByDate(transaction)
   console.log(transactions)
  return (
    <View>
        {
            transactions.map((transaction, index)=>{
                return (<View style={style.item} key={index}>
                    <Text style={{color:colors.textColorTransparent}}>{transaction.title}</Text>
                    {
                        transaction.data.map((tr, i)=>{
                            return <TransactionItem transaction={tr} key={i}/>
                        })
                    }
                    <LineHr/>
                </View>)
            })
        }
      
    </View>
  )
}
const style = StyleSheet.create({
    container:{
        
    },
    item:{
        padding:10
    }
})

export default TransactionList