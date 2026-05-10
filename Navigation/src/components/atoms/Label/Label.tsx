import React from "react";
import { Text } from "react-native";
import { labelStyles } from "./LabelStyles";

interface LabelProps {
    text: string;
    type?: "screenTitle" | "formLabel" | "smallText";
}

const Label = ({ text, type = "smallText" }: LabelProps) => {
    return <Text style={labelStyles[type]}>{text}</Text>;
};

export default Label;