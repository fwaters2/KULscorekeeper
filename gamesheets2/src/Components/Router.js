import React, { Component } from 'react'
import Home from './Home/Home'
import ChooseGame from './ChooseGame/ChooseGame'
import Gamesheet from './Gamesheet/Gamesheet';

class Router extends Component{
    constructor(props){
        super(props)
        this.state={
            currentPage:"Home"
        }
    }
    render(){
        switch(this.state.currentPage){
            case "Home":
                return <div>
                    <div>Title: Temp Router</div>
                    <div>Explanation: Easily view components in one place during Dev</div>
                    <Home />
                    <ChooseGame />
                    <Gamesheet />
                </div>
        }
    }
}
export default Router