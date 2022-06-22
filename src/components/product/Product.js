import React, { useState, useEffect, useContext } from "react";
import "./Product.css";
import { productsContext } from './../../contexts/productsContext'

function Product() {
  const { products, setProducts } = useContext(productsContext);
  const { searchQuery, setSearchQuery } =useContext(productsContext)
  
  return (
    <>
      <h2 className="text_featured">Featured</h2>
      { 
        products.map((item, key) => (
        <div className="main_product">
          <div key={key} className="product">
            <img className="product_image" src={item.images[0]} alt="" />

            <div>
              <h4>{item.title}</h4>

              <p>{item.description}</p>

              <span>$ {item.price}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Product;
