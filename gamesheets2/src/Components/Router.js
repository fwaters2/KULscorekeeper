import React, { Component } from 'react'
import Home from './Home/Home'
import ChooseGame from './ChooseGame/ChooseGame'
import Gamesheet from './Gamesheet/Gamesheet';

class Router extends Component{
    constructor(props){
        super(props)
        this.state={
            currentPage:"Home",
            game:""
        }
    }
    chooseGame=newGame=>{
        this.setState({
            game: newGame
        })
        console.log(newGame)
    }
    render(){

        switch(this.state.currentPage){
            case "Home":
                return <div>
                    <div>Title: Temp Router</div>
                    <div>Explanation: Easily view components in one place during Dev</div>
                    <Home />
                    <ChooseGame gameChoice={this.chooseGame}/>
                    <Gamesheet gameInfo={this.state.game}/>
                </div>
        }
    }
}
export default Router