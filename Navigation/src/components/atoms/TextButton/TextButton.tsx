import React from "react";
import { Text, Pressable } from "react-native";
import { textButtonStyles } from "./TextButtonStyles";

interface TextButtonProps {
    text: string;
    onPress: () => void;
}

const TextButton = ({ text, onPress }: TextButtonProps) => {
    return (
        <Pressable onPress={onPress}>
            <Text style={textButtonStyles.text}>
                {text}
            </Text>
        </Pressable>
    );
};

export default TextButton;