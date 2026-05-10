import React from "react";
import { View } from "react-native";
import { authFooterStyles } from "./AuthFooterStyles";
import Label from "../../atoms/Label/Label";
import TextButton from "../../atoms/TextButton/TextButton";

interface AuthFooterProps {
    text: string;
    actionText: string;
    onPress: () => void;
}

const AuthFooter = ({
    text,
    actionText,
    onPress,
}: AuthFooterProps) => {
    return (
        <View style={authFooterStyles.container}>

            <Label text={text} />

            <TextButton
                text={actionText}
                onPress={onPress}
            />

        </View>
    );
};

export default AuthFooter;