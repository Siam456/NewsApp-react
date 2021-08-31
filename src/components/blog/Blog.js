import React, { Component } from 'react';
import axios from 'axios';
import { Link , Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Footer from './Footer';
import '../../App.css'

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const today = new Date();
const m = today.getMonth()+1;
const d = today.getDate();
const y = today.getFullYear();
const fd = (d <10) ?  `0${d}`: d;
const fm = (m <10) ?  `0${m}`: m;
const date = `${y}-${fm}-${fd}`

const apikey = '930df116a2ea40f8aa5285d6b976091e'

class Blog extends Component {
    constructor(){
        super();
        this.state = {
            val : []
        }
    }

    componentDidMount(){
        
        axios.get(`https://newsapi.org/v2/everything?q=tesla&from=${date}&sortBy=publishedAt&apiKey=${apikey}`)
        //axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>{
            console.log(response.data.articles);
            this.setState({val: response.data.articles})
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    

    render() {
        var name = -1;
      
        const x = this.state.val;
        const tit = x.map((item, index)=>{
            name ++;
            var path = `/news/${name}`
                return <div style={{marginTop: '50px'}}>
                    
                    <div className="card" style={{width: "92%" , padding: '20px'}}>
                        <div  className='newsimg'>
                            <img src={item.urlToImage} alt='' width="250" height="auto"/>
                        </div>
                        
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.content}</p>
                            <button className='btn btn-primary'><Link to={path} style={{color: 'white', textDecoration:' none'}}>Read More </Link></button>
                        </div>
                        </div>
             </div>
                      
          
        })
        return (
            <div className='blogtop'>
                <h1 style={{marginTop: '6%' , width: "92%" ,border: '1px solid lightblue' , padding: '30px' , borderRadius: '10px'}}>Top News: </h1>
                <p>{tit}</p>
                <Footer />
            </div>
        );
    }
}

export default Blog;