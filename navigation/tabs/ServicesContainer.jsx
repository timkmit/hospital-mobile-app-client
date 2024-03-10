import React from "react";
import { View, Text } from "react-native";

  export default function ServicesContainer({navigation}) {
  
  
    return (
      <View style={{fles: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text 
            onPress={()=> alert('This is the "Main" tab-screen')}
            style={{fontSize: 26, fontWeight:'bold'}}>
            ServicesContainer
        </Text>
      </View>
    );
  }
  
  
  