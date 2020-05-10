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
          backgroundColor: "#414769",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ width: 300 }}>
          <View style={{}}>
            <TextInput
              placeholder={"ex. johndoe@mail.com"}
              style={{
                height: 40,
                borderColor: "#a1a7c2",
                borderRadius: 20,
                borderWidth: 1,
                paddingHorizontal: 10,
                color: "white",
                textAlign: "center",
                fontSize: 15,
              }}
              onChangeText={(text) => this.setState({ emailInput: text })}
              value={this.state.emailInput}
            />
            <View style={{ alignItems: "center" }}>
              <Text style={{ color: "white", marginTop: 5 }}>Email</Text>
            </View>
          </View>
          <View style={{ marginTop: 15 }}>
            <TextInput
              secureTextEntry={true}
              style={{
                height: 40,
                borderColor: "#a1a7c2",
                borderRadius: 20,
                borderWidth: 1,
                paddingHorizontal: 10,
                color: "white",
                textAlign: "center",
                fontSize: 13,
              }}
              onChangeText={(text) => this.setState({ passwordInput: text })}
              value={this.state.passwordInput}
            />
            <View style={{ alignItems: "center" }}>
              <Text style={{ color: "white", marginTop: 5 }}>Password</Text>
            </View>
          </View>
          <View style={{ width: "77%", alignSelf: "center", marginTop: 27 }}>
            <TouchableOpacity
              style={{
                height: 40,
                alignContent: "center",
                justifyContent: "center",
                borderRadius: 20,
              }}
              onPress={this.validate}
            >
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#df4234", "#f16621", "#ea9711"]}
                style={{
                  padding: 10,
                  alignItems: "center",
                  borderRadius: 15,
                }}
              >
                <Text style={{ color: "white", alignSelf: "center" }}>
                  LOGIN
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View style={{ width: "77%", alignSelf: "center", marginTop: 7 }}>
            <TouchableOpacity
              style={{
                height: 40,
                alignContent: "center",
                justifyContent: "center",
                borderRadius: 20,
              }}
              onPress={() => navigation.navigate("Register")}
            >
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#df4234", "#f16621", "#ea9711"]}
                style={{
                  padding: 10,
                  alignItems: "center",
                  borderRadius: 15,
                }}
              >
                <Text style={{ color: "white", alignSelf: "center" }}>
                  REGISTER
                </Text>
              </LinearGradient>
            </TouchableOpacity>
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
