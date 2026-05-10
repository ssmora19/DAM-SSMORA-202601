import React from "react";
import { TextInput } from "react-native";
import { colors } from "../../../themes";
import { styles } from "./InputStyle";


interface InputProps {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean;
}

const Input = ({
    placeholder,
    value,
    onChangeText,
    secureTextEntry,
}: InputProps) => {
    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor={colors.secondary}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
        />
    );
};

export default Input;   
