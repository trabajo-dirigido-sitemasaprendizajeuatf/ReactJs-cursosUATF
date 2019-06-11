import React, { Component } from 'react'
import { SyncLoopHook } from 'tapable';

export default class SubirPoster extends Component{
    constructor(props){
        super(props)
            this.state={
                idcourse:this.props.idcourse


            }

            this.myRef = React.createRef();

            this.sendData=this.sendData.bind(this)
    }

    sendData(e){
        e.preventDefault()

       console.log(this.myRef.current.files[0]);

       var formData = new FormData()
       formData.append('image', this.myRef.current.files[0])
        
       var params={
            method:'POST',
            body:formData,
          
        }

       fetch(`http://localhost:3005/uploadimg/idcourse=${this.props.idcourse}`,params)
       .then(data=>data.json())
       .then(data=>{
           console.log(data);
           
       })
       
    }   


    render(){
        return(
            <div>
                <div className="container w-50">
                {/* <h1>subir Poster</h1> */}
                <h1>{this.props.idcourse}</h1>

                <form  onSubmit={this.sendData}  class="text-center border border-light p-5" >

                    <p class="h4 mb-4">Poster del Curso</p>

                    <p>Seleccione una imagen para el poster del cruso.</p>

                    <div class="custom-file">
                        <input ref={this.myRef} type="file" name="image" class="custom-file-input" id="customFileLang" lang="in"></input>
                        <label class="custom-file-label" for="customFileLang">Seleccione una imagen </label>
                    </div>
                        <div>
                            <br/>
                            <button  class="btn btn-info btn-block" type="submit">Sign in</button>
                        </div>
                    

                </form>
                </div>
            </div>
        )
    }
}