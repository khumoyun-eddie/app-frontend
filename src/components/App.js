import React,{Component} from 'react';
import {Button,HomePage,TradePage} from '../components/';
import {Route} from 'react-router-dom';
// import {Logo} from '../components/';

class App extends Component{
    render(){
        return(
            <div>
                <Route exact path = '/' component={HomePage} />
                <Route path = '/trade' component={TradePage} />
            </div>
        )
    }
}

export default App;