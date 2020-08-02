import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import { CurrentSells } from "./CurrentSells";
import { SideList } from "./SideList";
import { FavoriteProduct } from "./FavoriteProduct";
import { AllItems } from "./AllItems";
import { KeyPad } from "./KeyPad";
import { Categorys } from "./Categorys";
import { Discounts } from "./Discounts";

export default function App() {
  const submitHandler2 = (ProductName, Price) => {
    // check(ProductName, Price);
    // //check if exist
    // //check if exist
    // setSelectedList((prevTodos) => {
    //   return [{ ProductName: ProductName, ProductPrice: Price }, ...prevTodos];
    // });
    console.log("add");
  };

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

  const [currentScreen, setCurrentScreen] = useState();

  const openKeyPad = () => {
    setCurrentScreen(<KeyPad />);
  };

  const openCategorys = () => {
    setCurrentScreen(
      <Categorys AllCategory={AllCategory} add={submitHandler} />
    );
  };

  const openDiscounts = () => {
    setCurrentScreen(<Discounts />);
  };

  const opeFav = () => {
    setCurrentScreen(<FavoriteProduct submitHandler={submitHandler} />);
  };

  const openAllItems = () => {
    setCurrentScreen(
      <AllItems AllProducts={AllProducts} add={submitHandler} />
    );
  };

  // switch (SelectedScreen) {
  //   case "home":
  //     setCurrentScreen(
  //       <FavoriteProduct
  //         submitHandler={submitHandler}
  //         calclatPrice={calclatPrice}
  //       />
  //     );
  //     break;
  //   case "allitems":
  //     true;
  //     break;
  //   case "category":
  //     true;
  //     break;
  //   case "desicount":
  //     true;
  //     break;
  //   case "keypad":
  //     <AllItems />;
  //     break;
  //   default:

  //     [];
  // }

  //handlePrice count :
  const [count, setCount] = useState(0);

  const calclatPrice = (productPrice) => {
    setCount(count + productPrice);
    console.log("calculate");
  };

  const calclatPriceDeleteItem = (productPrice) => {
    setCount(count - productPrice);
  };

  const calclatPriceRest = () => {
    setCount(0);
  };

  //check if product exist : todo
  function containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
      if (list[i] === obj) {
        console.log(true);
      }
    }

    console.log(true);
  }

  //List of Selected Products

  const [selectedList, setSelectedList] = useState([
    //{ ProductName: "Coca cola", ProductPrice: 170 }
  ]);

  //cheking if content exist

  const check = (ProductName, price) => {
    // Check if a value exists in the fruits array

    if (selectedList.some((product) => product.ProductName === ProductName)) {
      console.log("Object found inside the array..");
    } else {
      console.log("Object not found.");
    }
  };

  {
    /*this function for adding new item to the list */
  }

  const submitHandler = (ProductName, Price) => {
    //check(ProductName, Price); --> it work
    //check if exist
    //check if exist
    calclatPrice(Price);

    setSelectedList((prevTodos) => {
      return [{ ProductName: ProductName, ProductPrice: Price }, ...prevTodos];
    });
  };

  const rest = () => {
    setSelectedList([]), setCount(0);
  };

  const deleteAll = () => {
    Alert.alert("confirmer", "voulez-vous supprimer tout les éléments?", [
      {
        text: "Annuler",
        style: "cancel",
      },
      {
        text: "Oui",
        onPress: () => rest(),
        //add setcount to 0,
      },
    ]);
  };

  {
    /*this function for deleting item when we click on it */
  }
  const pressHandler = (ProductName, price) => {
    Alert.alert("confirmer", "voulez-vous supprimer cet élément?", [
      {
        text: "Annuler",
        style: "cancel",
      },
      {
        text: "Oui",
        onPress: () =>
          setSelectedList((prevTodos) => {
            calclatPriceDeleteItem(price);
            return prevTodos.filter((todo) => todo.ProductName != ProductName);
          }),
      },
    ]);
  };

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
            <SideList
              openKeyPad={openKeyPad}
              opeFav={opeFav}
              openAllItems={openAllItems}
              openCategorys={openCategorys}
              openDiscounts={openDiscounts}
            />
          </View>
        </Col>
        <Col size={64}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
            }}
          >
            {currentScreen}
          </View>
        </Col>
        <Col size={32}>
          <View
            style={{
              flex: 1,
              width: "100%",
            }}
          >
            <CurrentSells
              SelectedProducts={selectedList}
              count={count}
              pressHandler={pressHandler}
              deleteAll={deleteAll}
            />
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
