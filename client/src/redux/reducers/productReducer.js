import * as actionType from "../constants/productsConstants"

//when despatch is executed it send the result in the payload thorught the action
export const getProductsReducer=(state={products:[]},action)=>{
    switch(action.type){
        case actionType.GET_PRODUCTS_SUCCESS:
            return {products:action.payload}
        case actionType.GET_PRODUCTS_FAIL:
            return{error:action.payload}
        default:
            return state
    }
}

