import { StyleSheet } from "react-native";
import { colors, space } from "../../../Themes";

export const stylesCountScreen = StyleSheet.create({
    labelText: {
        color: colors.white,
        fontSize: space.xl,
        textAlign: "center"
    },

    button: {
        backgroundColor: colors.primary,
        borderRadius: space.m,
        padding: space.l,
        margin: space.s,
        alignItems: "center",
        justifyContent: "center",
        width: 70,
        height: 70
    }
});