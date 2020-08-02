import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import { CurrentSells } from "./CurrentSells";
import { SideList } from "./SideList";
import { FavoriteProduct } from "./FavoriteProduct";
export const stockData = [
  {
    ProductName: "Coca cola",
    ProductPrice: 170,
    quantity: "1",
  },
  {
    ProductName: "iffri",
    ProductPrice: 25,
    quantity: "1",
  },
  {
    ProductName: "milka",
    ProductPrice: 220,
    quantity: "1",
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Grid>
        <Col size={22}>
          <View
            style={{
              flex: 1,
              width: "100%",
            }}
          >
            <SideList />
          </View>
        </Col>
        <Col size={64}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
            }}
          >
            <FavoriteProduct />
          </View>
        </Col>
        <Col size={32}>
          <View
            style={{
              flex: 1,
              width: "100%",
            }}
          >
            <CurrentSells />
          </View>
        </Col>
      </Grid>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dfe6e9",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
});
