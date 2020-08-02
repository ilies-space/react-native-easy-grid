import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
export const SideList = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        style={{ height: 50, justifyContent: "center", paddingLeft: 20 }}
      >
        <Entypo name="menu" size={32} color="#2d3436" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnOff} onPress={() => props.opeFav()}>
        <Text style={styles.textOff}>Favorite</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btnOff}
        onPress={() => props.openAllItems()}
      >
        <Text style={styles.textOff}>All Items</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnOff}
        onPress={() => props.openCategorys()}
      >
        <Text style={styles.textOff}>Categories</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnOff}
        onPress={() => props.openDiscounts()}
      >
        <Text style={styles.textOff}>Discounts</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnOff}
        onPress={() => props.openKeyPad()}
      >
        <Text style={styles.textOff}>Keypad</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btnOn: {
    backgroundColor: "#2d3436",
    height: 50,
    justifyContent: "center",
    paddingLeft: 20,
  },
  btnOff: {
    height: 65,
    justifyContent: "center",
    paddingLeft: 20,
  },
  textOn: { color: "white", fontSize: 20 },
  textOff: { color: "#2d3436", fontSize: 20 },
});
