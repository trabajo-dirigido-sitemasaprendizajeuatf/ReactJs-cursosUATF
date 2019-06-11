import React, { Component } from 'react'
import './navbarprueba.css'



class Navbar extends Component{

    constructor(props){
        super(props)
            this.state={

            }
    }

    render(){
        return(
            <body>
            <nav>
                <div className="toggle">

                </div>
                <ul>
                    <li> <a href="#">Home</a></li>
                    <li> <a href="#">About</a></li>
                    <li> <a href="#">Services</a></li>
                    <li> <a href="#">Contac</a></li>
                </ul>
            </nav>
                
            </body>
        )
    }

};

export default Navbar;