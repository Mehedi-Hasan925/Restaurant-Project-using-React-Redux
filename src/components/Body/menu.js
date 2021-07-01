import React, { Component } from 'react'
import MenuItem from './menuItem.js'
import DishDetail from './dishDetails.js'
import {connect} from 'react-redux'
import * as actionCreator from '../../redux/ActionCreator'
import Loading from '../Body/Loading'

const mapMyStoreToProps=(state)=>{
    return{
        dishes:state.dishes,
        comments:state.comments
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        addComment:(dishId,author,rating,comment)=>dispatch(actionCreator.addComment(dishId,author,rating,comment)),
        fetchDishes:()=>dispatch(actionCreator.fetchDishes()),
        fetchComment:()=>dispatch(actionCreator.fetchComment())
}}

class foodMenu extends Component{
    state={
        dishCliked:null,
        modalShow:false
    }

    onDishSelect = (dish)=>{
        this.setState({
            dishCliked:dish,
            modalShow:true
        })
    }

    hideModal = ()=>{
        this.setState({
            // dishCliked:null,
            modalShow:false
        })
    }

    componentDidMount(){
        this.props.fetchDishes();
        this.props.fetchComment();
    }
    render(){
        document.title="Menu"
        if(this.props.dishes.isLoading){
            return(
                <div>
                    <Loading />
                </div>
            );
        }
        else{
            // return(
                const menu = this.props.dishes.dishes.map((item)=>{
                    return(
                        <div className="col-md-4">
                            <MenuItem dish={item} key={item.id} onDishSelect={()=>this.onDishSelect(item)} />
                        </div>
                    )
                })
        
                let dishDetail = null;
                if(this.state.dishCliked!=null){
                    const comments=this.props.comments.comments.filter(comment=>{
                        return comment.dishId === this.state.dishCliked.id
                    })
                    dishDetail = <DishDetail addComment={this.props.addComment} dish={this.state.dishCliked} comment={comments} show={this.state.modalShow} onHide={ this.hideModal} commentIsLoading={this.props.comments.isLoading} />
                }
                
                return(
                    <div className="container">
                        <div className="row">
                                {menu}
                            {dishDetail}
                            {/* <div className="row">
                                {dishDetail}
                            </div> */}
                        </div>
                        
                    </div>
                )
            // )
        }
        
    }
}

export default connect(mapMyStoreToProps,mapDispatchToProps) (foodMenu);