import React from "react";
import Item from "./ProductItem";

export default class Products extends React.Component {
  render() {
    return (
      <div id="products" class="container-fluid text-center bg-grey">
        <h2>Grain Products</h2>
        <br/>
        <div class="row text-center">
          <Item src="img/product-wheat.jpg" name="Milling Wheat"/>
          <Item src="img/product-durum.jpg" name="Durum"/>
          <Item src="img/product-barleyseed.jpg" name="Malting Barley"/>
          <Item src="img/product-feed-barley.jpg" name="Feed Barley"/>
          <Item src="img/product-linseed.jpg" name="Linseed"/>
          <Item src="img/product-peas.jpg" name="Peas"/>
          <Item src="img/product-lentils.jpg" name="Lentils"/>
          <Item src="img/product-soybeans.jpg" name="Soybeans"/>
          <Item src="img/product-yellow-peas.jpg" name="Yellow Peas"/>
        </div>
        <br/>
        <h2>Process Materials</h2>
        <br/>
        <div class="row text-center">
          <Item src="img/product-wheat-flour.jpg" name="Wheat Flour"/>
          <Item src="img/product-canola-oil.jpg" name="Canola Oil"/>
        </div>
      </div>
    );
  }
} 
