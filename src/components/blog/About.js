import React, { Component } from 'react';
import Footer from './Footer';
import Me from '../Image/siam_n.jpg'
import Typography from '@material-ui/core/Typography';
import { Phone } from '@material-ui/icons';
import { Mail } from '@material-ui/icons';
import { Card } from '@material-ui/core';
import { Box } from '@material-ui/core';
import '../../App.css'

class About extends Component {
    render() {
        return (
            <div className='abouttop'>
                <img alt="" src={Me} width='200px' height='200px' style={{borderRadius: '100%'}}/>
                <br></br>
                <Box>
                    <Typography variant='h4' color='primary' style={{marginTop: '10px'}}>About Me</Typography>
                    <Typography variant='p'  style={{marginTop: '10px'}}>I am studying Computer Science and Engineering at Daffodil International University. I love programming, learning, and creating new things.</Typography>
                
                </Box>
                <Card color='inherit'  style={{marginTop: '40px'}}>
                    <Typography variant='h4'  color='primary' >Contract</Typography>
                    <Typography variant='p' style={{marginTop: '8px'}}>Hasibul Hasan</Typography> <br></br>
                    <Typography variant='p' style={{marginTop: '8px'}}>Dhaka, Bangladesh</Typography> <br></br>
                    <Typography variant='p' style={{marginTop: '8px'}}><Phone />+8801755770538</Typography> <br></br>
                    <Typography variant='p' style={{marginTop: '8px'}}><Mail />hasibul15-11038@diu.edu.bd</Typography> <br></br>
                </Card>
                <Footer />
            </div>
        );
    }
}

export default About;