import { colors } from '@/Constants/Color'
import React from 'react'
import { View } from 'react-native'

type Props = {}

const LineHr = (props: Props) => {
  return (
        <View
      style={{
        borderBottomColor: colors.grey,  
        borderBottomWidth: 1,       
        marginVertical: 5,
         
      }}
    />
  )
}

export default LineHr