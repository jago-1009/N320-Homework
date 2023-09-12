let para = document.querySelectorAll("p")

console.log(para)
function displayer(res1, res2, res3, res4) {
para[0].innerHTML += res1 + ',' + res2;
para[1].innerHTML += res3;
para[2].innerHTML += res4;
}


function arith(num1,num2, Callback) {
let ans1= num1+num2;
let ans2 = num1 - num2;
let ans3 = num1 * num2;
let ans4 = num1 / num2;
let totalans= ans1+ans2+ans3+ans4
let averageans = totalans/4;
Callback(num1, num2, totalans, averageans)

}

arith(5,16,displayer)



