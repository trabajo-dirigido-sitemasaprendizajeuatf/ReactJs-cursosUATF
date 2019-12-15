import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class Footer extends Component{
    render(){
        return(
<footer class="page-footer font-small unique-color-dark">

<div style={{backgroundColor: '#1c2a48'}}>
  <div class="container">

    <div class="row py-4 d-flex align-items-center">

      <div class="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
        <h6 class="mb-0">Nuestras redes sociales</h6>
      </div>

      <div class="col-md-6 col-lg-7 text-center text-md-right">

        <a class="fb-ic" href="https://www.facebook.com/groups/570997296338166/" target="_bllank">
          <i class="fab fa-facebook-f white-text mr-4"> </i>
        </a>
        {/* <a class="tw-ic">
          <i class="fab fa-twitter white-text mr-4"> </i>
        </a>
        <a class="gplus-ic">
          <i class="fab fa-google-plus-g white-text mr-4"> </i>
        </a>
        <a class="li-ic">
          <i class="fab fa-linkedin-in white-text mr-4"> </i>
        </a>
        <a class="ins-ic">
          <i class="fab fa-instagram white-text"> </i>
        </a> */}

      </div>

    </div>

  </div>
</div>

<div class="container text-center text-md-left mt-5">

  <div class="row mt-3">

    <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

      <h6 class="text-uppercase font-weight-bold">Parte de nuestra mision</h6>
      <hr class="deep-orange accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '150px'}}></hr>
      <p> Formar profesionales integrales en el área de los sistemas, con competencias científicas, disciplinares y humanas que les permitan liderar procesos de desarrollo tecnológico a nivel regional y nacional.</p>

    </div>

    <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4"> 

      <h6 class="text-uppercase font-weight-bold">Productos similares</h6>
      <hr class="deep-orange accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}></hr>
      {/* <p>
        <a href="https://euroarmysurplus.co.uk/shoponline/product-category/1-air-guns-archeries/">Airguns</a>
      </p>
      <p>
        <a href="https://euroarmysurplus.co.uk/shoponline/product-category/4-military-surplus-kits/">Army Clothing</a>
      </p>
      <p>
        <a href="https://euroarmysurplus.co.uk/shoponline/product-category/6-jacket-parkas/">Jackets</a>
      </p>
      <p>
        <a href="https://euroarmysurplus.co.uk/shoponline/product-category/8-footwear/">Footwear</a>
      </p> */}

    </div>

    <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

      <h6 class="text-uppercase font-weight-bold">Enlaces adicionales</h6>
      <hr class="deep-orange accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}></hr>
      {/* <p>
        <a href="https://euroarmysurplus.co.uk/shoponline/cart/">Your Account</a>
      </p>
      <p>
        <a href="https://euroarmysurplus.co.uk/shoponline/contact-us/">Contact Us</a>
      </p>
      <p>
        <a href="https://euroarmysurplus.co.uk/shoponline/contact-us/">Shipping Rates</a>
      </p>
      <p>
        <a href="https://euroarmysurplus.co.uk/shoponline/contact-us/">Help</a>
      </p> */}

    </div>

    <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

      <h6 class="text-uppercase font-weight-bold">Contactos</h6>
      <hr class="deep-orange accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}></hr>
      {/* <p>
        <i class="fas fa-home mr-3"></i> Euro Army & Navy Stores
       241, Cricklewood Broadway, London, NW2 3HP</p> */}
      {/* <p>
        <i class="fas fa-envelope mr-3"></i> info@euroarmysurplus.co.uk</p> */}
      <p>
        <i class="fas fa-phone mr-3"></i> 26224748</p>
      {/* <p>
        <i class="fas fa-print mr-3"></i> + 020 8450 9144</p> */}

    </div>

  </div>

</div>

<div class="footer-copyright text-center py-3">Carrera:
  <a href="https://euroarmysurplus.co.uk/shoponline/"> Ingenieria de sistemas</a>
</div>

</footer>
        
        )
    }

}

export default Footer;