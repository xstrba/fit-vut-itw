$(document).ready(function(){

    var slider_item = $(".slider_item");
    var slider_w = slider_item.width();
    var new_index;
    var new_item;

  $('.slider_arrow.slider_left').click(function(){
      var item = $(".slider_item.active");
      var index = item.index();

      item.removeClass('active');

      if(item.is(':first-child')){

        new_item = $('.slider_item').last();
        new_item.addClass('active');
        new_item.css('left', -slider_w);
        new_item.animate({left: "0"});

      }
      else{

        new_index = index-1;
        new_item = $('.slider_item').eq(new_index);
        new_item.addClass('active');
        new_item.css('left', -slider_w);
        new_item.animate({left: "0"});

      }


  });

  $('.slider_arrow.slider_right').click(function(){
      var item = $(".slider_item.active");
      var index = item.index();

      item.removeClass('active');

      if(item.is(':last-child')){

        new_item = $('.slider_item').first();
        new_item.addClass('active');
        new_item.css('left', slider_w);
        new_item.animate({left: "0"});

      }
      else{

        new_index = index+1;
        new_item = $('.slider_item').eq(new_index);
        new_item.addClass('active');
        new_item.css('left', slider_w);
        new_item.animate({left: "0"});

      }

  });

});
