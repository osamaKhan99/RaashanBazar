import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './menu.css'

class Menu extends Component {
    constructor(props){
       super(props);
        this.state={
            items: [],
           // list:[]
        }
    }
componentDidMount(){
    axios.get(`http://localhost:3000/home`)
    .then(response => {
        console.log(response.data[0].title)
        this.setState({
            items: response.data
        })
    })
    // axios.get(`http://localhost:3000/menu`)
    // .then(res=>{
    //     this.setState({
    //         list: res.data
    //     })
    // })
}
    render(){
        console.log(this.state.items)
        return(
        <div className="Menu">
            <h3>Our Products</h3>
            <hr style={{margin:'1.8em 12em',border:'1px solid black'}}/>
            <div className="grid">
                {this.state.items.map((item)=>{
                    return(
                        <ul  key={item.id}>
                            
                                <li className="Background"  style={{backgroundImage: `url('/images/home/${item.image}')`}}>
                                <Link style={{textDecoration: 'none'}} to={{
                                pathname: `/menu/${item.id}`
                            }}>
                                   <div className="title_1">{item.title}</div>
                                   </Link>            
                                </li>
                            
                        </ul>    
                    )
                })} 
            </div>
        </div>
    )
}
}
export default Menu;