import React, { Component } from "react";
import { View, Text, TouchableOpacity, Alert, Button } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";

export const FavoriteProduct = (props) => {
  //handl Ading items to list
  const addthing = (name, price) => {
    props.submitHandler(name, price);
  };

  const EmptyCard = () => {
    return (
      <Col>
        <TouchableOpacity
          style={{
            flex: 1,
            borderWidth: 1,
            borderColor: "gray",
            marginRight: 10,
          }}
          onLongPress={() => Alert.alert("Add product?")}
        ></TouchableOpacity>
      </Col>
    );
  };

  const ProductHolderEmpty = () => {
    return (
      <View style={{ flex: 1, padding: 5 }}>
        <Grid>
          <EmptyCard />
          <EmptyCard />
          <EmptyCard />
          <EmptyCard />
        </Grid>
      </View>
    );
  };

  const ProductHolder = () => {
    return (
      <View style={{ flex: 1, padding: 5 }}>
        <Grid>
          <Col>
            <View
              style={{
                flex: 1,
                borderWidth: 1,
                borderColor: "gray",
                marginRight: 10,
              }}
            >
              {ProductExmple("Coca cola", 170)}
            </View>
          </Col>
          <Col>
            <View
              style={{
                flex: 1,
                borderWidth: 1,
                borderColor: "gray",
                marginRight: 10,
              }}
            >
              {ProductExmple("ifri", 25)}
            </View>
          </Col>
          <Col>
            <View
              style={{
                flex: 1,
                borderWidth: 1,
                borderColor: "gray",
                marginRight: 10,
              }}
            >
              {ProductExmple("Milka", 300)}
            </View>
          </Col>
          <Col>
            <View
              style={{
                flex: 1,
                borderWidth: 1,
                borderColor: "gray",
                marginRight: 10,
              }}
            ></View>
          </Col>
        </Grid>
      </View>
    );
  };

  const ProductExmple = (name, price) => {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
        }}
        onPress={() => addthing(name, price)}
      >
        <Grid>
          <Row size={70}>
            <View
              style={{
                backgroundColor: "#b2bec3",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 25 }}
              >
                .
              </Text>
            </View>
          </Row>
          <Row size={30}>
            <View
              style={{
                backgroundColor: "white",
                flex: 1,
                justifyContent: "center",
                marginLeft: 5,
              }}
            >
              <Text
                style={{ color: "black", fontSize: 17, fontWeight: "bold" }}
              >
                {name}
              </Text>
            </View>
          </Row>
        </Grid>
      </TouchableOpacity>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 10,
        paddingBottom: 10,
      }}
    >
      <Grid>
        <Row size={1}>
          <ProductHolder />
        </Row>
        <Row size={1}>
          <ProductHolderEmpty />
        </Row>
        <Row size={1}>
          <ProductHolderEmpty />
        </Row>
        <Row size={1}>
          <ProductHolderEmpty />
        </Row>
        <Row size={1}>
          <ProductHolderEmpty />
        </Row>
      </Grid>
    </View>
  );
};
