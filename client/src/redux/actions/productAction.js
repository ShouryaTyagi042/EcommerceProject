import axios from 'axios'
import * as actionTypes from '../constants/productsConstants'
const URL="http://localhost:5000"
    //first one is the normal function second is the middleware
    //diff between axios and redux is that the dispatch is done with the help of a middleware
export const getProducts=()=>async(dispatch)=>{
    try{
        //obj destructing from reposnse received from backend
        const {data}=await axios.get(`${URL}/products`)
        dispatch({type: actionTypes.GET_PRODUCTS_SUCCESS, payload:data})
        //internally calls our reducer uses the useReducer hooks
    }catch(error){
        dispatch({type:actionTypes.GET_PRODUCTS_FAIL,payload:error.message})
    }
}