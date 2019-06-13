import React, { Component} from 'react'
import { Link } from 'react-router-dom'
import Playvideo from './PlayVideStudent/videoReact'
import URL from '../../config'
import './TomarElcursoPlayer.css'


export default class TomarCursoPlay extends Component{

    constructor(props){
        super(props);
        this.state={
            IDCOURSE:this.props.match.params.id,
            ObjSeccionesDelCurso:[],
            linkvideo:''
        }
        this.myRef=React.createRef()
        // this.onChange=this.onChange.bind(this)
        console.log(this.state.linkvideo);
        
    };


    onChange=(link)=>{


        console.log(link.replace("\\",'/'));
        link=link.replace("\\",'/')
      
      
      this.setState({
          linkvideo:link
      })
      console.log('o')
    }


    componentWillMount(){

        var url=`${URL.UrlMostarSeccionUnCurso}${this.props.match.params.id}`
        console.log(url)
        fetch(url)
         .then(res=>res.json())
         .then(data=>{
            console.log(data);
            this.setState({
                ObjSeccionesDelCurso:data
            })
            
         })
         .catch(err=>{console.log(err)})
    }

    render(){
      console.log(this.state.linkvideo,'9999999');

        return(
            <div className="container-curso-playerVideo">

                <section class="magazine-section">

                <div class="row">
                    {/* ------------seccion del videos player-------- */}
                    <div class="col-lg-8 col-md-12">

                    <div class="single-news mb-lg-0 mb-4">
                    
                        <div class="video overlay rounded z-depth-1-half mb-2">
                        {/* <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Slides/3.jpg" alt="Sample image"></img> */}
                        <Playvideo link2={this.state.linkvideo}/>
                        <a>
                            <div class="mask rgba-white-slight"></div>
                        </a>
                        </div>


                    </div>

                    </div>
                    {/* --------end of seccion de video plaer----- */}

                 

                    {/* -----lateral derecho----- */}
                    <div class="col-lg-4 col-md-12">
                    <div class="single-news mb-5">


{/* ---------------- */}
 <div class="table-wrapper-scroll-y my-custom-scrollbar">
 {
     this.state.ObjSeccionesDelCurso.map(data=>{
                return(

                    <table id="mdb-flag-table" class="table table-hover">
                        <thead>
                        <tr>
                        <th><h6 className="font-weight-bold" id="seccion-title"> Seccion:{data.seccion} {data.titleSeccion}</h6></th>
                        </tr></thead>
                        <tbody>
                            {data.video.map(data2=>{
                                return (
                                    <tr>
                                    <td class="flag-name" id="title-video">
                                   <div    ref={this.myRef} id={data2.idVideo} onClick={()=> this.onChange(data2.linkfile)}>
                                     <i class="fas fa-play-circle p-1"  ></i>{data2.title}: {data2.idVideo}
                                    </div>
                                     {/* <input type="text" name="idvideo" onClick={this.onChange.bind(this)} value={data2.linkfile}></input> */}
                                     </td>
                                    <td class="disabled"></td>
                                    <td><i class="far fa-arrow-alt-circle-down"></i>Materia de apoyo</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                     </table>
                )
     })
 
 }
  
</div>
{/* -------------------- */}



                    </div>

                    </div>
                    {/* ---end de lateral derecho-- */}

                </div>

                </section>
{/* ------------- */}
<div class="classic-tabs mx-2">

<ul class="nav tabs-cyan" id="myClassicTabShadow" role="tablist">
  <li class="nav-item">
    <a class="nav-link  waves-light active show" id="profile-tab-classic-shadow" data-toggle="tab" href="#profile-classic-shadow"
      role="tab" aria-controls="profile-classic-shadow" aria-selected="true">Profile</a>
  </li>
  <li class="nav-item">
    <a class="nav-link waves-light" id="follow-tab-classic-shadow" data-toggle="tab" href="#follow-classic-shadow"
      role="tab" aria-controls="follow-classic-shadow" aria-selected="false">Follow</a>
  </li>
  <li class="nav-item">
    <a class="nav-link waves-light" id="contact-tab-classic-shadow" data-toggle="tab" href="#contact-classic-shadow"
      role="tab" aria-controls="contact-classic-shadow" aria-selected="false">Contact</a>
  </li>
  <li class="nav-item">
    <a class="nav-link waves-light" id="awesome-tab-classic-shadow" data-toggle="tab" href="#awesome-classic-shadow"
      role="tab" aria-controls="awesome-classic-shadow" aria-selected="false">Be awesome</a>
  </li>
</ul>

<div class="tab-content card" id="myClassicTabContentShadow">
  <div class="tab-pane fade active show" id="profile-classic-shadow" role="tabpanel" aria-labelledby="profile-tab-classic-shadow">
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
      totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
      sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
      consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
      dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
      incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
  </div>
  <div class="tab-pane fade" id="follow-classic-shadow" role="tabpanel" aria-labelledby="follow-tab-classic-shadow">
    <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
      aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
      quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
  </div>
  <div class="tab-pane fade" id="contact-classic-shadow" role="tabpanel" aria-labelledby="contact-tab-classic-shadow">
    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
      deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
      provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
      Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est
      eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
      assumenda est, omnis dolor repellendus. </p>
  </div>
  <div class="tab-pane fade" id="awesome-classic-shadow" role="tabpanel" aria-labelledby="awesome-tab-classic-shadow">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
      ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
      eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
      deserunt mollit anim id est laborum.</p>
  </div>
</div>

</div>




            </div>
        )
    };
};