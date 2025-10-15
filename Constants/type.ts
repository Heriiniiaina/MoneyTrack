import { AntDesign } from '@expo/vector-icons';
import { ComponentProps } from 'react';
export type AntDesignTypeName = ComponentProps<typeof AntDesign>['name'] 
export type CardType = {
    name:AntDesignTypeName,
    color:string,
    background:string,
    type:string,
    title:string
}

export type TransactionType = {
    _id:string,
    user:string,
    amount:string,
    category:string,
    note:string,
    date:string
}