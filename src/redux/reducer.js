import { combineReducers } from 'redux'
import * as actionType from './ActionType'

// const initState = {
//     dishes: Dishes,
//     comments: comments

// }

//in big project can have too many state object property and each object property 
// can have more than one action. So it is better to write a reducer for each state element. 

const dishReducer=(dishstate={isLoading:false,dishes:[] },action)=>{
    if(action.type===actionType.DISH_LOADING){
        return{
            ...dishstate,
            isLoading:true,
            dishes:[]
        }
    }

    else if(action.type===actionType.DISH_LOADED){
        return{
            ...dishstate,
            isLoading:false,
            dishes:action.payload
        }
    }
    return dishstate;

}

const commentsReducer=(commentState={isloading:true,comments:[]},action)=>{

    if(action.type===actionType.COMMENT_LOADING){
        return{
            ...commentState,
            isloading:true,
            comments:[]

        }
    }

    else if(action.type===actionType.COMMENT_LOADED){
        return{
            ...commentState,
            isloading:false,
            comments:action.payload
        }
        
        // let comment = action.payload;
        // comment.id = commentState.length;
        // comment.date = new Date().toDateString();
        // console.log(comment)
        // return commentState.concat(comment)
    }

    else if(action.type===actionType.ADD_COMMENT){
        return{
            ...commentState,
            comments:commentState.comments.concat(action.payload)
        }

    }

    else{
        return commentState;
    }
}

export const reducer=combineReducers({
    dishes:dishReducer,
    comments:commentsReducer
})

