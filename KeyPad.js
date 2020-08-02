import React from "react";
import { View, Text } from "react-native";
import { Grid, Row, Col } from "react-native-easy-grid";

export const KeyPad = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#dfe6e9",
        backgroundColor: "gray",
      }}
    >
      <Grid>
        <Row size={1}>
          <View style={{ backgroundColor: "red", flex: 1 }}>
            <View style={{ flexDirection: "row", flex: 1 }}>
              <Text style={{ flex: 1 }}>DZD 0.00</Text>
              <Text style={{ flex: 1 }}>Add note</Text>
            </View>
          </View>
        </Row>
        <Row size={4}>
          <View style={{ backgroundColor: "yellow", flex: 1 }}>
            <Text>Hi</Text>
          </View>
        </Row>
      </Grid>
    </View>
  );
};
