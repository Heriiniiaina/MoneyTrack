import { colors } from '@/Constants/Color';
import { AntDesign, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native';

const { width, height } = Dimensions.get('window');


let iconSize = width * 0.08;
let iconSizeCenter = width * 0.10; 
let iconCenterX = width * 0.2
let centerBtnSize = width * 0.14
console.log(width)
console.log(height)
if (width <= 400)
{
  iconSizeCenter = width * 0.06
  iconSize = width * 0.059
  iconCenterX = width * 0.19
  centerBtnSize = width * 0.13
}


export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: style.tabBar,
        tabBarActiveTintColor: '#FF5733',
        tabBarInactiveTintColor: '#c9c9c9',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-sharp" size={iconSize} color={color} />
          ),
          tabBarLabelStyle: style.tab_label,
        }}
      />
      <Tabs.Screen
        name="transaction"
        options={{
          title: 'Transaction',
          tabBarIcon: ({ color }) => (
            <AntDesign name="bar-chart" size={iconSize} color={color} />
          ),
          tabBarLabelStyle: style.tab_label,
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          title: '',
          tabBarIcon: () => (
            <View style={style.center}>
              <TouchableOpacity style={style.card}>
                <Ionicons name="add" size={iconSizeCenter} color={"#fff"} />
              </TouchableOpacity>
            </View>
          ),
          tabBarLabelStyle: style.tab_label,
        }}
      />
      <Tabs.Screen
        name="budget"
        options={{
          title: 'Budget',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="money-check" size={iconSize} color={color} />
          ),
          tabBarLabelStyle: style.tab_label,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-edit" size={iconSize} color={color} />
          ),
          tabBarLabelStyle: style.tab_label,
        }}
      />
    </Tabs>
  );
}

const style = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.grey,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: height * 0.11,
    paddingBottom: height * 0.015,
    paddingTop: height * 0.02,
    borderColor: 'transparent',
  },
  center: {
    width: iconCenterX,
    height: iconCenterX,
    backgroundColor: colors.background,
    marginBottom: height * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: (width * 0.2) / 2,
  },
  card: {
    width: centerBtnSize,
    height: centerBtnSize,
    backgroundColor: '#01b94d',
    borderRadius: (width * 0.14) / 2,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    elevation: 5,
  },
  tab_label: {
    color: '#c9c9c9',
    marginTop: 5,
    fontSize: width * 0.03, 
  },
});
