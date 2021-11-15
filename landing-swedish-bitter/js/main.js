$(function(){

  $('.list__inner .tab').on('click' ,function(event) {
    var id = $(this).attr('data-id');
      $('.list__inner').find('.tab-item').removeClass('active-tab').hide();
      $('.list__inner .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#'+id).addClass('active-tab').fadeIn();
      return false;
    });
    
  $('.reviews__tabs_heading .reviews__tabs_heading__item').on('click' ,function(event) {
    var id = $(this).attr('data-id');
      $('.reviews__tabs_content').find('.reviews__tabs_list').removeClass('active-tab').hide();
      $('.reviews__tabs').find('.reviews__tabs_heading__item').removeClass('active');
      $(this).addClass('active');
      $('#'+id).addClass('active-tab').fadeIn();
      return false;
    });

});