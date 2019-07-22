function openInterior () {
  $('.js-interior').on('click', function () {
    $('body').addClass('open-interior')
  })

  $('.sidebar-interior h2').on('click', function () {
    $('body').removeClass('open-interior')
  });

  $('body').on('click', function  (e) {
      if(!$(e.target).parents('.sidebar-interior').length){
        if(!$(e.target).parents('.js-interior').length) {
          $('body').removeClass('open-interior')
        }
      }
  })
}

function toggleCamera () {
    $('.js-camera').on('click', function  () {
        $(this).toggleClass('open').siblings('.drop').slideToggle();
    })
}


function changeTypeMap () {
    $('.btn-type-group .btn').on('click', function  () {
        $(this).addClass('active').siblings().removeClass('active');
        $('body').removeClass('type1 type2 type3').addClass($(this).data('type'))
        //$('body').removeClass('type1 type2 type3');//.addClass($(this).data('type'))
        $('body').removeClass('nav-info');
    })
}

$(document).ready(function () {
  changeTypeMap();
  //toggleCamera();
  openInterior();
});