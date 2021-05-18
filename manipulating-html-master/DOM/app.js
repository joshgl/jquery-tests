/// 1. Variables

let buttonCreate = document.createElement("button");
let containerCreate = document.createElement("div");
let pCreate = document.createElement("p");
let div1 = document.getElementById("div1");
let text = document.createTextNode("Click Me");
let firstList = document.createTextNode("1.");
let body = document.body;

/// 2. Variables
let submit2 =  document.getElementById("query2Form");


/// 3. Variables
let div3 = document.getElementById("div3");

/// 4. Variables

let randomColor = function() 
{
    var r = function () { return Math.floor(Math.random()*256) };
    return "rgb(" + r() + "," + r() + "," + r() + ")";
}
let para4 = document.getElementById("para4");


/// 5. Variables
let button2 = document.getElementById("button2");
let addDiv = document.getElementById("add");


/// 6. Variables
let button3 = document.getElementById("button3");
let friendList = document.getElementById("friendList");
let arrayNames = ["Adam", "Uri", "Karl", "Matt", "Jessica", "Pat", "Hank", "Iris", "Rebecca", "Owen"];
let clickCounter = 0;

///Ready, Set, Code!

/// 1.

pCreate.appendChild(firstList);
div1.appendChild(pCreate);

buttonCreate.appendChild(text);
div1.appendChild(buttonCreate);

buttonCreate.addEventListener("click", function(){
    alert("Danger Will Robinson!");

});

/// 2.

submit2.addEventListener("submit", function(){
    alert(document.getElementById("queryText").value);
    
});

/// 3.

div3.addEventListener("mouseover", function(){
    this.style.backgroundColor = "red";
});

div3.addEventListener("mouseout", function(){
    this.style.backgroundColor = "brown";
});


/// 4

para4.addEventListener("click", function(){

    this.style.color = randomColor() ;
});

/// 5
friendList

button2.addEventListener("click", function(){
    let josh = "<span> Josh </span>";
    addDiv.innerHTML = josh;
    
})

/// 6

button3.addEventListener("click", function(){
        let friendText = arrayNames[clickCounter];
        let friendItem = document.createTextNode(friendText);
        let containerLI = document.createElement("li");
        
        if(clickCounter < 10) {
            containerLI.appendChild(friendItem);
            friendList.appendChild(containerLI)
            clickCounter += 1
        };
    
    }
);