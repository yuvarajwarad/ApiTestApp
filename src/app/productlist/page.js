"use client";
import React, { useEffect, useState } from "react";
async function productList() {
  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();
  console.log(data);
  return data.products;
}

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productList().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div>
      <h3
        style={{
          margin: "6px",
          padding: "21px",
          backgroundColor: "lightgreen",
          borderRadius: "25px",
        }}
      >
        In the Product page
      </h3>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td style={{ textAlign: "center" }}>{product.title}</td>
              <td>{product.description}</td>
              <td>${product.price}</td>
              <td>{product.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
