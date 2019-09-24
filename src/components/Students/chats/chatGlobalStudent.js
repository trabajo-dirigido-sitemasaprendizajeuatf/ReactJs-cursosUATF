import React, { Component } from 'react'

import io from 'socket.io-client'

import './css/custom.css'
// import './css/style.css'
import URL from '../../../config'
import UTILS from '../PlayVideStudent/utils'


export default class ChatGlobalStudent extends Component{

    constructor(props){
        super(props)
        this.state={
            message:[],

            messagesGuardados:[],

            // datos que seran enviados 
            idVideo:this.props.idVideo,
            idUser:localStorage.getItem('id'),
            dateMessage:'',

            //response server 
            objMessage:[],

            inputMessage:null
            
            };

            console.log('constructor',this.props)
        };



        

        componentWillReceiveProps(){
                        // http://localhost:3005/show/chat/forum/video
            const url = URL.URLshowChatForum;
            const idVideo={idVideo:this.props.idVideo,}
            
            const params={
                method:'POST',
                body:JSON.stringify(idVideo),
                headers:{
                    'Content-Type': 'application/json'
                  }
            }

            fetch(url,params)
                .then(doc=>doc.json())
                .then(res=>{
                    console.log('=====chat forum23456=====');
                    console.log(res.message)
                    console.log(res);
                    console.log('=============');
                    if(!res.message){

                        this.setState({
                            messagesGuardados:res,
                            message:[]
                        })
                    }else{
                        this.setState({
                            messagesGuardados:[]
                        })
                    }

                })
                .catch(err=>{
                    console.log(err)
                })
        }



        componentDidMount(){

            console.log('----componentDidMount')

                                // http://localhost:3005/
            const UrlServerSocket = URL.URLSERVERSOCKET;

            this.socket = io(UrlServerSocket)
            

            this.socket.on('message',(message)=>{
                console.log('message ------',message)
                this.setState({
                    // message:[message, ...this.state.message],
                    message:[]
                })
                this.componentWillReceiveProps()

                
            })
        }

        onChange(e){
            console.log(e.target.value)
            console.log(e.target.name)
            this.setState({
                [e.target.name]:e.target.value
            })
        }

        sendMessage= async(e)=>{

            // e.preventDefault();
            console.log('llego--')
            console.log(e)
            

            // const inputPregunstaVideo = e.target.value
            const inputPregunstaVideo = this.state.inputMessage;

            console.log(inputPregunstaVideo)
            console.log('.------fecht')
            if(this.state.inputMessage){
                const message = {
                        preguntaForum:inputPregunstaVideo,
                        from:'me',
                        idUser:localStorage.getItem('id'),
                        idVideo:this.state.idVideo,
                    }


                    // this.socket.emit('message',message)


                    var url =  `${URL.UrlListUserId}${this.state.idUser}`
                await    fetch(url)
                    .then(doc=>doc.json())
                    .then(user=>{
                         var messa={
                             pregunta:inputPregunstaVideo,
                             name:user.name,
                             lastname:user.lastname,
                             date:UTILS.convertirFecha(new Date())
                         }
                        this.setState({message:[messa, ...this.state.message]})
                    })
                    
                  await  this.socket.emit('message',message)

               await this.setState({
                    objMessage:message,
                    inputMessage:''
                })

                // e.target.value = ''
                // this.setState({
                //     inputMessage:''
                // })

              
            //    this.componentWillReceiveProps()  
        
            }
        }

