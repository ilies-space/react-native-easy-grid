import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert, ScrollView } from "react-native";
import { stockData } from "./selectedProductsData";
import { Grid, Row, Col } from "react-native-easy-grid";

export const CurrentSells = () => {
  const [count, setCount] = useState(0);

  const calclatPrice = (productPrice) => {
    setCount(count + productPrice);
  };
  return (
    <View
      style={{
        flex: 1,
        borderLeftWidth: 1,
        borderColor: "black",
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          borderBottomWidth: 1,
          borderColor: "black",
          backgroundColor: "white",
          height: 60,
          justifyContent: "center",
          paddingLeft: 20,
        }}
      >
        <Text style={{ fontSize: 23 }}>Current sells</Text>
      </View>
      <View style={{ flex: 1 }}>
        <ScrollView>
          {stockData.map((data, key) => {
            return (
              <TouchableOpacity
                style={{ flex: 1, height: 80, paddingHorizontal: 20 }}
                key={key}
                onPress={() => calclatPrice(data.ProductPrice)}
              >
                <Grid>
                  <Col size={1}>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: "center",
                      }}
                    >
                      <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                        {data.ProductName}
                      </Text>
                    </View>
                  </Col>
                  <Col size={1}>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "flex-end",
                      }}
                    >
                      <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                        {"DZD  " + data.ProductPrice}
                      </Text>
                    </View>
                  </Col>
                </Grid>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      <TouchableOpacity
        style={{
          borderBottomWidth: 1,
          borderColor: "black",
          backgroundColor: "white",
          height: 60,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#3498db",
        }}
      >
        <Text style={{ fontSize: 25, color: "white", fontWeight: "bold" }}>
          {"Charge DZD " + count}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
