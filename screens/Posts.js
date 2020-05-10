import * as React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const Posts = ({ route, navigation }) => {
  const { user } = route.params;

  return (
    <View>
      <Text>{user.email}</Text>
    </View>
  );
};

export default Posts;
