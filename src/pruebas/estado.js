import React, { Component } from 'react'

class Estados extends Component{

    constructor(props){
        super(props)

            this.state = {
                Counter:0
            }
    }

    sumar(e){
        console.log('sumar')

        this.setState({
            Counter:this.state.Counter+1
        })
    }

    restart(e){
        console.log('restar')

        this.setState({
            Counter:this.state.Counter-1
        })
    }

    render(){
        console.log('render=>')
        return(
            <div>
                <span>Contador {this.state.Counter}</span>
                <br/>
                <button onClick={this.sumar.bind(this)}>+</button>
                <button onClick={this.restart.bind(this)}> - </button>

            </div>
        )
    }
}

export default Estados;