import React from "react";
import { useState } from "react";
import { View, Text } from "react-native";
import RNPickerSelect from 'react-native-picker-select';
import styled from "styled-components";
import Ionicons from '@expo/vector-icons/Ionicons';
import {Linking} from 'react-native'

const InputStyle = styled.View`
    justify-content: center;
    font-size: 60px;
    width: 100%;
    height: 50px;
    text-align: center;
    margin: 3px;
    
`;

const EmergencyCall = styled.View`
    width: 300px;
    height: 300px;
    border-radius: 200%;
    border: 10px solid #e9effd;
    background-color: #c8d8ff;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
`;

const SubmitButton = styled.TouchableOpacity`
    background-color: #709dff;
    padding: 15px;
    border-radius: 5px;
    margin-top: 20px;
`;

const SubmitButtonText = styled.Text`
    color: #fff;
    text-align: center;
    font-weight: bold;
`;

const ViewBlock = styled.TouchableOpacity`
    
`;

const makeEmergencyCall = () => {
    Linking.openURL('tel:123456777');
};

const pickerSelectStyles = {
    inputIOS: {
        fontSize: 18,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 4,
        color: 'black',
        textAlign: 'center',
        fontWeight: 500,
        backgroundColor: '#c5ffc8',

    },
    placeholder: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#fddbdb',
    },
    selectedItemText: {
        color: 'green',
        fontWeight: 'bold',
        textAlign: 'center',
    },
};

const pickerSelectStylesPlace = {
    inputIOS: {
        fontSize: 18,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 4,
        color: 'black',
        textAlign: 'center',
        fontWeight: 500,
        backgroundColor: '#c5ffc8',
    },
    placeholder: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#fddbdb',
    },
    selectedItemText: {
        color: 'green',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    textInputProps: {
        editable: true,
    },
};

const pickerSelectStylesAge = {
    inputIOS: {
        fontSize: 18,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 0,
        color: 'black',
        textAlign: 'center',
        fontWeight: 500,
        backgroundColor: '#c5ffc8',
    },
    placeholder: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#fddbdb',
    },
    selectedItemText: {
        color: 'green',
        fontWeight: 'bold',
        textAlign: 'center',
    },
};

const placeData = { 'home': 'Дом', 'work': 'Работа' };
const conditionsData = { 'heart': 'Болит сердце', 'headache': 'Болит голова', 'stomach': 'Болит живот', 'poisoning': 'Отравление', 'pressure': 'Давление', 'panicAttack': 'Паническая атака' };
const ageRangesData = { '5': '0-5 лет', '510': '5-10 лет', '1014': '10-14 лет', '1418': '14-18 лет', '1825': '18-25 лет', '2550': '25-50 лет', '50100': '50+ лет' };

export default function EmergencyContainer({ navigation }) {

    const [selectedCondition, setSelectedCondition] = useState(null);
    const [selectedPlace, setSelectedPlace] = useState(null);
    const [selectedAge, setSelectedAge] = useState(null);

    const handleSubmit = () => {
        // You can perform actions here before sending data to the backend
        console.log("Submitting data to the backend:", {
            condition: selectedCondition,
            place: selectedPlace,
            age: selectedAge,
        });

        // Add your backend API call here to send the data
        // For example, you can use fetch or axios to make a POST request

        // Reset the selected values if needed
        setSelectedCondition(null);
        setSelectedPlace(null);
        setSelectedAge(null);
    };

    const placeItems = Object.keys(placeData).map(key => ({
        label: placeData[key],
        value: key,
    }));

    const conditionsItems = Object.keys(conditionsData).map(key => ({
        label: conditionsData[key],
        value: key,
    }));

    const ageRangesItems = Object.keys(ageRangesData).map(key => ({
        label: ageRangesData[key],
        value: key,
    }));

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', backgroundColor: '#ffffff' }}>
        
        <InputStyle>
            <RNPickerSelect
                placeholder={{
                    label: 'Выберите заболевание',
                    value: null,
                }}
                onValueChange={(value) => console.log("Выбрано заболевание: " + value)}
                items={conditionsItems}
                style={pickerSelectStyles}
            />
        </InputStyle>
        <InputStyle>
            <RNPickerSelect
                placeholder={{
                    label: 'Где вы находитесь',
                    value: null,
                }}
                onValueChange={(value) => console.log("Выбрано место назначения: " + value)}
                items={placeItems}
                style={pickerSelectStylesPlace}
            />
        </InputStyle>
        <InputStyle>
            <RNPickerSelect
                placeholder={{
                    label: 'Укажите возраст',
                    value: null,
                }}
                onValueChange={(value) => console.log("Выбран возраст: " + value)}
                items={ageRangesItems}
                style={pickerSelectStylesAge}
            />
        </InputStyle>
        <SubmitButton onPress={handleSubmit}>
                <SubmitButtonText>Быстрый вызов</SubmitButtonText>
        </SubmitButton>

            <Text style={{fontSize:20, marginBottom: 10, marginTop: 60}}>Если можете говорить, то позвоните напрямую:</Text>

        <ViewBlock onPress={makeEmergencyCall} style={{zIndex: 1000}}>
            <EmergencyCall><Ionicons name={'call'} size={150} color={'#709dff'} /></EmergencyCall>
        </ViewBlock>
        
    </View>
    );
}
