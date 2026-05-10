import { StyleSheet } from "react-native";
import { colors, spacing } from "../../../themes";

export const authTemplateStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        paddingHorizontal: spacing.xl,
        paddingTop: 100,
    },

    header: {
        alignItems: "center",
        marginBottom: spacing.xl,
    },

    content: {
        width: "100%",
    },
});