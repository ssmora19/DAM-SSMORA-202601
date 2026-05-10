import { StyleSheet } from "react-native";
import { colors, typography } from "../../../themes";

export const labelStyles = StyleSheet.create({
    screenTitle: {
        fontSize: 30,
        fontWeight: "700",
        color: colors.textPrimary,
    },

    formLabel: {
        fontSize: typography.body,
        fontWeight: "500",
        color: colors.textPrimary,
    },

    smallText: {
        fontSize: 14,
        color: colors.textSecondary,
    },
});