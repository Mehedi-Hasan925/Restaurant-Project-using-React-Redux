import React from 'react'
import { Button,Modal,Image } from 'react-bootstrap'
import Comments from './comments'

const DishDetail = (props)=>{
    return (
        <div>
            <Modal {...props} size="lg" aria-labelledby="example-custom-modal-styling-title">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h4>{props.dish.name} <br/> Price: {props.dish.price}/-</h4> 
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image src={props.dish.image} style={{height:"370px",width:"100%"}} />
                    <p className="text-justify">{props.dish.description}</p>
                    <b>Comments</b>
                    <hr style={{margin:"5px"}} />
                    <Comments comments ={props.dish.comments}  />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default DishDetail;