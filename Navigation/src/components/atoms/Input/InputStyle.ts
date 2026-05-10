import { StyleSheet } from "react-native";
import { colors, spacing, typography } from "../../../themes";

export const styles = StyleSheet.create({
    input: {
        backgroundColor: colors.surface,

        color: colors.white,

        paddingHorizontal: spacing.md,
        paddingVertical: spacing.md,

        borderRadius: 12,

        fontSize: typography.body,

        borderWidth: 1,
        borderColor: colors.border,
    },
});