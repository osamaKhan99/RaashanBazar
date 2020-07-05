import React, { Component } from 'react';
import axios from 'axios';
import Card from '../../widgets/card/card';

class Fruits extends Component {

    state = {
        info: [],
        match:[]
    }

    componentDidMount(){
        axios.get( `http://localhost:3000/home?id=${this.props.match.params.id}`)
        .then(res=>{
            console.log(res.data[0])
             let match = res.data[0]

        axios.get(`http://localhost:3000/menu?id${match.id}`)
        .then(response => {
            console.log("CONSOLE",response.data);
            this.setState({
                match,
                info: response.data
            })
        })
    })
}

    render(){
        console.log("match", this.state.match)
        const item = this.state.match
        return(
            <div>
                <Card  menu={this.state.info} no={item.id}/>
            </div>
        )
    }
}
export default Fruits;