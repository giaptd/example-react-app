import React from 'react';

import Header from './components/Header';
import Home from './components/Home'

import {connect} from 'react-redux';
import './App.css';

const mapStateToProps = (state)=>({appName: state.appName});

class App extends React.Component{
    render(){
        return (
            <div>
                <Header appName = {this.props.appName}/>
                {this.props.children}
            </div>
        )
    }
}
App.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default connect(mapStateToProps)(App);
