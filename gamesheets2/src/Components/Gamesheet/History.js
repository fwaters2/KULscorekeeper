import React, { Component } from 'react'
const dLIst=[
    "steve","Michael","Juan","Mike","Julius"
]

class History extends Component{
    render(){
        return(
            <div className="History">
                <div>Container for Goals or Ds</div>
                <div>
                    {this.props.Ds.map(x=>(
                        <div>{x}</div>
                    ))}
                </div>
            </div>
        )
    }
}
export default History