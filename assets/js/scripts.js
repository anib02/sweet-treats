$("#popup-container").ready(function(){
    $("button#yes").focus();
 });
 
 $('.faq-question').click(function(){
    $(this).children("p").slideToggle(500); 
    var button = $(this).children("#faq-button");
    button.toggleClass("closed open");

   if(button.attr('aria-expanded')== 'false') {
      buttoon.attr('aria-expanded' , 'true');
   }
 else {
   button.attr('aria-expanded', 'false');
 }

 });

 $('button#yes').click(function(){
    $('#popup-container').css('display', 'none');
 });

 $('.nav-item').click(function(){
   var button = $(this);
   if(button.attr('aria-expanded')== 'false') {
      buttoon.attr('aria-expanded' , 'true');
   }
 else {
   button.attr('aria-expanded', 'false');
 }
 var navItem = $(this).next();
 navItem.toggleClass('menu')
 });