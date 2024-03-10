import React from "react";
import { View, Text } from "react-native";

  export default function UserContainer({navigation}) {
  
  
    return (
      <View style={{fles: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text 
            onPress={()=> alert('This is the "Main" tab-screen')}
            style={{fontSize: 26, fontWeight:'bold'}}>
            UserContainer
        </Text>
      </View>
    );
  }
  
  
  