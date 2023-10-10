document.write("For")
document.write("<br>")
for (i=1;i<6;i++) {
    document.write(i + "<br>")
}
document.write("<br>")
document.write("While")
document.write("<br>")
let w = 10
while (w<16) {
    document.write(w + "<br>")
    w++
}
//Do While
document.write("<br>")
document.write("Do While")
document.write("<br>")
let d = 10
do {
    document.write(d)
    d--
} while (d<5)
//For...In
let course = {
    "cNum" : "N320",
    "cTitle": "Intro Media App",
    "Professor": "rector",
    "Prereq":false,
}

//For Of 