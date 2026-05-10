import React from "react";
import { AuthTemplate } from "../../components/templates";
import { LoginForm } from "../../components/organisms";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../Route";

const LoginPage = () => {

    const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

    const handleLogin = () => {
        console.log("Tap en iniciar sesión");
    };

    const handleGoToRegister = () => {
        navigation.navigate("Register");
    };

    const handleForgotPassword = () => {
        console.log("Forgot password clicked");
    };

    return (
        <AuthTemplate
            title="LOGIN"
            subtitle="Welcome"
        >
            <LoginForm
                onSubmit={handleLogin}
                onGoToRegister={handleGoToRegister}
                onForgotPassword={handleForgotPassword}
            />
        </AuthTemplate>
    );
};

export default LoginPage;