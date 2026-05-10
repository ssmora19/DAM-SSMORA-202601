import { StyleSheet } from "react-native";
import { spacing } from "../../../themes";

export const authFooterStyles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: spacing.lg,
        gap: spacing.xs,
    },
});