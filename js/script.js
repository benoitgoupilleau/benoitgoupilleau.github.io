const pictureHeightWidth= 3/2;
var slideHeight=0;
var slideWidth;
var d = new Date();
var n = d.getFullYear();

$(function(){
    var typedText =$("#element").text()
    resizeSlides();
    $("#element").typed({
      strings: [typedText],
      typeSpeed: 70,
      showCursor: false,
    });
    $('#year').text(n);
});

$(function(){
  $('.carousel').carousel({
    interval: 4000
  })
  $('.dropdown').on('show.bs.dropdown', function(e){
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
  });

  // Add slideUp animation to dropdown
  $('.dropdown').on('hide.bs.dropdown', function(e){
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp(300);
  });
});

$(function(){
  $(".navbar a, #footerchevron").on("click", function(event){
    event.preventDefault();
    var hash = this.hash;
    $('body').animate({scrollTop: $(hash).offset().top}, 900, function(){window.location.hash=hash;})
    $(".navbar button").addClass("collapsed")
    $("#myNavbar").removeClass("show")
    $(".navbar button").attr("aria-expanded", false)
    $("#myNavbar").attr("aria-expanded", false)
  })
})

var resizeSlides = function(){
  var deviceWidth=$(window).width();
  var deviceHeight=$(window).height();
  $('#about').height(Math.max(460, deviceWidth*2/3));
  slideHeight= $('#about').height()+80;
  slideWidth= ($('#about').width()+30)*1.4;
  $('.imgslide').width(slideHeight*pictureHeightWidth*1.3)
  // $('#about').height(slideHeight);
  // $('#element').css('font-size',Math.min(0.1*slideHeight, 44));
  // $('#welcomeMessage').css('font-size',Math.min(0.07*slideHeight, 44));
  $('#welcome').css('padding-right',0.1*deviceWidth);
  $('#welcome').css('padding-left',0.1*deviceWidth);

  var welcomeHeight=$('#welcome').height();
  $('#welcome').css('margin-top',($('#about').height()-welcomeHeight)/2);
  // $('.timeline:before').css('left', deviceWidth*0.75);
  if (deviceWidth>950) {
    $('#mytimeline').addClass('largeScreen');
    $('#mytimeline').removeClass('smallScreen');
    $('.right-panel').addClass('inverted');
    $('.timeline-panel-container').removeClass('smallPanel');
  } else{
    $('#mytimeline').addClass('smallScreen');
    $('#mytimeline').removeClass('largeScreen');
    $('.right-panel').removeClass('inverted');
    $('.timeline-panel-container').addClass('smallPanel');
  }
};
window.onresize=resizeSlides;

$(function(){
  $('#mytimeline').children('li').children('.timeline-panel-container').click(function(){
    var nbIndex= $(this).parent().index();
    $('#mytimeline').children('li').eq(nbIndex).find('.timeline-body').toggleClass('hide');
    $('#mytimeline').children('li').eq(nbIndex).find('.onclick').toggleClass('hide');
  })

})
