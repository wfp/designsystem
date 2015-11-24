$(document).ready(function(){

  //  Instantiate FastClick
  $(function() { FastClick.attach(document.body); });

  var nav = responsiveNav(".main-nav", {
    customToggle: "js-nav-trigger",
    navClass: "main-nav",
    openPos: "fixed",
    closedPos: "static"
  });

  var closeBtn = document.getElementById("js-nav-close");
  closeBtn.onclick = function(){ nav.close(); return false; }

  $('#js-view-grid').click(function(e){
    e.preventDefault();

    var $view = $('#js-view'),
        $items = $('.item', $view),
        $tabs = $('.segmented-control--link', '#js-view-control');

    $view.removeClass('list-view').addClass('inline-grid');
    $items.removeClass('pure-u-1-2').addClass('pure-u-1-4 pure-u-md-1-8');
    $tabs.removeClass('active');
    $(this).addClass('active');
  });

  $('#js-view-list').click(function(e){
    e.preventDefault();

    var $view = $('#js-view'),
        $items = $('.item', $view),
        $tabs = $('.segmented-control--link', '#js-view-control');

    $view.removeClass('inline-grid').addClass('list-view');
    $items.removeClass('pure-u-1-4 pure-u-md-1-8').addClass('pure-u-1-2');
    $tabs.removeClass('active');
    $(this).addClass('active');
  });
});
