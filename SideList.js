import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
export const SideList = () => {
  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        style={{ height: 50, justifyContent: "center", paddingLeft: 20 }}
      >
        <Entypo name="menu" size={32} color="#2d3436" />
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: "#2d3436",
          height: 50,
          justifyContent: "center",
          paddingLeft: 20,
        }}
      >
        <Text style={{ color: "white", fontSize: 20 }}>Favorite</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          height: 50,
          justifyContent: "center",
          paddingLeft: 20,
        }}
      >
        <Text style={{ color: "#2d3436", fontSize: 20 }}>Al Items</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 50,
          justifyContent: "center",
          paddingLeft: 20,
        }}
      >
        <Text style={{ color: "#2d3436", fontSize: 20 }}>Categories</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 50,
          justifyContent: "center",
          paddingLeft: 20,
        }}
      >
        <Text style={{ color: "#2d3436", fontSize: 20 }}>Discounts</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 65,
          justifyContent: "center",
          paddingLeft: 20,
        }}
      >
        <Text style={{ color: "#2d3436", fontSize: 20 }}>Keypad</Text>
      </TouchableOpacity>
    </View>
  );
};
