import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons';

import ServicesContainer from "./ServicesContainer";
import EmergencyContainer from "./EmergencyContainer";
import UserContainer from "./UserContainer";

const servicesName = 'Services';
const emergencyName = 'Emergency';
const userName = 'User';

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
                    } else if (rn === emergencyName) {
                        iconName = 'heart'
                        color = focused ? 'red' : 'grey'
                    } else if (rn === userName) {
                        iconName = 'person' 
                    }

                    return <Ionicons name={iconName} size={size} color={color} />
                }
            })}>

                <Tab.Screen name={servicesName} component={ServicesContainer}/>
                <Tab.Screen name={emergencyName} component={EmergencyContainer}/>
                <Tab.Screen name={userName} component={UserContainer}/>

            </Tab.Navigator>
        </NavigationContainer>
    )
  }
  
  
  