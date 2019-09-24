import React, { Component } from 'react'

import URL from '../../../config'

import './tmaterialApoyo.css'


export default class TmaterialApoyo extends Component{
    constructor(props){
        super(props)
        this.state={
            objMaterialApoyo:'',
            objLinks:'',

            //material de apoyo files
            filename:'',
            linkfile:'',

            //material de apoyo links
            nameLink:'',
            link:''
        }
    };


    componentDidMount(){

        var url =`${URL.UrlFileMaterilaApoyo}${this.props.idVideo}`
        
        fetch(url)
         .then(res=>res.json())
         .then(data=>{

            //  console.log(data)
            var mfile=new Array();
            var aux;
             if(data){
                data.map((d,i)=>{
                    // console.log('===============7777777=====================');
                    // console.log(d.filename);
                    // console.log(d.linkfile);
                    // console.log('=================8888===================');
                    if(d){
                        aux={
                            filename:d.filename,
                            linkfile:d.linkfile
                        }
                        mfile.push(aux)
                    }
                })
               
                if(mfile.length!=0){
                    // console.log('=======file======');
                    // console.log(mfile)
                    // console.log('========end=====');
                
                    this.setState({
                       objMaterialApoyo:mfile
                    })
                }
             }

         })
         .then(err=>{
             console.log(err)
         })

        //  peticion a los links de del material de apoyos

        var url2=`${URL.UrlLinksMaterialApoyo}${this.props.idVideo}`
        
        fetch(url2)
          .then(data=>data.json())
          .then(res=>{
            //   console.log('=======links=====');
            //   console.log(res);
            //   console.log('=======links end=======');

              if(res){
                  var links=new Array();
                  var aux2
                  res.map((d,i)=>{
                      if(d){
                        aux2={
                            nameLink:d.nameLink,
                            link:d.link
                        }
                        links.push(aux2)
                      }
                  })

                  if(links.length!=0){
                      this.setState({
                        objLinks:links
                      })
                  }

              }
              
          })
          .then(err=>{
              console.log(err)
          })

    }
    
    render(){

        console.log('====================================');
        console.log(this.state.objMaterialApoyo);
        console.log('====================================');
        

        if(this.state.objMaterialApoyo==='' && this.state.objLinks==='' ){
            return(
               ""
            )
        }else{

            return(
                <div class="btn-group border-0"> 
                    <h6 class=" dropdown-toggle material-apoyo" style={{color:"#099AD1"}}  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-folder-open"></i>
                        {/* MATERAL DE APOYO */}
                        Recursos   
                    </h6>
                    <div class="dropdown-menu border-0">
                        {
                            !this.state.objMaterialApoyo?''
                            :
                            this.state.objMaterialApoyo.map((d,i)=>{
                                return(
                                    <a class="dropdown-item file-name border-0" href={d.linkfile} target="_blank" >
                                    <i class="far fa-file-alt pr-2 border-0"></i>
                                    {d.filename}
                                    </a>
                                )
                            })
                        }
                        
    
                        <div class="dropdown-divider border-0"></div>
                        {
                            !this.state.objLinks?''
                            :
                            this.state.objLinks.map((d,i)=>{
                                return(
                                    <a class="dropdown-item file-name border-0" href={d.link} target="_blank">
                                    <i class="fas fa-link pr-2 border-0"> </i>
                                    {d.nameLink}
                                    </a>
                                )
    
                            })
                        }
                        
                    </div>
                </div>
            )
        }

    }
};