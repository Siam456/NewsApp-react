import React, { Component } from 'react';
import {Checkbox} from '@material-ui/core'
import Favourite from '@material-ui/icons/Favorite'
import FavouriteBorder from '@material-ui/icons/FavoriteBorder'

var flag = true;
class Checka extends Component {
    constructor(){
        super()
        this.state = {
            color : "primary",
            val : []
        }
    }
    render() {
        return (
            <div>
                <Checkbox
                value = "siam"
                icon={<FavouriteBorder />}
                checkedIcon={<Favourite />}
                onChange = {(e)=>{
                    if(flag===true){
                        var data = this.state.val;
                        data.push(e.target.value);
                        console.log(this.state.val)
                        flag = false;
                    }
                    else{
                        flag = true;
                    }
                }}
                color = {this.state.color}
                ></Checkbox>Siam
            </div>
        );
    }
}

export default Checka;