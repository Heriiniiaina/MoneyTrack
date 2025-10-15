import { TransactionType } from '@/Constants/type';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import TransactionItem from './TransactionItem';

type Props = {}

const transactions:TransactionType[] = [
    {
      _id: "1",
      date: "2025-10-15T12:30:00.000Z",
      user: "user_01",
      amount: "45.99",
      category: "health",
      note: "Achat au supermarché"
    },
    {
      _id: "2",
      date: "2025-10-15T08:15:00.000Z",
      user: "user_01",
      amount: "12.50",
      category: "transport",
      note: "Ticket de métro"
    },
    {
      _id: "3",
      date: "2025-10-14T16:45:00.000Z",
      user: "user_02",
      amount: "75.00",
      category: "bill",
      note: "Cinéma + snacks"
    },
    {
      _id: "4",
      date: "2025-10-13T10:00:00.000Z",
      user: "user_01",
      amount: "1200.00",
      category: "bill",
      note: "Virement mensuel"
    },
    {
      _id: "5",
      date: "2025-09-09T14:30:00.000Z",
      user: "user_03",
      amount: "30.00",
      category: "health",
      note: "Pharmacie"
    },
    {
      _id: "6",
      date: "2024-08-12T18:00:00.000Z",
      user: "user_01",
      amount: "60.00",
      category: "other",
      note: "Dîner entre amis"
    },
    {
      _id: "7",
      date: "2025-10-14T09:00:00.000Z",
      user: "user_02",
      amount: "9.99",
      category: "shopping",
      note: "Netflix"
    },
    {
      _id: "8",
      date: "2025-10-15T07:00:00.000Z",
      user: "user_03",
      amount: "3.20",
      category: "health",
      note: "Petit déjeuner"
    },
    {
      _id: "9",
      date: "2025-10-10T11:30:00.000Z",
      user: "user_01",
      amount: "100.00",
      category: "bill",
      note: "Nouveaux vêtements"
    },
    {
      _id: "10",
      date: "2025-10-13T17:20:00.000Z",
      user: "user_02",
      amount: "25.00",
      category: "shopping",
      note: "Plein partiel"
    }
  ];

  

const TransactionList = (props: Props) => {
  return (
    <View>
       {
         transactions.map((transaction, index)=>{

            return <TransactionItem transaction={transaction} key={index}/>
         })
       }
    </View>
  )
}
const style = StyleSheet.create({
    container:{
        
    }
})

export default TransactionList