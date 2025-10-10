import { colors } from '@/Constants/Color'
import React from 'react'
import { View } from 'react-native'

type Props = {}

const LineHr = (props: Props) => {
  return (
        <View
      style={{
        borderBottomColor: colors.grey,  // couleur de la ligne
        borderBottomWidth: 1,       // épaisseur
        marginBottom: 10,         // espace au-dessus et en-dessous (optionnel)
      }}
    />
  )
}

export default LineHr