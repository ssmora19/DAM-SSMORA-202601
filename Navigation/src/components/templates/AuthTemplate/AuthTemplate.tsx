import React from "react";
import { View } from "react-native";
import { Label } from "../../atoms";
import { authTemplateStyles } from "./AuthTemplateStyle";

interface AuthTemplateProps {
    title: string;
    subtitle?: string;
    children: React.ReactNode;
}

const AuthTemplate = ({
    title,
    subtitle,
    children,
}: AuthTemplateProps) => {
    return (
        <View style={authTemplateStyles.container}>

            <View style={authTemplateStyles.header}>
                <Label
                    text={title}
                    type="screenTitle"
                />

                {subtitle && (
                    <Label text={subtitle} type="smallText" />
                )}
            </View>

            <View style={authTemplateStyles.content}>
                {children}
            </View>

        </View>
    );
};

export default AuthTemplate;