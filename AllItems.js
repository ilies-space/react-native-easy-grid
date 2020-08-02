import React from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { Grid, Row, Col } from "react-native-easy-grid";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export const AllItems = (props) => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          borderBottomWidth: 1,
          borderColor: "black",
          backgroundColor: "white",
          height: 60,
          justifyContent: "center",
          paddingLeft: 20,
          flexDirection: "row",
        }}
      >
        <View style={{ justifyContent: "center" }}>
          <EvilIcons name="search" size={32} color="gray" />
        </View>
        <TextInput
          placeholder={"Seach all items"}
          style={{ padding: 2, fontSize: 20, flex: 1 }}
        />
      </View>

      <View style={{ flex: 1 }}>
        <ScrollView>
          {props.AllProducts.map((data, key) => {
            return (
              <TouchableOpacity
                style={{
                  flex: 1,
                  height: 80,
                  borderBottomColor: "gray",
                  borderBottomWidth: 0.5,
                }}
                key={key}
                onPress={() => props.add(data.ProductName, data.ProductPrice)}
                //props.pressHandler(data.ProductName, data.ProductPrice)
              >
                <Grid>
                  <Col size={0.2}>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        backgroundColor: "#b2bec3",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: "bold",
                          color: "white",
                        }}
                      >
                        <MaterialCommunityIcons
                          name="triangle-outline"
                          size={24}
                          color="white"
                        />
                      </Text>
                    </View>
                  </Col>
                  <Col size={1}>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        marginLeft: 15,
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
                        marginRight: 15,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: "bold",
                          color: "gray",
                        }}
                      >
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
    </View>
  );
};
