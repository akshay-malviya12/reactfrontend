import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Updateproduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);
  // const params = useParam();
  const navigate = useNavigate();

  useEffect(() => {
    // console.log(params);
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    // console.log(params);
    // let result = await fetch(`http://localhost:5000/product/${param.id}`, {
    //   headers: {
    //     authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
    //   },
    // });
    // result = await result.json();
    // console.log(result);
    // setName(result.name);
    // setPrice(result.price);
    // setCategory(result.category);
    // setCategory(result.company);
  };
  const UpdateProduct = async () => {
    /* if true return mean error value not get
    but return false means value get*/
    console.log(name, price, category, company, error);
    if (!name || !price || !category || !company) {
      setError(true);
      return false;
    }

    console.log("Updateproduct", name, price, category, company);
    // const userId = JSON.parse(localStorage.getItem("user"))._id;
    // let productResult = await fetch(
    //   `http://localhost:5000/product/${params.id}`,
    //   {
    //     method: "post",
    //     body: JSON.stringify(name, price, category, company),
    //     headers: {
    //       "Contant-Type": "application-json",
    //       authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
    //     },
    //   },
    // );
    // productResult = await productResult.json();
    // console.log(productResult);
    // navigate("/");
  };

  return (
    <div className="product">
      <h1>Update Product</h1>
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
        Placeholder="Enter price"
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
        Placeholder="Enter category"
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

      <button type="button" onClick={UpdateProduct} className="appbotton">
        Update Product
      </button>
    </div>
  );
};
export default Updateproduct;
