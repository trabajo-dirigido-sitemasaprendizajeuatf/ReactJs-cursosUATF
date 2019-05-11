import React, { Component } from 'react';
import { BrowserRouter as Router, Route }  from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar'
import Footer from './components/navbar/footer'
import Signin from './components/login/signin'
import Signup from './components/login/signup'

// pruebas
import PEstados from './pruebas/estado'
import Formulario from './pruebas/formulario'

class App extends Component {
    constructor(props){
      super(props)
        this.state={
          token:localStorage.token
        }
        this.updateToken=this.updateToken.bind(this)
    }

    updateToken(){
      this.setState({
        token:localStorage.token
      })
    }

  render() {
    return (
      <Router>
      <div className="App">
      {/* <Navbarprueba/> */}
      <Navbar token={ this.state.token } /> 
        <header className="App-header">
         
          
        {/* <Login/> */}
        {/* <Route exact path="/signup" render={()=><Signup onClickF={this.asignarUsuarioState}/>}/> */}
        {/* <PEstados/> */}
      
          <Signin token={ this.state.token} updateToken2={this.updateToken }/>

        </header>
        <Footer/>
      </div>
      </Router>
    );
  }
}

export default App;
