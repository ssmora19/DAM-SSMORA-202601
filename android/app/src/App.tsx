import React from 'react';
import { appStyles } from './App.style';
import { StatusBar, StyleSheet, View, Text } from 'react-native';
import {
    SafeAreaProvider,
    useSafeAreaInsets,
} from 'react-native-safe-area-context';

import { NewAppScreen } from '@react-native/new-app-screen';
import CountScreen from './Components/Screens/HomeScreen/CountScreen';
import { colors } from './Themes/colors';

type AppProps = {
    display: string;
    firstValue: number | null;
    operator: string | null;
}
export class App extends React.Component<any, AppProps> {

    state: AppProps = {
        display: "0",
        firstValue: null,
        operator: null
    }

    handleNumber = (num: string) => {
        this.setState({
            display: this.state.display === "0" ? num : this.state.display + num
        });
    }

    handleOperator = (operator: string) => {
        this.setState({
            firstValue: Number(this.state.display),
            operator: operator,
            display: "0"
        });
    }

    calculate = () => {

        const { firstValue, operator, display } = this.state;

        const secondValue = Number(display);

        let result = 0;

        switch (operator) {
            case "+":
                result = firstValue! + secondValue;
                break;

            case "-":
                result = firstValue! - secondValue;
                break;

            case "*":
                result = firstValue! * secondValue;
                break;

            case "/":
                result = firstValue! / secondValue;
                break;
        }

        this.setState({
            display: String(result),
            firstValue: null,
            operator: null
        });
    }

    render() {

        return (
            <View style={appStyles.safeArea}>
                <View style={appStyles.container}>

                    <View style={appStyles.display}>
                        <Text style={appStyles.displayText}>
                            {this.state.display}
                        </Text>
                    </View>

                    <View style={appStyles.row}>
                        <CountScreen label="7" OnPress={() => this.handleNumber("7")} />
                        <CountScreen label="8" OnPress={() => this.handleNumber("8")} />
                        <CountScreen label="9" OnPress={() => this.handleNumber("9")} />
                        <CountScreen label="/" OnPress={() => this.handleOperator("/")} />
                    </View>

                    <View style={appStyles.row}>
                        <CountScreen label="4" OnPress={() => this.handleNumber("4")} />
                        <CountScreen label="5" OnPress={() => this.handleNumber("5")} />
                        <CountScreen label="6" OnPress={() => this.handleNumber("6")} />
                        <CountScreen label="*" OnPress={() => this.handleOperator("*")} />
                    </View>

                    <View style={appStyles.row}>
                        <CountScreen label="1" OnPress={() => this.handleNumber("1")} />
                        <CountScreen label="2" OnPress={() => this.handleNumber("2")} />
                        <CountScreen label="3" OnPress={() => this.handleNumber("3")} />
                        <CountScreen label="-" OnPress={() => this.handleOperator("-")} />
                    </View>

                    <View style={appStyles.row}>
                        <CountScreen label="0" OnPress={() => this.handleNumber("0")} />
                        <CountScreen label="=" OnPress={this.calculate} />
                        <CountScreen label="+" OnPress={() => this.handleOperator("+")} />
                    </View>

                </View>
            </View>
        );
    }
}

export default App;


