import React, { Component } from 'react'
import {Form,Button} from 'react-bootstrap'
import axios from 'axios'
import {baseUrl} from '../../redux/baseUrl'
import ContactAlert from './contactAlert'



class Contact extends Component {
    constructor(props){
        super(props)
        this.state={
            alertshow: false,
            alertType: null,
            alertText: null
        }
    }
    
    handleSubmit=(event)=>{
        event.preventDefault()
        const name=event.target.name.value;
        const email=event.target.email.value;
        const message=event.target.message.value;

        const feedback = {
            name:name,
            email:email,
            message:message
        }

        axios.post(baseUrl + "feedback",feedback)
        .then(response=>response.status)
        .then(status=>{
            if(status===201){
                 this.setState({
                    alertshow: true,
                    alertType: "success",
                    alertText: "Fedback sent successfully!"
                 })
                 setTimeout(()=>{
                     this.setState({
                        alertshow: false
                     })
                 },2000)
            }
            else{
                this.setState({
                    alertshow: true,
                    alertType: "danger",
                    alertText: "Oh snap! You got an error!"
                 })
            }
        })
    }

    render() {
        document.title="Contact"
        let contactAlert = null;
        if(this.state.alertshow){
            contactAlert = <ContactAlert alertType={this.state.alertType} alertText={this.state.alertText} />
        }
        return (
            <div className="col-md-10  mx-auto">
            <div className="row m-5">
                <div className="col-8 mx-auto" style={{border:"2px solid #ECECEC"}} >
                    {contactAlert}
                    <h4 className="mt-3">Send your Feedback</h4>
                    <Form style={{padding:"15px"}} onSubmit={(event)=>this.handleSubmit(event)} >
                        <Form.Group className="mb-3">
                            <Form.Control type="text" name="name" placeholder="Enter your Name" required />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control type="email" name="email" placeholder="E-mail" required />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Control as="textarea" rows={9}  name="message" placeholder="Message" required />
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