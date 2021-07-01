import React from 'react'
// import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button,cardOverlay } from 'reactstrap'
import { Card } from 'react-bootstrap'
import { baseUrl } from '../../redux/baseUrl';

const menuItem = (props)=>{
    return(
        <div>
            <Card style={{ width: '22rem' }} className="m-4">
                <Card.Img variant="top"  src={baseUrl + props.dish.image} className="img-fluid" style={{height:"200px",width:"100%"}} />
                <Card.Body>
                    <Card.Title style={{cursor:"pointer"}} onClick={props.onDishSelect}>{props.dish.name}</Card.Title>
                    <Card.Text>
                       <p style={{fontSize:"18px"}}> BDT. {props.dish.price}/-</p>
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
        </div>
    );
}

export default menuItem;