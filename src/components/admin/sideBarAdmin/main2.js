import 'jquery'
import $ from 'jquery'



$(function() {
    $(".main-menu-sidebar-admin ul li a").click(function() {
      // quitar .seleccionado a todos (por si hay alguno)
      $(".main-menu-sidebar-admin ul li a").removeClass("seleccionado");
      // agregar seleccionado a "este" elemento.
      $(this).addClass("seleccionado");
    });
  });