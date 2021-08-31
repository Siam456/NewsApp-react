
import React, { Component } from 'react';
import {Button , ButtonGroup} from '@material-ui/core'
import GridOn from '@material-ui/icons/GridOn'

var changec = true;
class Buttona extends Component {
    constructor(){
        super();
        this.state={
            color : 'primary',
            disablebtn: false
        }
    }
    render() {
        return (
            <div>
                <Button
                variant="contained"
                color={this.state.color}
                onClick={()=>{
                    if(changec === true){
                        this.setState({color: 'secondary'});
                        changec = false;
                    }
                    else{
                        this.setState({color: 'primary'});
                        changec = true;
                    }
                }}
                disabled = {this.state.disablebtn}
                >siam</Button>
<br></br>
                <ButtonGroup variant="outlined"
                color="primary">
                    <Button startIcon={<GridOn />}>one</Button>
                    <Button startIcon={<GridOn />}>two</Button>
                    <Button startIcon={<GridOn />}>three</Button>
                </ButtonGroup>
            </div>
        );
    }
}

export default Buttona;