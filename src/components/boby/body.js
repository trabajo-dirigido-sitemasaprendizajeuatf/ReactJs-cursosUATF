import React, { Component } from 'react'


class Body extends Component{

    constructor(props){
        super(props)
            this.state={

            }
    }

    render(){

        return(
            <body>
        

            
            <main class="mt-5 pt-5">
                <div class="container">
        
                    {/* componente de vist */}
        
                    {/* <hr class="my-5"></hr> */}
        
                    <section class="text-center">
        
                        <div class="row mb-4 wow fadeIn">
        
                            <div class="col-lg-4 col-md-12 mb-4">
        
                                <div class="card">
        
                                    <div class="view overlay">
                                        <div class="embed-responsive embed-responsive-16by9 rounded-top">
                                            <video controls class="embed-responsive-item" src="http://localhost:3007\video\VIDEO_1558884262107.MP4" allowfullscreen></video>
                                        </div>
                                    </div>
        
                                    <div class="card-body">
                                        <h4 class="card-title">MDB Quick Start</h4>
                                        <p class="card-text">Get started with MDBootstrap, the world's most popular Material Design framework for building
                                            responsive, mobile-first sites.</p>
                                        <p class="card-text">
                                            <strong>5 minutes, a few clicks and... done. You will be surprised at how easy it is.</strong>
                                        </p>
                                    </div>
        
                                </div>
        
                            </div>
        
                            <div class="col-lg-4 col-md-6 mb-4">
        
                                <div class="card">
        
                                    <div class="view overlay">
                                        <img src="https://mdbootstrap.com/wp-content/uploads/2017/11/brandflow-tutorial-fb.jpg" class="card-img-top" alt=""></img>
                                        <a href="https://mdbootstrap.com/education/tech-marketing/automated-app-introduction/" target="_blank">
                                            <div class="mask rgba-white-slight"></div>
                                        </a>
                                    </div>
        
                                    <div class="card-body">
                                        <h4 class="card-title">Bootstrap Automation</h4>
                                        <p class="card-text">Learn how to create a smart website which learns your user and reacts properly to his behavior.</p>
                                        <a href="https://mdbootstrap.com/education/tech-marketing/automated-app-introduction/" target="_blank" class="btn btn-primary btn-md">Start tutorial
                                            <i class="fas fa-play ml-2"></i>
                                        </a>
                                    </div>
        
                                </div>
        
                            </div>
        
                            <div class="col-lg-4 col-md-6 mb-4">
        
                                <div class="card">
        
                                    <div class="view overlay">
                                        <img src="https://mdbootstrap.com/wp-content/uploads/2018/01/push-fb.jpg" class="card-img-top" alt=""></img>
                                        <a href="https://mdbootstrap.com/education/tech-marketing/web-push-introduction/" target="_blank">
                                            <div class="mask rgba-white-slight"></div>
                                        </a>
                                    </div>
        
                                    <div class="card-body">
                                        <h4 class="card-title">Push notifications</h4>
                                        <p class="card-text">Push messaging provides a simple and effective way to re-engage with your users and in this
                                            tutorial you'll learn how to add push notifications to your web app</p>
                                        <a href="https://mdbootstrap.com/education/tech-marketing/web-push-introduction/" target="_blank" class="btn btn-primary btn-md">Start tutorial
                                            <i class="fas fa-play ml-2"></i>
                                        </a>
                                    </div>
        
                                </div>
        
                            </div>
        
                        </div>
        
                        <div class="row mb-4 wow fadeIn">
        
                            <div class="col-lg-4 col-md-12 mb-4">
        
                                <div class="card">
        
                                    <div class="view overlay">
                                        <img src="https://mdbootstrap.com/img/Marketing/mdb-press-pack/mdb-angular.jpg" class="card-img-top" alt=""></img>
                                        <a href="https://mdbootstrap.com/angular/" target="_blank">
                                            <div class="mask rgba-white-slight"></div>
                                        </a>
                                    </div>
        
                                    <div class="card-body">
                                        <h4 class="card-title">MDB with Angular</h4>
                                        <p class="card-text">Built with Angular 5, Bootstrap 4 and TypeScript. CLI version available. </p>
                                        <a href="https://mdbootstrap.com/angular/" target="_blank" class="btn btn-primary btn-md">Free download
                                            <i class="fas fa-download ml-2"></i>
                                        </a>
                                    </div>
        
                                </div>
        
                            </div>
        
                            <div class="col-lg-4 col-md-6 mb-4">
        
                                <div class="card">
        
                                    <div class="view overlay">
                                        <img src="https://mdbootstrap.com/img/Marketing/mdb-press-pack/mdb-react.jpg" class="card-img-top" alt=""></img>
                                        <a href="https://mdbootstrap.com/react/" target="_blank">
                                            <div class="mask rgba-white-slight"></div>
                                        </a>
                                    </div>
        
                                    <div class="card-body">
                                        <h4 class="card-title">MDB with React</h4>
                                        <p class="card-text">Based on the latest Bootstrap 4 and React 16. </p>
                                        <a href="https://mdbootstrap.com/react/" target="_blank" class="btn btn-primary btn-md">Free download
                                            <i class="fas fa-download ml-2"></i>
                                        </a>
                                    </div>
        
                                </div>
        
                            </div>
        
                            <div class="col-lg-4 col-md-6 mb-4">
        
                                <div class="card">
        
                                    <div class="view overlay">
                                        <img src="https://mdbootstrap.com/img/Marketing/mdb-press-pack/mdb-vue.jpg" class="card-img-top" alt=""></img>
                                        <a href="https://mdbootstrap.com/vue/" target="_blank">
                                            <div class="mask rgba-white-slight"></div>
                                        </a>
                                    </div>
        
                                    <div class="card-body">
                                        <h4 class="card-title">MDB with Vue</h4>
                                        <p class="card-text">Based on the latest Bootstrap 4 and Vue 2.5.7. </p>
                                        <a href="https://mdbootstrap.com/vue/" target="_blank" class="btn btn-primary btn-md">Free download
                                            <i class="fas fa-download ml-2"></i>
                                        </a>
                                    </div>
        
                                </div>
        
                            </div>
        
                        </div>
        
                        <nav class="d-flex justify-content-center wow fadeIn">
                            <ul class="pagination pg-blue">
        
                                <li class="page-item disabled">
                                    <a class="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                </li>
        
                                <li class="page-item active">
                                    <a class="page-link" href="#">1
                                        <span class="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="#">2</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="#">3</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="#">4</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="#">5</a>
                                </li>
        
                                <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
        
                    </section>
        
                </div>
            </main>
    
        </body>
        )
    }


}


export default Body;