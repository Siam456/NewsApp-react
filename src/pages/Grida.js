import React, { Component } from 'react';
import {Grid} from '@material-ui/core'

class Grida extends Component {
    render() {
        return (
            <div>
                <Grid item xs={12} container spacing={2}>
                    <Grid item xs={12} sm={6} lg={3}><h1 style={{background: "green"}}>Block 1</h1></Grid>
                    <Grid item xs={12} sm={6} lg={3}><h1 style={{background: "green"}}>Block 2</h1></Grid>
                    <Grid item xs={12} sm={6} lg={3}><h1 style={{background: "green"}}>Block 3</h1></Grid>
                    <Grid item xs={12} sm={6} lg={3}><h1 style={{background: "green"}}>Block 4</h1></Grid>
                </Grid>
            </div>
        );
    }
}

export default Grida;