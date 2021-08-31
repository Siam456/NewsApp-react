import React, { Component } from 'react';
import {Radio} from '@material-ui/core'
import Favourite from '@material-ui/icons/Favorite'
import FavouriteBorder from '@material-ui/icons/FavoriteBorder'


class Redioa extends Component {
    constructor(){
        super()
        this.state={
            val: ''
        }
    }
    myfun = (e) =>{
        this.setState({val: e.target.value});
    }
    render() {
        const x = this.state.val;
        return (
            
            <div>
                <Radio color="primary" icon={<FavouriteBorder />} checkedIcon={<Favourite/>} checked={x === 'female'} value='female' onChange={this.myfun}></Radio> <span>Female</span>
                <Radio  color="primary" icon={<FavouriteBorder />} checkedIcon={<Favourite/>}  checked={x === 'male'}  value='male' onChange={this.myfun}></Radio> <span>Male</span>
                <Radio  color="primary" icon={<FavouriteBorder />} checkedIcon={<Favourite/>}  checked={x === 'other'}  value='other' onChange={this.myfun}></Radio> <span>Other</span><br>
                </br>
                <h1>{this.state.val}</h1>
            </div>
        );
    }
}

export default Redioa;