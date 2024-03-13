var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;

function myFunction() {
    fruits.push("Lemon");
    document.getElementById("demo").innerHTML = fruits;
}
