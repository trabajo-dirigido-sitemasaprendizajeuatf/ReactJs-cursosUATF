import React, { Component } from 'react'

import './showStudents.css'

import URL from '../../../config'



function searchingFor(term){
    return (x)=>{
        
        if(x.name.toLowerCase().includes(term.toLowerCase()) || !term){
            return x.name.toLowerCase().includes(term.toLowerCase())
        }
        if(x.ru.toLowerCase().includes(term.toLowerCase()) || !term){
            return x.ru.toLowerCase().includes(term.toLowerCase())
        }
        
    }
}


export default class ShowStundents extends Component{

    constructor(props){
        super(props)
        this.state={
            objAllStudents:[],
            term:''
        }
    }


    componentWillMount(){

        const url = URL.UrlShowAllStudents;
        fetch(url)
        .then(data=>data.json())
        .then(res=>{
            console.log(res)
            
            if(res.message!='no hay estudiantes'){
                this.setState({
                    objAllStudents:res
                })
            }
        })
        .catch(err=>{
            console.log({err:err,error:'fetch -->showStudents'})
        })
        
    }

    searchTable(e){
        console.log(e)
        console.log(e.target.value)

        this.setState({
            [e.target.name]:e.target.value
        })

    }


    render(){

       
        return(
            <div className="contents-showStudents">
                <div className="pt-5 pb-2">

                    <h5>Lista de estudiantes</h5>
                </div>

                <div className="form-search-student row content pt-3 pb-3">
                    
                <div className="col pl-0 ml-0">
                        <form class="form-inline   ">
                            <input 
                                onChange={this.searchTable.bind(this)} 
                                value={this.state.keyUp} 
                                class="input-search form-control form-control-sm ml-0" id="search" name="term" type="text" placeholder="Realizar busqueda"
                                aria-label="Search">
                            </input>
                            <i class="icon-sear-student fas fa-search" aria-hidden="true"></i>
                        </form>
                    </div>
                    <div className="col">
                        {/* intervalo */}
                    </div>
                   
                    
                </div>



               <div className="content">

               <table id="employee_table dtBasicExample" class="table table-striped table-bordered table-sm" cellspacing="0" width="100%">
                    <thead>
                        <tr >
                        <th class="th-sm">Nro</th>
                        <th class="th-sm">Nombres</th>
                        <th class="th-sm">A. Paterno</th>
                        <th class="th-sm">A. Materno</th>
                        <th class="th-sm">C.I.</th>
                        <th class="th-sm">R.U.</th>
                        </tr>
                    </thead>
                    <tbody>
                    {

                        this.state.objAllStudents.filter(searchingFor(this.state.term)).map((d,i)=>{
                            return(
                                
                                    <tr key={i}>
                                        <td>{i+1}</td>
                                        <td>{d.name}</td>
                                        <td>{d.lastname}</td>
                                        <td>{d.motherlastename}</td>
                                        <td>{d.ci}</td>
                                        <td>{d.ru}</td>
                                    </tr>
                               
                            )
                        })
                    }
                    </tbody>
                    <tfoot>
                        <tr>
                        <th>Nro</th>
                        <th>Nombres</th>
                        <th>A. Paterno</th>
                        <th>A. Materno</th>
                        <th>C.I.</th>
                        <th>R.U.</th>
                        </tr>
                    </tfoot>
                    </table>
                
                </div>
           
            </div>
        )
    }
}