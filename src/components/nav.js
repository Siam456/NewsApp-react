import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Route, BrowserRouter as Router, NavLink, Link, Switch} from 'react-router-dom'
import Home from './blog/Home'
import About from './blog/About'
import Blog from './blog/Blog';


class Nav extends Component {
constructor(props){
    super(props);
    this.state ={
        x : 0
    }
}
componentDidMount(){
    this.setState({x: this.props.val})
}
    
    render() {

        return (
            <div className='container'>
                <Router>
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                    <Link className="navbar-brand" to ='/' style={{marginLeft: '10%'}}>News App</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav" style={{marginLeft: '55%'}}>
                        <ul className="navbar-nav">
                            <NavLink exact className="nav-link" to = '/' activeStyle={{color:'green'}}>Home</NavLink>
                            <NavLink exact className="nav-link" to = '/News' activeStyle={{color:'green'}}>News</NavLink>
                            <NavLink exact className="nav-link" to = '/about' activeStyle={{color:'green'}}>About</NavLink>
                            
                        </ul>
                    </div>
                    </nav>
                    
                        <Switch>
                            <Route exact path="/" component={Home}></Route>
                            <Route exact path="/news" component={Blog}></Route>
                            <Route exact path="/about" component={About}></Route>
                           

                            
                            
                            
                            
                            </Switch>
                            
                    </Router>

                    <p>{this.state.x}</p>
            </div>
        );
    }
}

export default Nav;