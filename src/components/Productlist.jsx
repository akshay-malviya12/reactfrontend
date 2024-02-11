import React, { useState, useEffect } from "react";
// import Product from '../../../backend/db/Product';
import { Link } from "react-router-dom";

const productlist = () => {
  // const [products,setProduct]=useState()

  // useEffect(()=>{
  //     getProduct();
  // },[])

  // const getProduct=async ()=>{
  // let result =await fetch('http://localhost:5000/products',{
  //     headers:{
  //         authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
  //     }
  // })
  // result=await result.json();
  // setProduct(result)
  // }
  // console.log("products",products)

  // const deleteProduct=async (id)=>{
  //     console.log(id)
  //     let result=await fetch(`http://localhost:5000/product/${id}`,{
  //         method:"Delete",
  //         headers:{
  //             authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
  //         }
  //     });
  //     result=await result.json();

  //     if(result){
  //         // alert("Product is delete.")
  //         getProduct();
  //     }
  // }

  // const SerachHandle=async (event)=>{
  //     console.log(event.target.value)
  //     if(key){
  //     let key=event.target.value;
  //     let result= await fetch(`http://localhost:5000/search/${key}`,{
  //         headers:{
  //             authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
  //         }
  //     });
  //     result=await result.json();
  //     if(result){
  //         setProduct(result)
  //     }

  //     }else{
  //        getProduct()
  //     }

  // }

  return (
    <div className="product-list">
      <h3>Product List</h3>
      <input
        className="search-product-box"
        type="text"
        placeholder="Serach Product"
      ></input>
      <ul>
        <li>S.No.</li>
        <li>Name</li>
        <li>Price</li>
        <li>category</li>
        <li>company</li>
        <li>Delete/Update</li>
      </ul>
      {/* {
              products.length>0 ?  products.map((item,index)=>{
            <ul key={item._id}>
                <li>{index+1}</li>
                <li>{item.name}</li>
                <li>${item.price}</li>
                <li>{item.category}</li>
                <li>{item.company}</li>
                <li><button onclick={()=>deleteProduct(item._id)}>Delete</button>                
                <Link to={"/update/"+item._id}>Update</Link>                
                </li>
            </ul>
                }):<h1>No Result Found.</h1>
            } */}
    </div>
  );
};

export default productlist;
