import React from "react";
import { View, Text } from "react-native";
import RNPickerSelect from 'react-native-picker-select';
import styled from "styled-components";

const InputStyle = styled.View`
    justify-content: center;
    font-size: 60px;
    width: 80%;
    height: 60px;
    text-align: center;
    margin: 20px;
`;

const pickerSelectStyles = {
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 4,
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    placeholder: {
        color: 'blue', 
        fontWeight: 'bold',
        textAlign: 'center', 
    },
};

const pickerSelectStylesPlace = {
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 4,
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    placeholder: {
        color: 'black', 
        fontWeight: 'bold',
        textAlign: 'center', 
    },
};

const placeData = {'home': 'Дом', 'work': 'Работа'};

export default function EmergencyContainer({ navigation }) {

    const placeItems = Object.keys(placeData).map(key => ({
        label: placeData[key],
        value: key,
        
    }));

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
            <Text
                onPress={() => alert('This is the "Main" tab-screen')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>
                EmergencyContainer
            </Text>
            <InputStyle>
            <RNPickerSelect
                placeholder={{
                    label: 'ВЫБЕРИТЕ ЗАБОЛЕВАНИЕ',
                    value: null,
                }}
                onValueChange={(value) => console.log("Выбрано заболевание: " + value)}
                items={[
                    { label: 'Болит сердце', value: 'heart' },
                    { label: 'Болит голова', value: 'headache' },
                    { label: 'Болит живот', value: 'stomach' },
                    { label: 'Отравление', value: 'poisoning' },
                    { label: 'Давление', value: 'pressure' },
                    { label: 'Паническая атака', value: 'panicAttack' },
                ]}
                style={pickerSelectStyles}
            />
            
            </InputStyle>
            <InputStyle>
            <RNPickerSelect
                    placeholder={{
                        label: 'ГДЕ ВЫ НАХОДИТЕСЬ',
                        value: null,
                    }}
                    onValueChange={(value) => console.log("Выбрано место назначения: " + value)}
                    items={placeItems} // Use the dynamically generated items
                    style={pickerSelectStylesPlace}
                />
            
            </InputStyle>
        </View>
    );
}
