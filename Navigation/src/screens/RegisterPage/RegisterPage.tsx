import React from "react";
import { AuthTemplate } from "../../components/templates";
import { RegisterForm } from "../../components/organisms";
import { AuthStackParamList } from "../../Route";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

const RegisterPage = () => {

    const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

    const handleRegister = () => {
        console.log("Tap en registro");
        navigation.navigate("Login");
    };

    return (
        <AuthTemplate
            title="REGISTER"
            subtitle="Create a new account"
        >
            <RegisterForm onSubmit={handleRegister} />
        </AuthTemplate>
    );
};

export default RegisterPage;