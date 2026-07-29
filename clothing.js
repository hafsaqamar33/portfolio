alert("Welcome to Clothing Brand 2026! Enjoy Shopping.");
document.querySelector("#home button" ).addEventListener("click", function (){
    alert("Explore our latest fashion collection!");
});
let buyButtons = document.querySelectorAll(".card button");
buyButtons.forEach(function(button){
    button.addEventListener("click", function(){
        alert("Product added successfully!\nThank you for shopping with Clothing Brand.");
    });
});
document.querySelector("form").addEventListener("submit", function(event){
    event.preventDefault();
    alert("Thank you1 Your message has been submitted successfully.");
});