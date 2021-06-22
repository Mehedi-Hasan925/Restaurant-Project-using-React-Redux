import React, { Component } from 'react'
import {Form,Button} from 'react-bootstrap'


class Contact extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"",
            email:"",
            message:""
        }
    }

    handleSubmit=(event)=>{
        event.preventDefault()
        const name=event.target.name.value;
        const email=event.target.email.value;
        const message=event.target.message.value;

        this.setState({
            name:name,
            email:email,
            message:message
        })
    }

    render() {
        document.title="Contact"
        return (
            <div className="col-md-10  mx-auto">
            <div className="row m-5">
                <div className="col-8 mx-auto" style={{border:"2px solid #ECECEC"}} >
                    <h4 className="mt-3">Send your Feedback</h4>
                    <Form style={{padding:"15px"}} onSubmit={(event)=>this.handleSubmit(event)} >
                        <Form.Group className="mb-3">
                            <Form.Control type="text" name="name" placeholder="Enter your Name" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control type="email" name="email" placeholder="E-mail" />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Control as="textarea" rows={9}  name="message" placeholder="Message" />
                        </Form.Group>

                        <Button variant="success" type="submit" className="form-control" >
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
        )
    }
}

export default Contact