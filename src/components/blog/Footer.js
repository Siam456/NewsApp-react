import React, { Component } from 'react';
import { Typography} from '@material-ui/core'


class Footer extends Component {
    render() {
        return (
            <div style={{marginTop: '3%', padding: '20px',
            backgroundColor: 'rgba(0,0,0,.1)', width: '100%'}}>
                <Typography>Design by <span style={{color: 'blue'}}>.</span> Hasibul Hasan</Typography>
            </div>
        );
    }
}

export default Footer;