import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons';

import ServicesContainer from "./ServicesContainer";
import EmergencyContainer from "./EmergencyContainer";
import UserContainer from "./UserContainer";

const servicesName = 'Услуги';
const emergencyName = 'Срочный вызов';
const userName = 'Профиль';

const Tab = createBottomTabNavigator();

  export default function MainContainer() {
  
  
    return (
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName={servicesName}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if(rn === servicesName){
                        iconName = 'home' 
                        color = focused ? '#3a68ff' : '#8d8d8d'
                        
                    } else if (rn === emergencyName) {
                        iconName = 'heart'
                        color = focused ? 'red' : '#8d8d8d'
                        
                    } else if (rn === userName) {
                        iconName = 'person' 
                        color = focused ? '#3a68ff' : '#8d8d8d'
                        
                    }
                    
                    

                    return <Ionicons name={iconName} size={size} color={color} />
                },
                tabBarStyle: {
                    backgroundColor: '#f3f3f3'
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    color: '#c2c2c2',
                },
            })}>

                <Tab.Screen name={servicesName} component={ServicesContainer}/>
                <Tab.Screen name={emergencyName} component={EmergencyContainer}/>
                <Tab.Screen name={userName} component={UserContainer}/>

            </Tab.Navigator>
        </NavigationContainer>
    )
  }
  
  
  