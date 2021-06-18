import React, { useState } from "react";
import {
  ProgressViewIOSComponent,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Repo from "../components/Repo";

const RepoScreen = (props) => {
  const { repo } = props.route.params;
  return (
    <View>
      <Repo item={repo} />
      <Text>other Stuff</Text>
    </View>
  );
};
export default RepoScreen;
