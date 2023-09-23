

let arr=[1,2,3]
arr.forEach(function(value) {
    console.log("For Each Value:" + 
    value);
})


function doubleValues(arr) {
    var newArr = []
    arr.forEach(function(value) {
        newArr.push(value*2);
        
    })
    return newArr;
}
console.log("double Values:" , doubleValues(arr));


//Every: only boolean values
var eArr = [-1,-2,-3]
var everyFn1 = eArr.every(function(value) {
    return value<0;
})
var everyFn2 = eArr.every(function(value) {
    return value>=-2;
})
console.log("Every Function 1", everyFn1)
console.log("Every Function 1", everyFn2)
//some: only boolean values
var sArr = [-1,-2,-3]
var someFn1 = sArr.some(function(value) {
    return value<0;
})
var someFn2 = sArr.some(function(value) {
    return value>0;
})
console.log("Some Function 1", someFn1)
console.log("Some Function 1", someFn2)
//Check to see if characters are all lowercase
function allLowerCase(str) {
    return str.split("").every(function(value) {
        return value==value.toLowerCase()
    })
}
console.log("All lowercase 1:" ,allLowerCase("test sentence"))
console.log("All lowercase 1:" ,allLowerCase("Test Sentence"))



//Check to see if all array values are arrays


function allArrays(arr) {
    return arr.every(Array.isArray);
} 

console.log("All Arrays 1:", allArrays([[1,2], ["AAAA", "apple"], [true]]));
console.log("All Arrays 1:", allArrays([1,2], ["AAAA", "apple"], [[true]], 1));