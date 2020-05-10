import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

class Register extends React.Component {
  state = {
    emailInput: "",
    passwordInput: "",
  };

  render() {
    return (
      <View style={{ flex: 1, width: "100%", backgroundColor: "green" }}>
        <Text>Register screen</Text>
      </View>
    );
  }
}

export default Register;
