
import Dishes from '../data/dishes'
import comments from '../data/comments'
const initState = {
    dishes: Dishes,
    comments: comments

}

export const reducer=(state=initState,action)=>{
    if(action.type==="ADD_COMMENT"){
        let comment = action.payload;
        comment.id = state.comments.length;
        comment.date = new Date().toDateString();
        console.log(comment)
        return {
            ...state,
            comments: state.comments.concat(comment)
        }
    }
    return state
}

