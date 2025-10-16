import { colors } from '@/Constants/Color'
import React, { SetStateAction } from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

type Props = {
    type:string,
    setType:React.Dispatch<SetStateAction<string>>
}
const {width} = Dimensions.get("window")

const SelectedType = ({setType, type}: Props) => {
  
    return (
        <View style={styles.container}>
          <TouchableOpacity
            style={[
              styles.button,
              type === 'expense' ? styles.activeButton : styles.inactiveButton,
            ]}
            onPress={() => setType('expense')}
          >
            <Text style={[
              styles.buttonText,
              type === 'expense' ? styles.activeText : styles.inactiveText
            ]}>
              Expense
            </Text>
          </TouchableOpacity>
    
          <TouchableOpacity
            style={[
              styles.button,
              type === 'income' ? styles.activeButton : styles.inactiveButton,
            ]}
            onPress={() => setType('income')}
          >
            <Text style={[
              styles.buttonText,
              type === 'income' ? styles.activeText : styles.inactiveText
            ]}>
              Income
            </Text>
          </TouchableOpacity>
        </View>
      );
  
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: '#2D2D2D',
      borderRadius: 10,
      overflow: 'hidden',
      borderWidth: 1,
      borderColor: '#444',
      marginVertical: 20,
      justifyContent:"center",
      alignItems:"center",
      width:width/2,
      marginHorizontal:"auto"
    },
    button: {
      flex: 1,
      paddingVertical: 12,
      alignItems: 'center',
      justifyContent: 'center',
    },
    activeButton: {
      backgroundColor: colors.primary,
      borderRadius: 8,
      margin: 3,
    },
    inactiveButton: {
      backgroundColor: 'transparent',
    },
    buttonText: {
      fontWeight: 'bold',
      fontSize: 16,
    },
    activeText: {
      color: '#FFFFFF',
    },
    inactiveText: {
      color: '#A9A9A9',
    },
  });

export default SelectedType