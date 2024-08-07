
import axios from 'axios';

import * as actionType from '../constants/cartConstants';
import { BASE_URL } from '../../constants';

const URL =BASE_URL;


export const addToCart = (id, quantity) => async(dispatch) =>{
    try{
        const { data } = await axios.get(`${URL}/product/${id}`)

        dispatch({ type: actionType.ADD_TO_CART, payload: {
            ...data,
            quantity
        }});
    }
    catch(error){
        dispatch({ type: actionType.ADD_TO_CART_FAIL, payload: error.message });
    }
}

export const removeFromCart = (id) => (dispatch) => {
    dispatch({ type: actionType.REMOVE_FROM_CART, payload: id });

}