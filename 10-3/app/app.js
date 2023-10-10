let myArray = [1,2,3,4,5]


    let totalNum = myArray.reduce(function(acc,nextValue) {
        let num = nextValue * nextValue;
        if (num % 2 ==0) {
            return acc+num;
        } 
        return acc
},50)
document.write(totalNum)


//REST
//Takes the REST of the values and puts them in an array

function add(...nums) {
    let total = 0
    for (const n of nums) {
        total += n
    }
    return total
}
document.write( "<br>")
document.write("Add Function: ", add(1,3,5,7,9))
document.write( "<br>")
document.write("Add Function: ", add(myArray)) //doesn't work with arrays
document.write( "<br>")

function printVal(a,b,...c) {
    document.write(a,b + " "+ c)
    document.write( "<br>")
}


printVal(1,2,3,4,5,6,7,8)
printVal(1,2)
printVal("Happy","Halloween", "October")

function HigherOrder(num1,num2,cb) {
    let a = num1+num2
    let s = num1-num2;
    let m = num1*num2;
    let d =num1/num2
    cb(num1,num2,a,s,m,d)
}


function cb(num1,num2, ...mValues) {
    console.log(mValues)
    let total = mValues.reduce(function(accm,next) {
        accm+=next;
        return accm;
    },0)
    let average = total / mValues.length
    document.write("<br>")
    document.write("Total: ", total)
    document.write("Average", average)
}


//SPREAD
//Takes an array and SPREADS them out to individual values

let arr1=[1,2,3]
let arr2=[4,5,6]
let arr3=[7,8,9]

let combine = [...arr1,...arr2,...arr3]
console.log("spread", combine)
console.log("MAX" , Math.max(...combine))

function sumVal(a,b,c) {
    return a+b+c;
}
console.log("Sums:", sumVal(...arr1))

function inMiddle(arr,vals) {
let mid = arr.length/2
arr.splice(mid,0,...vals)
return arr
}
console.log("MIDDLE", inMiddle([1,6],[2,3,4,5]))
HigherOrder(4,2,cb)