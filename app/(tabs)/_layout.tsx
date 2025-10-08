import { colors } from '@/Constants/Color';
import { AntDesign, FontAwesome5, Ionicons } from '@expo/vector-icons';

import { Tabs } from 'expo-router';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarStyle:style.tabBar, tabBarActiveTintColor: '#FF5733', tabBarInactiveTintColor: '#c9c9c9',  }}  >
      <Tabs.Screen name="index" options={{
        title: 'Home', tabBarIcon: () => (
          <Ionicons name='home-sharp' size={30} color={"#c9c9c9"}/>
        ),
        tabBarLabelStyle:style.tab_label
      }} />
      <Tabs.Screen name="analystics" options={{
        title: 'Analystics', tabBarIcon: () => (
          <AntDesign name='bar-chart' size={30} color={"#c9c9c9"}/>
        ),
        tabBarLabelStyle:style.tab_label
      }} />
      <Tabs.Screen  name="add" options={{
        title: '', tabBarIcon: () => (
        <View style={style.center}>
             <TouchableOpacity style={style.card}>
             <Ionicons name='add' size={30} color={"#c9c9c9"}/>
          </TouchableOpacity>
        </View>
         
        ),
        tabBarLabelStyle:style.tab_label
      }} />
       <Tabs.Screen name="budget" options={{
        title: 'Budget', tabBarIcon: () => (
          <FontAwesome5 name='money-check' size={30} color={"#c9c9c9"}/>
        ),
        tabBarLabelStyle:style.tab_label
      }} />
      <Tabs.Screen name="profile" options={{
        title: 'Budget', tabBarIcon: () => (
          <FontAwesome5 name='user-edit' size={30} color={"#c9c9c9"}/>
        ),
        tabBarLabelStyle:style.tab_label
      }} />
    </Tabs>
    
  );
}

const style = StyleSheet.create({
    tabBar:{
        backgroundColor:colors.background,
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        height: 90,          
        paddingBottom: 10,   
        paddingTop: 20, 
        color:"#949494"
    },
    center:{
        width:100,
        height:100,
        backgroundColor:colors.background,
        marginBottom: 60,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:50
    },
    card: {
        width: 70,
        height: 70,
        backgroundColor: "#01b94d",
        borderRadius: 50, 
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 4,
        elevation: 5,
        color:"#171717"
      },
      tab_label:{
        color:"#c9c9c9",
        marginTop:5
      }
})