import axios from "axios";

const URL="http://localhost:5000";


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


