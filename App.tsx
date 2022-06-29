import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import App1 from './App1';
import App2 from './App2';
import { NavigationContainer } from '@react-navigation/native';
//Below requires npm install react-native-vector-icons @types/react-native-vector-icons. Using it for Tab Navigator icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();
const App: React.FC = () => {
 //below are some optional props that can be passed to Tab.Navigator. You can try the code with and without options
 const   tabProps = {
 initialRouteName: 'TransScreen',
 screenOptions:{
  "tabBarActiveTintColor": "#18a2e0",
  "tabBarInactiveTintColor": "darkgrey",
  "tabBarActiveBackgroundColor": "lightgrey",
  "tabBarStyle": [
    {
      "display": "flex"
    },
    
    null
  ],
  lazy: true, //default is true,
 indepent: true
}
 
 }
 return (
 <NavigationContainer independent={true} >
 <Tab.Navigator {...tabProps}>
 <Tab.Screen
    name="Your Transactions"
    component={App1}
 options={{
 tabBarLabel: 'Transactions',
 tabBarIcon: ({ color, size }) => (
 <MaterialCommunityIcons name="account-cash" color={color} size={size} />
 )
 }}
 />
 <Tab.Screen
 name="Your Assets"
 component={App2}
 options={{
 tabBarLabel: 'Assets',
 tabBarIcon: ({ color, size }) => (
 <MaterialCommunityIcons name="bank" color={color} size={size} />
 )
 }}
 />
 </Tab.Navigator>
 </NavigationContainer>
 );
}
export default App