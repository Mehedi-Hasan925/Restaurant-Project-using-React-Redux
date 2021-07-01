import * as actionType from './ActionType'
// import thunk from 'redux-thunk'
import axios from 'axios'
import { baseUrl } from './baseUrl'


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

export const COMMENT_LOADING = ()=>{
    return{
        type:actionType.COMMENT_LOADING
    }
}

export const COMMENT_LOADED = (comments)=>{
    return {
        type: actionType.COMMENT_LOADED,
        payload:comments
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
        // setTimeout(()=>dispatch(DISH_LOADED(DISHES)),2000)
        axios.get(baseUrl + "dishes")
        .then(response=>response.data)
        .then(dishes=>dispatch(DISH_LOADED(dishes)))
    }
}

export const fetchComment = ()=>{
    return dispatch=>{
        dispatch(COMMENT_LOADING())
        axios.get(baseUrl + "comments")
        .then(response=>response.data)
        .then(comment=>dispatch(COMMENT_LOADED(comment)))
    }
}