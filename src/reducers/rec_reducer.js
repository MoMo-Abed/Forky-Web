import {GET_RECIPES,GET_RECIPE,GET_LOVED_RECIPE,GET_ING} from '../action/types';

const initialState = {
    recipes: [],
    recipe: {},
    LovedRec: [],
    ShopING: []

};

export default function(state=initialState,action){
    switch (action.type){
        case GET_RECIPES:
            return {
                ...state,
                recipes: action.payload
            }

        case GET_RECIPE: 
            return{
                ...state,
                recipe: action.payload
            }

        case GET_ING:
        return{
            ...state,
            ShopING: action.state
        }

        case GET_LOVED_RECIPE:
            return{
                ...state,
                LovedRec:[action.state,...state.LovedRec]
            }
        
    default :
        return state
    }
    
}