$( document ).ready(function() {
 

$('#btnSubmit').attr('disabled',true);
$('.test').keyup(function(){
    if($(this).val().length !=0)
        $('#btnSubmit').attr('disabled', false);            
    else
        $('#btnSubmit').attr('disabled',true);
})



$('body').prepend('<div></div>');    

/// $('body').append('<ol>');    

function addText() {
$('div').append("<h2>" + $("input[type=text]").val() + "<h2>").addClass('classOne');
};


$('#btnSubmit').on("click", function() {
  /// alert($("input[type=text").val());
 addText();
 
});

$( "div" ).on( "mouseover", "h2", function() {
  $( this ).css( "background-color", "red" );
});

/* $( "ol" ).on( "mouseover", "li", function() {
  $( this ).css( "color", "red" );
  });
*/
    
$( "ol" ).on( "dblclick", "li", function() {

   $( this ).remove();
});
    




});



