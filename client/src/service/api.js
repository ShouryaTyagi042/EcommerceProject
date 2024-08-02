import axios from "axios";
import { BASE_URL } from "../constants";

const URL=BASE_URL;


export const authSignUp=async(data) =>{
    try{
      return await axios.post(`${URL}/signup`,data);
    }catch(error){
        console.log("Error while calling sign api ",error)
    }
}


export const authlogin=async(data) =>{
  try{
    return await axios.post(`${URL}/login`,data);
  }catch(error){
      console.log("Error while calling login api ",error)
      return error.response
  }
}

export const authSellerLogin=async(data)=>{
  try{
    return await axios.post(`${URL}/seller-login`,data);
  }catch(error){
      console.log("Error while calling login api ",error)
      return error.response
  }

}

export const authsellerSignUp=async(data) =>{
  try{
    return await axios.post(`${URL}/seller-signup`,data);
  }catch(error){
      console.log("Error while calling sign api ",error)
  }
}

export const getSellerProduct=async(seller)=>{
  try{
    const {data}=axios.get(`${URL}/products`);
  }catch(error){

  }
}


