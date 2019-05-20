import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class Footer extends Component{
    render(){
        return(
            <footer className="page-footer font-small white pt-4">

            <div className="container-fluid text-center text-md-left text-dark">
            
            <div className="row">

                <div className="col-md-6 mt-md-0 mt-3">
                
                <h5 className="text-uppercase">Footer Content</h5>
                <p>Here you can use rows and columns here to organize your footer content.</p>

                </div>

                <hr className="clearfix w-100 d-md-none pb-3"></hr>

                <div className="col-md-3 mb-md-0 mb-3">

                    <h5 className="text-uppercase text-dark">Links</h5>

                    <ul className="list-unstyled">
                    <li>
                        <a href="#!">Link 1</a>
                    </li>
                    <li>
                        <a href="#!">Link 2</a>
                    </li>
                    <li>
                        <a href="#!">Link 3</a>
                    </li>
                    <li>
                        <a href="#!">Link 4</a>
                    </li>
                    </ul>

                </div>

                <div className="col-md-3 mb-md-0 mb-3">

                    <h5 className="text-uppercase">Links</h5>

                    <ul className="list-unstyled text-dark">
                    <li>
                        <a href="#!">Link 1</a>
                    </li>
                    <li>
                        <a href="#!">Link 2</a>
                    </li>
                    <li>
                        <a href="#!">Link 3</a>
                    </li>
                    <li>
                        <a href="#!">Link 4</a>
                    </li>
                    </ul>

                </div>

            </div>

            </div>
        
            <div className="footer-copyright text-center text-dark py-3">© 2019 Copyright:Carrera Ingenieria de Sistemas
            {/* <a href="https://mdbootstrap.com/education/bootstrap/"> Ingenieria de Sistemas</a> */}
            </div>
            

        </footer>
        
        )
    }

}

export default Footer;