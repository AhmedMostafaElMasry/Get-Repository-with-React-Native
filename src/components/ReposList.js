import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Repo from "./Repo";

const ReposList = (props) => {
  return (
    <View>
      {props.repos.length ? <Text style={styles.title}>Repositories</Text> : null}
      <FlatList
        data={props.repos}
        renderItem={({ item, index }) => {
          return <Repo item={item}/>
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 20,
  }
})
export default ReposList;
