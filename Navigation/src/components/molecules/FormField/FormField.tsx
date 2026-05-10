import React from "react";
import { View, TextInput, Text, Pressable } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { formFieldStyles } from "./FormFieldStyles";
import { colors } from "../../../themes";
import Icon from "../../atoms/Icon/Icon";

interface FormFieldProps {
    label: string;
    placeholder?: string;
    value?: string;
    onChangeText?: (text: string) => void;
    secureTextEntry?: boolean;

    icon?: keyof typeof MaterialIcons.glyphMap;
    onIconPress?: () => void;
}

const FormField = ({
    label,
    placeholder,
    value,
    onChangeText,
    secureTextEntry = false,
    icon,
    onIconPress,
}: FormFieldProps) => {

    let iconComponent = null;

    if (icon) {
        iconComponent = (
            <Pressable onPress={onIconPress} style={formFieldStyles.icon}>
                <Icon name={icon} size={24} color="textSecondary" />
            </Pressable>
        );
    }

    return (
        <View style={formFieldStyles.container}>

            <Text style={formFieldStyles.label}>
                {label}
            </Text>

            <View style={formFieldStyles.inputContainer}>

                <TextInput
                    style={formFieldStyles.input}
                    placeholder={placeholder}
                    placeholderTextColor={colors.placeholder}
                    value={value}
                    onChangeText={onChangeText}
                    secureTextEntry={secureTextEntry}
                />

                {iconComponent}

            </View>

        </View>
    );
};

export default FormField;