import React from "react";
import { Pressable, Text } from "react-native";

interface ButtonProps {
    title: string;
    onSubmit: () => void;
}

const Button = ({ title, onSubmit }: ButtonProps) => {
    return (
        <Pressable onPress={onSubmit}>
            <Text></Text>
        </Pressable>
    );
}

export default Button;