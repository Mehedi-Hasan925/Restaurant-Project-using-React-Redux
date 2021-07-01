import React from 'react'
import { Alert } from 'react-bootstrap';

const contactAlert=(props)=>{
    return (
        <div style={{marginTop:"10px"}}>
             <Alert variant={props.alertType}>{props.alertText}</Alert>
        </div>
    )
}

export default contactAlert;
