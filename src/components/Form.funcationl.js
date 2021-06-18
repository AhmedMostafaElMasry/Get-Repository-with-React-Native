import React, { useState } from "react";
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const Form = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState("");
  const fetchUserData = async () => {
    setIsLoading(true);
    try {
      const userResponse = await fetch("https://api.github.com/users/" + input);
      const user = await userResponse.json();
      const reposResponse = await fetch(
        "https://api.github.com/users/" + input + "/repos"
      );
      const repos = await reposResponse.json();
      setIsLoading(false);
      props.setUser(user);
      props.setRepos(repos);
    } catch (err) {
      console.log("error", err);
    }
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        value={input}
        placeholder="Enter your username"
        onChangeText={(val) => {
          setInput(val);
        }}
      />
      <View style={styles.button}>
        <Button
          title="Done"
          onPress={() => {
            if (input) {
              fetchUserData();
            }
          }}
        ></Button>
      </View>

      {isLoading ? <ActivityIndicator /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#bbb",
    borderRadius: 20,
    padding: 10,
    marginTop: 12,
  },
  button: {
    margin: 10,
  },
});

export default Form;
