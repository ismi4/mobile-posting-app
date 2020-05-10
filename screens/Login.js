import * as React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import users from "../data/users";

class Login extends React.Component {
  state = {
    emailInput: "",
    passwordInput: "",
  };

  validate = () => {
    const { navigation } = this.props;

    let curr = users.find((user) => {
      return (
        user.email === this.state.emailInput &&
        user.password === this.state.passwordInput
      );
    });
    if (curr == undefined) {
      this.state.emailInput = "";
      this.state.passwordInput = "";
      alert("We didn't find you in our db!");
    } else {
      navigation.navigate("Posts", { user: curr });
    }
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
            <Button title="LOGIN" onPress={this.validate} />
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