        render(){
            
            console.log(this.state)
            
            const message = this.state.message.map((d,i)=>{
                                return(
                                    
                                    // <li key={i}>

                                    //     <b>{d.name} {d.lastname} : {d.pregunta} </b>
                                    //     <b>{d.date}</b>
                                    // </li> 
                                    <div class="post border border-light">
                                                <div class="wrap-ut pull-left">
                                                    <div class="userinfo pull-left">
                                                        <div class="avatar">
                                                            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(17)-mini.jpg" class="rounded-circle z-depth-1-half" />
                                                        
                                                            <div class="status red">&nbsp;</div>
                                                        </div>
                
                                                        <div class="icons">
                                                            <img src="./images/icon2.jpg" alt="" /><img src="./images/icon4.jpg" alt="" />
                                                        </div>
                                                    </div>
                                                    <div class="posttext pull-left">
                                                        {/* name user */}
                                                        <h2><a href="#" className="text-capitalize">{d.name} {d.lastname}</a></h2>
                                                        {/* comentario user */}
                                                        <p>{d.pregunta}</p>
                                                    </div>
                                                    <div class="clearfix"></div>
                                                </div>
                                                <div class="postinfo pull-left">
                                                    <div class="comments">
                                                        <div class="commentbg">
                                                            456
                                                            <div class="mark"></div>
                                                        </div>
                
                                                    </div>
                                                </div>
                                                <div class="clearfix"></div>


                                                <div class="postinfobot">
                                                    <div class="likeblock pull-left">
                                                        <a href="#" class="up"><i class="far fa-thumbs-up"></i>25</a>
                                                        <a href="#" class="down"><i class="far fa-thumbs-down"></i>3</a>
                                                    </div>

                                                    <div class="prev pull-left">                                        
                                                        <a href="#"><i class="fa fa-reply"></i></a>
                                                    </div>
                                                                                                                
                                                    <div class="posted pull-left"><i class="fa fa-clock-o"></i>{d.date} --- Posted on : 20 Nov @ 9:30am</div>

                                                    {/* <div class="next pull-right">                                        
                                                        <a href="#"><i class="fa fa-share"></i></a>

                                                        <a href="#"><i class="fa fa-flag"></i></a>
                                                    </div> */}

                                                    <div class="clearfix"></div>
                                            </div>
                                            
                                        </div>
                                        )
                            })
           

            //  const messageGuardados = this.state.messagesGuardados.map((d,i)=>{
            //         return(
            //             <li key={i}>
            //                 <b>{d.name} {d.lastname}:{d.pregunta}</b>
            //             </li>


    
            //         )
            //     })

            return(
                <div>
                    
                    {/* <h2>chaForo</h2> */}
                    
                    {/* {this.props.idVideo} */}

                    {/* <input
                        type="text"
                        placeholder="write message"
                        onKeyUp={this.sendMessage.bind(this)}
                        /> */}

                        {/* <ul>
                            { message }
                        </ul> */}

                        {/* <ul>
                            {messageGuardados}
                        </ul> */}


                        <section class="content body-chat">
                    
    
    
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12 col-md-12">


                                {/* --Cajon para realizar las peguntas-- */}

                                <div class="post-pregunta ">
                                            {/* <label for="exampleFormControlTextarea4 text-left">Puedes realizar una pregunta de esta clase</label> */}
                                    <form  class="form" method="post">
                                       
                                        <div class="form-group purple-border textwraper">
                                            <textarea value={this.state.inputMessage} onChange={this.onChange.bind(this)} name="inputMessage" class="form-control textarea-pregunta" id="exampleFormControlTextarea4" rows="1" placeholder="Escribe una pregunta"></textarea>
                                        </div>

                                        <div className="btn-conenten-send">
                                            <button onClick={this.sendMessage}   type="button" class="btn btn-outline-danger waves-effect btn-send-pregunta ">Realizar pregunta</button>
                                        </div>
                                    </form>
                                </div>
                                {/* ---end cajos para realizar las preguntas-- */}



                                {/* --post-- */}
                                    { message }
                                {/* --post-- */}


                               {/* ---post---- */}
                               {
                                   this.state.messagesGuardados.length===0
                                   ?
                                        <section class="text-center my-5">

                                            {/* <i class="far fa-comments fa-3x orange-text"></i> */}
                                            <i class="fab fa-forumbee fa-3x orange-text pb-0"></i>
                                            <h2 class="h3-responsive font-weight-bold my-5">Ups aun no hay preguntas en esta clase</h2>
                                            
                                            <p class="lead grey-text w-responsive mx-auto mb-5">Si tienes algun conflicto con esta clase puedes realizar una o varias preguntas 
                                            en esta seccion.</p>
                                            
                                            <div class="row">
                                            </div>
                                        
                                        </section>
                                   :
                                    this.state.messagesGuardados.map((d,i)=>{
                                        return(
                                            <div class="post border border-light">
                                                <div class="wrap-ut pull-left">
                                                    <div class="userinfo pull-left">
                                                        <div class="avatar">
                                                            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(17)-mini.jpg" class="rounded-circle z-depth-1-half" />
                                                        
                                                            <div class="status red">&nbsp;</div>
                                                        </div>
                
                                                        <div class="icons">
                                                            <img src="./images/icon2.jpg" alt="" /><img src="./images/icon4.jpg" alt="" />
                                                        </div>
                                                    </div>
                                                    <div class="posttext pull-left">
                                                        {/* name user */}
                                                        <h2><span href="#" className="text-capitalize">
                                                                {d.name} {d.lastname} 
                                                            </span>
                                                                <span className="text-date-chat">  {UTILS.covertirAhoraMinuto(d.date)}</span> 
                                                        </h2>
                                                        {/* comentario user */}
                                                        <p>{d.pregunta}</p>
                                                    </div>
                                                    <div class="clearfix"></div>
                                                </div>
                                                <div class="postinfo pull-left">
                                                    <div class="comments">
                                                        <div class="commentbg">
                                                            {/* cantidad de comentarios */}
                                                            {d.likes}
                                                            <div class="mark"></div>
                                                        </div>
                
                                                    </div>
                                                </div>
                                                <div class="clearfix"></div>

                                                    {/* ---en esta parte ira los likes y dislikes --- */}
                                                <div class="postinfobot">
                                                    <div class="likeblock pull-left">
                                                        <a href="#" class="up"><i class="far fa-thumbs-up"></i>{d.likes}</a>
                                                        <a href="#" class="down"><i class="far fa-thumbs-down"></i>{d.disLike}</a>
                                                    </div>

                                                    <div class="prev pull-left">                                        
                                                        <a href="#"><i class="fa fa-reply"></i></a>
                                                    </div>

                                                    <div class="posted pull-left"><i class="fa fa-clock-o"></i> Ralizada el : {UTILS.convertirFecha(d.date)}</div>

                                                    {/* <div class="next pull-right">                                        
                                                        <a href="#"><i class="fa fa-share"></i></a>

                                                        <a href="#"><i class="fa fa-flag"></i></a>
                                                    </div> */}

                                                    <div class="clearfix"></div>
                                            </div>
                                            
                                        </div>
                                        )
                                    })
                               }

                               {/* -----post---- */}
                               {/* ----post--- */}
                               {/* <div class="post">
                                    <div class="wrap-ut pull-left">
                                        <div class="userinfo pull-left">
                                            <div class="avatar">
                                                <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(17)-mini.jpg" class="rounded-circle z-depth-1-half" />
                                               
                                                <div class="status red">&nbsp;</div>
                                            </div>
    
                                            <div class="icons">
                                                <img src="./images/icon2.jpg" alt="" /><img src="./images/icon4.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div class="posttext pull-left">
                                            <h2><a href="02_topic.html">The Future of Magazines Is on Tablets</a></h2>
                                            <p>Eric Schmidt has seen the future of magazines, and it's on the tablet. At a Magazine Publishers Association.</p>
                                        </div>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="postinfo pull-left">
                                        <div class="comments">
                                            <div class="commentbg">
                                                456
                                                <div class="mark"></div>
                                            </div>
    
                                        </div>
                                        <div class="views"><i class="fa fa-eye"></i> 1,568</div>
                                        <div class="time"><i class="fa fa-clock-o"></i> 2 days</div>                                    
                                    </div>
                                    <div class="clearfix"></div>


                                    <div class="postinfobot">
                                        <div class="likeblock pull-left">
                                            <a href="#" class="up"><i class="far fa-thumbs-up"></i>25</a>
                                            <a href="#" class="down"><i class="far fa-thumbs-down"></i>3</a>
                                        </div>

                                        <div class="prev pull-left">                                        
                                            <a href="#"><i class="fa fa-reply"></i></a>
                                        </div>

                                        <div class="posted pull-left"><i class="fa fa-clock-o"></i> Posted on : 20 Nov @ 9:30am</div>

                                        <div class="next pull-right">                                        
                                            <a href="#"><i class="fa fa-share"></i></a>

                                            <a href="#"><i class="fa fa-flag"></i></a>
                                        </div>

                                        <div class="clearfix"></div>
                                    </div>
                                    
                                </div> */}
                                {/* --post---- */}


                           




                                </div>
                            </div>
                        </div>
    
    
                </section>

                        
                </div>
            )
        }
    
}