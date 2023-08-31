let sections=document.querySelectorAll("section")
let music = ["metal", "country", "folk", "hip-hop", "rock"];
let animal=document.getElementById("animals")
for (let i = 0;i<music.length;i++) {
    console.log(music[i]);
}

var favmusic = document.querySelectorAll('p')[1];

favmusic.innerHTML="My favorite genre of music is " + music[0];

function Animals(x,y) {
    animal.innerHTML+="I have a " + x + " who is " + y + "<br>"
}
Animals("Lab", "Black")
Animals("Rhodesian Ridgeback", "Brown and Black")

function ChangeColor() {
color = document.querySelector("input").value
console.log(color)

if (color == "red") {
document.body.style.backgroundColor="#ff0000"
}
else if (color == "blue") {
    document.body.style.backgroundColor="#0000FF"
}
else if (color == "green") {
    document.body.style.backgroundColor="#00FF00"
}
}
sections[3].innerHTML += "<p>Welcome! What is your favorite color?</p><br><input type=form> <button onclick= ChangeColor()>Submit</button>"
function Calculate() {
    let number=document.getElementById("numberInput").value
    if (number%7==0) {
        alert(number += " is divisible by 7!")
    }
    if (number%7 != 0) {
        console.log("not yet...")
    }
    if (number < 7) (
        alert("No matches...sorry!")
    )
}

sections[4].innerHTML += "<input type=form id=numberInput> <button onclick=Calculate()>Submit</button>"
