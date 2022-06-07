// var inputted=document.getElementById("input")
// inputted.setAttribute('onkeypress','ent(event)')





// function Search(){
//     var input=document.getElementById("input");
//     var input_value=input.value;
    
//     var glink=document.getElementById("abaz");
//     glink.setAttribute('href','https://www.google.com/'+ input_value);

//     input.innerHTML=glink;
   
//     document.getElementById("input").value="";

// }



function gogg(){
    var input=document.getElementById("input");
    var input_value=input.value;
    var a = document.getElementById("abas")

    a.setAttribute('href','https://www.google.com/search?q='+ input_value);
    input.value=" "

}

function ent(e){
    
    if(e.key=="Enter"){
        var input=document.getElementById("input");
        var input_value=input.value;
        input.value=" "
        window.location.assign("https://www.google.com/search?q="+ input_value); 
        
    }
}