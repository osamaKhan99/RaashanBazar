import React, {Component} from 'react';
import {Route, Switch } from 'react-router-dom';
import Layout from './hoc/layout';
import Home from './components/Home/home';
import Fruits from './components/Fruits/fruits';
import Cart from './components/Cart/cart';


class Routes extends Component {
    render(){
        return(
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/menu" exact component={Fruits}/>
                    <Route path="/menu/:id" component={Fruits}/>
                    <Route path="/myCart" exact component={Cart}/>
                </Switch>
            </Layout>
        );
    }
}
export default Routes;