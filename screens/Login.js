import * as React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

class Login extends React.Component {
  state = {
    emailInput: "",
    passwordInput: "",
  };

  render() {
    const { navigation } = this.props;

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ width: 300 }}>
          <TextInput
            style={{
              height: 40,
              borderColor: "gray",
              borderWidth: 1,
              paddingHorizontal: 10,
            }}
            onChangeText={(text) => this.setState({ emailInput: text })}
            value={this.state.emailInput}
          />
          <View style={{ alignItems: "center" }}>
            <Text>Email</Text>
          </View>
          <View style={{ marginTop: 33 }}>
            <TextInput
              secureTextEntry={true}
              style={{
                height: 40,
                borderColor: "gray",
                borderWidth: 1,
                paddingHorizontal: 10,
              }}
              onChangeText={(text) => this.setState({ passwordInput: text })}
              value={this.state.passwordInput}
            />
            <View style={{ alignItems: "center" }}>
              <Text>Password</Text>
            </View>
          </View>
          <View style={{ width: "77%", alignSelf: "center", marginTop: 27 }}>
            <Button title="LOGIN" />
          </View>
          <View style={{ width: "77%", alignSelf: "center", marginTop: 7 }}>
            <Button
              onPress={() => navigation.navigate("Register")}
              title="REGISTER"
            />
          </View>
        </View>
      </View>
    );
  }
}

export default function (props) {
  const navigation = useNavigation();

  return <Login {...props} navigation={navigation} />;
}
