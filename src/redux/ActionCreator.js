import * as actionType from './ActionType'
// import thunk from 'redux-thunk'
import DISHES from '../data/dishes'


export const addComment = (dishId,author,rating,comment)=>{
    return{
        type:actionType.ADD_COMMENT,
        payload:{
            dishId:dishId,
            author:author,
            rating:rating,
            comment:comment
    }
    }
}

export const DISH_LOADING = ()=>{
    return {
        type:actionType.DISH_LOADING

    }
}

export const DISH_LOADED = (dishes)=>{
    return{
        type:actionType.DISH_LOADED,
        payload:dishes
    }
}

export const fetchDishes=()=>{
    return dispatch=>{
        dispatch(DISH_LOADING());
        setTimeout(()=>dispatch(DISH_LOADED(DISHES)),2000)
    }
}