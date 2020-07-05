import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './Redux/reducers';


const store = applyMiddleware()(createStore);
const App = () => {

  

  return(
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}



ReactDOM.render(<Provider store={store(reducers)}><App/></Provider>,document.getElementById('root'));