import React, { Component } from 'react'
import Dishes from '../../data/dishes.js'
import MenuItem from './menuItem.js'
import DishDetail from './dishDetails.js'

class foodMenu extends Component{
    // const [modalShow, setModalShow] = useState(false);
    state={
        dishes:Dishes,
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
    render(){

        const menu = this.state.dishes.map((item)=>{
            return(
                <div className="col-md-4">
                    <MenuItem dish={item} key={item.id} onDishSelect={()=>this.onDishSelect(item)} />
                </div>
            )
        })

        let dishDetail = null;
        if(this.state.dishCliked!=null){
            dishDetail = <DishDetail dish={this.state.dishCliked} show={this.state.modalShow} onHide={ this.hideModal} />
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
    }
}

export default foodMenu