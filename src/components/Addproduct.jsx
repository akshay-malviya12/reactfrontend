import React, { useState, useEffect } from "react";

const Addproduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);

  const addProduct = async () => {
    console.log(!name); /* if true return mean error value not get
    but return false means value get*/

    if (!name || !price || !category || !company) {
      setError(true);
      return false;
    }

    console.log("addproduct", name, price, category, company);
    // const userId = JSON.parse(localStorage.getItem("user"))._id;
    // let productResult = await fetch("localhost:5000/add", {
    //   method: "post",
    //   body: JSON.stringify(name, price, category, company),
    //   headers: {
    //     "Contant-Type": "application-json",
    //     authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
    //   },
    // });
    // productResult = await productResult.json();
    // console.log(productResult);
  };

  return (
    <div className="product">
      <h1>Add Product</h1>
      <input
        type="text"
        className="inputBox"
        Placeholder="Enter name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      {error && !name && (
        <span className=".invalid.input">Enter valid name</span>
      )}

      <input
        type="text"
        className="inputBox"
        placeholder="Enter price"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      ></input>
      {error && !price && (
        <span className=".invalid.input">Enter valid price</span>
      )}

      <input
        type="text"
        className="inputBox"
        PlaceHolder="Enter category"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      ></input>
      {error && !category && (
        <span className=".invalid.input">Enter valid category</span>
      )}

      <input
        type="text"
        className="inputBox"
        Placeholder="Enter company"
        value={company}
        onChange={(e) => {
          setCompany(e.target.value);
        }}
      ></input>
      {error && !company && (
        <span className=".invalid.input">Enter valid company</span>
      )}

      <button type="button" onClick={addProduct} className="appbotton">
        Add Product
      </button>
    </div>
  );
};
export default Addproduct;
