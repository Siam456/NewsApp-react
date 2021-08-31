import React, { Component } from 'react';
import axios from 'axios';
import '../../App.css'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PeopleIcon from '@material-ui/icons/Person'
import Clockicon from '@material-ui/icons/Timelapse'
import {Link} from 'react-router-dom'
import Footer from './Footer';
import { Grid } from '@material-ui/core';

const c1 = Math.floor(Math.random() * 5);
const c2 = Math.floor(Math.random() * 10);
const c3 = Math.floor(Math.random() * 15);
const c4 = Math.floor(Math.random() * 19);


const today = new Date();
const m = today.getMonth();
const d = today.getDate();
const y = today.getFullYear();
const fd = (d <10) ?  `0${d}`:d;
const fm = (m <10) ?  `0${m}`:m;
const date = `${y}-${fm}-${fd}`
console.log(date)


class Home extends Component {
  constructor(props){
    super(props)

    this.state = {
      card1: {},
      card2: {},
      card3: {},
      card4: {},
      id: 0
    }
  }

  componentDidMount() {
    

      
      const apikey = 'eb590d0bf1424841ba79542f20916990'
      axios.get(`https://newsapi.org/v2/everything?q=tesla&from=${date}&sortBy=publishedAt&apiKey=${apikey}`)
      //axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response)=>{
          // console.log(response.data.articles);
          this.setState({card1: response.data.articles[c1] ,
            card2: response.data.articles[c2], 
            card3: response.data.articles[c3],
            card4: response.data.articles[c4]})

            console.log(c1)
          
          
      })
      .catch((error)=>{
          console.log(error)
      })
  }
  
  render() {
    var path1 = `/blog/${c1}`
    var path2 = `/blog/${c2}`
    var path3 = `/blog/${c3}`
    var path4 = `/blog/${c4}`

    return ( <div className='maindivM'>
      <div className='maindiv'>
          <div className='subdivm'>
              
            <Card>
                <CardActionArea>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" style={{textAlign: 'start'}}>
                        {this.state.card1.author}
                    </Typography>
                    <Typography variant="t4" color="textSecondary" component="p" style={{textAlign: 'start'}}>
                        {this.state.card1.title}
                    </Typography>

                    <div style={{display: 'flex' , marginBottom: '5px', marginTop: '20px'}}>
                        <Clockicon fontSize='small'  style={{color: '#556470' , margin: '2px'}}/>
                        <Typography variant='p' style={{color: '#556470'}}>{this.state.card1.publishedAt}</Typography>
                    </div>

                    </CardContent>
                </CardActionArea>
                <CardActions>
                    
                    <Button variant="outlined" size="small" color="primary">
                    <Link to={path1} style={{textDecoration:' none'}}>Read More </Link>
                    </Button>
                </CardActions>
                <img src={this.state.card1.urlToImage} style={{width: '100%'}}></img>
                </Card>

          </div>

          <div  className='subdiv'>
              
            <Card>
                <CardActionArea>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" style={{textAlign: 'start'}}>
                        {this.state.card2.author}
                    </Typography>
                    <Typography variant="t4" color="textSecondary" component="p" style={{textAlign: 'start'}}>
                        {this.state.card2.title}
                    </Typography>

                    <div style={{display: 'flex' , marginBottom: '5px', marginTop: '20px'}}>
                        <Clockicon fontSize='small'  style={{color: '#556470' , margin: '2px'}}/>
                        <Typography variant='p' style={{color: '#556470'}}>{this.state.card2.publishedAt}</Typography>
                    </div>

                    </CardContent>
                </CardActionArea>
                <CardActions>
                    
                    <Button variant="outlined" size="small" color="primary">
                    <Link to={path2} style={{textDecoration:' none'}}>Read More </Link>
                    </Button>
                </CardActions>
                
                </Card>



                <Card style={{marginTop: '5%'}}>
                <CardActionArea>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" style={{textAlign: 'start'}}>
                        {this.state.card3.author}
                    </Typography>
                    <Typography variant="t4" color="textSecondary" component="p" style={{textAlign: 'start'}}>
                        {this.state.card3.title}
                    </Typography>

                    <div style={{display: 'flex' , marginBottom: '5px', marginTop: '20px'}}>
                        <Clockicon fontSize='small'  style={{color: '#556470' , margin: '2px'}}/>
                        <Typography variant='p' style={{color: '#556470'}}>{this.state.card3.publishedAt}</Typography>
                    </div>

                    </CardContent>
                </CardActionArea>
                <CardActions>
                    
                    <Button variant="outlined" size="small" color="primary">
                    <Link to={path3} style={{textDecoration:' none'}}>Read More </Link>
                    </Button>
                </CardActions>
                
                </Card>

          </div>

          <div  className='subdiv'>
              
            <Card>
                <div style={{display: 'flex' , marginBottom: '30px', marginTop: '20px'}}>
                    <PeopleIcon fontSize='small'  style={{color: '#556470' , margin: '2px'}}/>
                    <Typography variant='p' style={{color: '#556470', marginRight: '10%'}}>{this.state.card4.author}</Typography>
                </div>
                <img src={this.state.card4.urlToImage} style={{width: '100%'}}></img>
                <div style={{display: 'flex' , marginBottom: '5px', marginTop: '20px'}}>
                        <Clockicon fontSize='small'  style={{color: '#556470' , margin: '2px'}}/>
                        <Typography variant='p' style={{color: '#556470'}}>{this.state.card4.publishedAt}</Typography>
                    </div>
                <CardActionArea>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" style={{textAlign: 'start'}}>
                        {this.state.card4.title}
                    </Typography>
                    <Typography variant="t4" color="textSecondary" component="p" style={{textAlign: 'start'}}>
                        {this.state.card4.content}
                    </Typography>



                    </CardContent>
                </CardActionArea>
                <CardActions>
                    
                    <Button variant="outlined" size="small" color="primary">
                    <Link to={path4} style={{textDecoration:' none'}}>Read More </Link>
                    </Button>
                </CardActions>
                
                </Card>

          </div>
        
      </div>
      <Footer />
      </div>
    );
  }
}

export default Home;