import { StyleSheet } from "react-native";
import { colors, space } from "./Themes";


export const appStyles = StyleSheet.create({
    safeArea: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.background
    },

    container: {
        padding: space.xl,
        alignItems: "center"
    },

    display: {
        width: 300,
        height: 80,
        backgroundColor: colors.black,
        justifyContent: "center",
        alignItems: "flex-end",
        padding: space.l,
        marginBottom: space.l,
        borderRadius: space.m
    },

    displayText: {
        color: colors.white,
        fontSize: 32
    },

    row: {
        flexDirection: "row"
    }
});