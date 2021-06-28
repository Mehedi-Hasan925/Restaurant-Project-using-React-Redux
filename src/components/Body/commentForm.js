import React from 'react'
import {Form,Button} from 'react-bootstrap'

// const mapDispatchToProps=(dispatch)=>{
//     return{
//         addComment:(dishId,author,rating,comment)=>dispatch({
//             type:"ADD_COMMENT",
//             payload:{
//                 dishId:dishId,
//                 author:author,
//                 rating:rating,
//                 comment:comment
//         }
//         })
// }}

function handleCommentForm(event,props){
    event.preventDefault();
    const author=event.target.name.value;
    const rating=event.target.rating.value;
    const comment=event.target.comment.value;

    props.addComment(props.dishId,author,rating,comment)
    // props.dispatch({
    //     type:"ADD_COMMENT",
    //     payload:{
    //         dishId:props.dishId,
    //         author:author,
    //         rating:rating,
    //         comment:comment,

    //     }
    // })
}

const commentForm=(props)=> {
    // console.log(props.dishId);
    return (
        <div className="mx-auto">
            <div className="row">
                <div className="col-8 mx-auto" style={{border:"2px solid #ECECEC"}} >
                    <Form style={{padding:"15px"}} onSubmit={(event)=>handleCommentForm(event,props)} >
                        <Form.Group className="mb-3">
                            <Form.Control type="text" name="name" placeholder="Enter your Name" required />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control as="select" name="rating">
                                <option>Rating</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Control as="textarea"  name="comment" placeholder="Comment Here" required />
                        </Form.Group>

                        <Button variant="success" type="submit" className="form-control" >
                            Comment
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default commentForm;