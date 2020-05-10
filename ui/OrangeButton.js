import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const OrangeButton = (props) => {
  return (
    <View style={[styles.container, props.styles]}>
      <TouchableOpacity
        style={{
          height: 40,
          alignContent: "center",
          justifyContent: "center",
          borderRadius: 20,
        }}
        onPress={props.onPress}
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
            {props.text}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "77%",
    alignSelf: "center",
  },
});

export default OrangeButton;
