import React, { Component } from 'react';
import { Router, Route }  from "react-router-dom"



import './App.css';
import Navbar from './components/navbar/navbar'
import Footer from './components/navbar/footer'
import Signin from './components/login/signin'
import Signup from './components/login/signup'
import UrlApi from './config'
// body
import Body from '../src/components/boby/body'

//home instructor
import Home from '../src/components/instructor/crearCurso/home'
import CreateCourse from '../src/components/instructor/crearCurso/crearCurso'

//crear seccion
import CrearSeccion from '../src/components/instructor/CrearSeccion/CrearSeccion'

//detale del curso
import DetalleCurso from '../src/components/Students/DetalleCurso'
import SubirPoster from './components/instructor/crearCurso/subirPoster'

import HomeVide from './components/instructor/subirVideosSubsecciones/homeVideo'
import NuevaSeccion from './components/instructor/CrearSeccion/nuevaSeccion'

// history
import History from './components/utils/history'
// pruebas
import PEstados from './pruebas/estado'
import Formulario from './pruebas/formulario'

class App extends Component {
    constructor(props){
      super(props)
        this.state={
          token:localStorage.token,
          idUser:localStorage.id,
          nameUser:'',
          emailUser:'',
          role:''
        }
        this.updateToken=this.updateToken.bind(this)
        this.cerrarSesion=this.cerrarSesion.bind(this)
    }

    updateToken(name,email,role){
      this.setState({
        token:localStorage.token,
        idUser:localStorage.id,
        nameUser:name,
        emailUser:email,
        role:role
      })
      
      
    }

    cerrarSesion(){
      this.setState({
        token:localStorage.token,
        idUser:localStorage.id,
        nameUser:'',
        emailUser:'',
        role:''
      })
    }

    componentWillMount(){
      
      console.log(this.state.idUser)

      const id={id:this.state.idUser}

        var url ='http://localhost:3005/userInterface',
            params={
                    method:'POST',
                    body:JSON.stringify(id),
                    headers:{
                      'Content-Type':'application/json'
                  }
                }

        fetch(url,params)
        .then(data=>data.json())
        .then(data=>{
            console.log(data)
            this.setState({
              nameUser:data.name,
              emailUser:data.email,
              role:data.role
            })
        })
        .catch(err=>{
          console.log(err)
        })
    }



  render() {
    // console.log('render -->');
    // console.log(this.state)

    return (
      <Router history={History}>
      <div className="App">
      {/* <Navbarprueba/> */}
      <Navbar token={ this.state.token }  cerrarSesion={this.cerrarSesion} 
      name={this.state.nameUser} email={this.state.emailUser} id={this.state.idUser} role={this.state.role} /> 
        
        <header className="App-header">
         
          
        {/* <Login/> */}
        {/* <Route exact path="/signup" render={()=><Signup onClickF={this.asignarUsuarioState}/>}/> */}
        {/* <PEstados/> */}
      
        <Route exact path="/instructor" render={()=><Home onClickF={this.asignarUsuarioState}/>}/>
        <Route exact path="/" render={()=><Body onClickF={this.asignarUsuarioState}/>}/>
        <Route exact path="/createcourse" render={()=><CreateCourse onClickF={this.asignarUsuarioState}/>} />
        <Route exact path="/subirposter" render={()=><SubirPoster onClickF={this.asignarUsuarioState}/>} />

        <Route exact  path="/seccions/:id" component={CrearSeccion}/>
        <Route exact path="/seccions/addseccion/:n/:id" component={NuevaSeccion}  />

        <Route  path="/DetalleCurso/:id"  component={DetalleCurso} />
        <Route  path="/homevide/:id" component={HomeVide}/>
        {/* <Body/> */}
          {/* <Formulario/> */}
          
        </header>

        <Signin token={ this.state.token} updateToken2={this.updateToken }/>
        <Footer/>
      </div>
      </Router>
    );
  }
}

export default App;
