import { StyleSheet } from "react-native";
import { colors, spacing, typography } from "../../../themes";

export const formFieldStyles = StyleSheet.create({

    container: {
        marginBottom: spacing.lg,
    },

    label: {
        fontSize: typography.body,
        color: colors.textPrimary,
        marginBottom: spacing.xs,
        fontWeight: "600",
    },

    inputContainer: {
        flexDirection: "row",
        alignItems: "center",

        borderWidth: 1,
        borderColor: colors.border,

        borderRadius: 10,

        backgroundColor: colors.background,

        paddingHorizontal: spacing.md,

        height: 50,
    },

    input: {
        flex: 1,
        fontSize: typography.body,
        color: colors.textPrimary,
    },

    icon: {
        marginLeft: spacing.sm,
    },

});