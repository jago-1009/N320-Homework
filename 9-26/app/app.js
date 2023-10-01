
const hasOnlyOddNumbers = (value) => value%2 !=0;
let array = [1,3,5,7,9]

function hasAZ(string) {
strArray = string.split("")
strTrue = strArray.some(check)
document.write(strTrue)
function check(str) {
    return str=="z"
}
}

document.write(array.every(hasOnlyOddNumbers))
document.write("<br>")

hasAZ("all");



let reduceArr = [1,2,3,4,5,6,7,8]


var reduceFn = reduceArr.reduce(function(acc,nextValue) {
return acc + nextValue
},10)


var reduceFn2 = reduceArr.reduce(function(acc,nextValue) {
return acc + nextValue
})

let family = ['ben', 'tim', 'jon', 'josh','Bartholemew', "Cornelius", "Alabaster", "Borquallimus"]

function nameLength(value) {
    return value.length>4;
}
function partition(arr,callback) {
    return arr.reduce(function(accumulator,nextValue) {
        if(callback(nextValue)) {
            console.log(nextValue + " is a big name")
            accumulator[0].push(nextValue)
        }
        else {
            console.log(nextValue + " is a small name")
            accumulator[1].push(nextValue)
        }
        return accumulator
    },[[],[]])
}

console.log(partition(family,nameLength))



///REST

var restArr= [1,2,3,4,5]
