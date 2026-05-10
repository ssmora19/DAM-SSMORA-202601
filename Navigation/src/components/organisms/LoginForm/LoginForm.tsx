import React, { useState } from "react";
import { View } from "react-native";
import { Button, TextButton } from "../../atoms";
import { FormField } from "../../molecules";
import { AuthFooter } from "../../molecules";
import { loginFormStyles } from "./LoginFormStyles";

interface LoginFormProps {
    onSubmit: () => void;
    onGoToRegister: () => void;
    onForgotPassword: () => void;
}

const LoginForm = ({
    onSubmit,
    onGoToRegister,
    onForgotPassword,
}: LoginFormProps) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={loginFormStyles.container}>

            <FormField
                label="Username"
                placeholder="ej. ssmora"
                value={username}
                onChangeText={setUsername}
            />

            <FormField
                label="Password"
                placeholder="Enter password"
                secureTextEntry
                icon="calendar-today"
                value={password}
                onChangeText={setPassword}
            />

            <View style={loginFormStyles.forgotPasswordContainer}>
                <TextButton
                    text="FORGOT PASSWORD?"
                    onPress={onForgotPassword}
                />
            </View>

            <Button
                title="LOGIN"
                onSubmit={onSubmit}
            />

            <AuthFooter
                text="Don't have an account?"
                actionText="SIGN UP"
                onPress={onGoToRegister}
            />

        </View>
    );
};

export default LoginForm;