import React, { useState } from "react";
import { View, Text } from "react-native";
import { AllItems } from "./AllItems";

export const Discounts = () => {
  const [AllProducts, setAllProducts] = useState([
    { ProductName: "First buy", ProductPrice: "25%" },
    { ProductName: "pack royal", ProductPrice: "75%" },
  ]);

  const submitHandler = () => {
    console.log("Added from Discounts");
  };

  return (
    <View style={{ backgroundColor: "pink", flex: 1 }}>
      <AllItems AllProducts={AllProducts} add={submitHandler} />
    </View>
  );
};
