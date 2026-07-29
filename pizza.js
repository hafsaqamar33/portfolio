alert ("Welcome to Pizza House");
let orderBtn = document.querySelector("#home button");
orderBtn.addEventListener("click" , function (){
    alert ("Thanks for choosing our Pizza House! ");
});
let buyButtons = document.querySelectorAll(" .card button");
buyButtons.forEach(function(button){
button.addEventListener("click" , function(){
    alert ("Pizza Added Succesfully! ");
});
});
let form = document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault();
    alert ("Your message has been submitted successfully!");
    form.reset();
});