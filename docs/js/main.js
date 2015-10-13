$(document).ready(function(){

  //  Instantiate FastClick
  $(function() { FastClick.attach(document.body); });

  var nav = responsiveNav(".main-nav", {
    customToggle: "js-nav-trigger",
    navClass: "main-nav",
    openPos: "fixed",
    closedPos: "static"
  });

  // $('#js-nav-close').click(function(){ nav.close(); });
  var closeBtn = document.getElementById("js-nav-close");
  closeBtn.onclick = function(){ nav.close(); return false; }

  $('#js-view-grid').click(function(e){
    e.preventDefault();

    var $view = $('#js-view'),
        $items = $('.item', $view),
        $tabs = $('a', '.tabs')

    $view.removeClass('list-view').addClass('inline-grid')
    $items.removeClass('pure-u-1-2').addClass('pure-u-1-4 pure-u-md-1-8')
    $tabs.removeClass('active')
    $(this).addClass('active')
  })

  $('#js-view-list').click(function(e){
    e.preventDefault();

    var $view = $('#js-view'),
        $items = $('.item', $view),
        $tabs = $('a', '.tabs')

    $view.removeClass('inline-grid').addClass('list-view')
    $items.removeClass('pure-u-1-4 pure-u-md-1-8').addClass('pure-u-1-2')
    $tabs.removeClass('active')
    $(this).addClass('active')
  })

  $('.inline-item', '.inline-grid.icons').click(function(){
    var desc = $(this).siblings('.desc'),
        icons = $('ul.icons .inline-item').siblings('.desc');

    icons.fadeOut(100);
    desc.fadeToggle(100).one('click', function(){
      $(this).fadeOut(100);
    });
  })
});
