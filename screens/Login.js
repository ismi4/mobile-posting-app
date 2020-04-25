import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

class Login extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>Login screen</Text>
      </View>
    );
  }
}

export default Login;
