import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import users from "../data/users";
import { LinearGradient } from "expo-linear-gradient";
import OrangeButton from "../ui/OrangeButton";

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
      this.setState({
        emailInput: "",
      });
      this.setState({
        passwordInput: "",
      });

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
          backgroundColor: "#414769",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ width: 300 }}>
          <View>
            <TextInput
              placeholder={"ex. johndoe@mail.com"}
              style={{
                height: 40,
                borderColor: "#a1a7c2",
                borderRadius: 20,
                borderWidth: 2,
                paddingHorizontal: 10,
                color: "white",
                textAlign: "center",
                fontSize: 15,
              }}
              onChangeText={(text) => this.setState({ emailInput: text })}
              value={this.state.emailInput}
            />
            <View style={{ alignItems: "center" }}>
              <Text
                style={{ color: "white", marginTop: 5, fontWeight: "bold" }}
              >
                Email
              </Text>
            </View>
          </View>
          <View style={{ marginTop: 15 }}>
            <TextInput
              secureTextEntry={true}
              style={{
                height: 40,
                borderColor: "#a1a7c2",
                borderRadius: 20,
                borderWidth: 2,
                paddingHorizontal: 10,
                color: "white",
                textAlign: "center",
                fontSize: 15,
              }}
              onChangeText={(text) => this.setState({ passwordInput: text })}
              value={this.state.passwordInput}
            />
            <View style={{ alignItems: "center" }}>
              <Text
                style={{ color: "white", marginTop: 5, fontWeight: "bold" }}
              >
                Password
              </Text>
            </View>
          </View>

          <OrangeButton
            onPress={this.validate}
            text="LOGIN"
            styles={{ marginTop: 17 }}
          />

          <OrangeButton
            onPress={() => navigation.navigate("Register")}
            text="REGISTER"
            styles={{ marginTop: 5 }}
          />
        </View>
      </View>
    );
  }
}

export default function (props) {
  const navigation = useNavigation();

  return <Login {...props} navigation={navigation} />;
}
