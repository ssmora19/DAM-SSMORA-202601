import React, { useState } from "react";
import { View } from "react-native";
import { Button } from "../../atoms";
import { FormField } from "../../molecules";
import { registerFormStyles } from "./RegisterFormStyles";

interface RegisterFormProps {
    onSubmit: () => void;
}

const RegisterForm = ({ onSubmit }: RegisterFormProps) => {

    const [fullName, setFullName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <View style={registerFormStyles.container}>

            <FormField
                label="Full Name"
                placeholder="Sofia Mora Malagon"
                value={fullName}
                onChangeText={setFullName}
            />

            <FormField
                label="Username"
                placeholder="Sofia123"
                value={username}
                onChangeText={setUsername}
            />

            <FormField
                label="Email"
                placeholder="sofia.mora@example.com"
                value={email}
                onChangeText={setEmail}
            />

            <FormField
                label="Date of Birth"
                placeholder="YYYY-MM-DD"
                icon="calendar-today"
                value={dateOfBirth}
                onChangeText={setDateOfBirth}
            />

            <FormField
                label="Password"
                placeholder="Max. 8 characters"
                secureTextEntry
                icon="visibility"
                value={password}
                onChangeText={setPassword}
            />

            <FormField
                label="Confirm Password"
                placeholder="Confirm password"
                secureTextEntry
                icon="visibility"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
            />

            <Button
                title="CREATE ACCOUNT"
                onSubmit={onSubmit}
            />

        </View>
    );
};

export default RegisterForm;