import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { colors } from "../../../themes";

interface IconProps {
    name: keyof typeof MaterialIcons.glyphMap;
    size?: number;
    color?: keyof typeof colors;
}

const Icon = ({
    name,
    size = 24,
    color = "textPrimary",
}: IconProps) => {
    return (
        <MaterialIcons
            name={name}
            size={size}
            color={colors[color]}
        />
    );
};

export default Icon;