import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
  Button,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { Grid, Row, Col } from "react-native-easy-grid";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { AllItems } from "./AllItems";
export const Categorys = (props) => {
  const submitHandler = () => {
    console.log("Add item from categor");
  };
  const Stack = createStackNavigator();

  const [AllCategory, setAllCategory] = useState([
    { ProductName: "fruit", ProductPrice: 170 },
    { ProductName: "yoghurt", ProductPrice: 25 },

    { ProductName: "vegetables", ProductPrice: 170 },
    { ProductName: "legumes", ProductPrice: 25 },

    { ProductName: "noodles", ProductPrice: 170 },
    { ProductName: "poultry", ProductPrice: 25 },
  ]);

  const [AllProducts, setAllProducts] = useState([
    { ProductName: "Coca cola", ProductPrice: 170 },
    { ProductName: "ifri", ProductPrice: 25 },

    { ProductName: "nutella", ProductPrice: 1500 },

    { ProductName: "couscous", ProductPrice: 190 },

    { ProductName: "activia", ProductPrice: 65 },
    { ProductName: "Coca cola", ProductPrice: 170 },
    { ProductName: "ifri", ProductPrice: 25 },

    { ProductName: "nutella", ProductPrice: 1500 },

    { ProductName: "couscous", ProductPrice: 190 },

    { ProductName: "activia", ProductPrice: 65 },
    { ProductName: "Coca cola", ProductPrice: 170 },
    { ProductName: "ifri", ProductPrice: 25 },

    { ProductName: "nutella", ProductPrice: 1500 },

    { ProductName: "couscous", ProductPrice: 190 },

    { ProductName: "activia", ProductPrice: 65 },
  ]);

  const Category = ({ navigation }) => {
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
            {props.AllCategory.map((data, key) => {
              return (
                <TouchableOpacity
                  style={{
                    flex: 1,
                    height: 80,
                    borderBottomColor: "gray",
                    borderBottomWidth: 0.5,
                  }}
                  key={key}
                  onPress={() => navigation.push("Home")}
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
                        <Ionicons
                          name="ios-arrow-forward"
                          size={24}
                          color="gray"
                        />
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

  const Home = ({ navigation }) => {
    return <AllItems AllProducts={AllProducts} add={submitHandler} />;
  };

  const Notifications = () => {
    return (
      <View>
        <Text>2</Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Category" component={Category} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};
