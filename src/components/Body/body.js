import React from 'react'
import Menu from './menu.js'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import {Route,Redirect,Switch} from 'react-router-dom'


const projectBody = ()=>{
    return (
        <div className="">
            <Switch>
                <Route path="/home" exact component={Home} />
                <Route path="/menu" exact component={Menu} />
                <Route path="/about" exact component={About} />
                <Route path="/contact" exact component={Contact} />
                <Redirect from="/" to="/home" />
            </Switch>
        </div>
    );
}

export default projectBody;


