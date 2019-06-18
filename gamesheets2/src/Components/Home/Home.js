import React, { Component } from 'react'
import './Home.css'

class Home extends Component {
    render(){
        return(
            <div className="Home">
                <div>Title: Home Screen <br/> This is the Home Component to Welcome User and direct them to the choose game screen</div>
                <button>Choose a game to score</button>
            </div>
        )
    }
}
export default Home