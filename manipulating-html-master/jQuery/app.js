
/// 4. Variables

let randomColor = function() 
{
    var r = function () { return Math.floor(Math.random()*256) };
    return "rgb(" + r() + "," + r() + "," + r() + ")";
};

/// 6. Variables
let arrayNames = ["Adam", "Uri", "Karl", "Matt", "Jessica", "Pat", "Hank", "Iris", "Rebecca", "Owen"];
let clickCounter = 0;

///Ready, Set, Code!

/// 1.

$('#div1').append("<p>1.</p>");

$('#div1').append("<button>Click Me (jQuery)</button>").click( function(){
    alert("Danger Will Robinson!");
});

/// 2.

$("#query2Form").on( "submit", function() {
    alert($("#queryText").val())
} )
/// 3.

$("#div3")
    .mouseover( function(){
    $(this).css("background", "red")
}) .mouseout( function(){
    $(this).css("background", "");
    });

/// 4

$("#para4").on( "click", function(){
    $(this).css("color", randomColor());
});

/// 5

$("#button2").on("click", function(){
    $("#add").append("<span> Josh </span>");
});

/// 6

$("#button3").on("click", function(){
    let friendText = arrayNames[clickCounter];

    if(clickCounter < 10) {
      
        $("#friendList").append("<li>" + friendText + "</li");
        clickCounter += 1
    };

}
);