const students = [

 { name: 'Alice', grades: [85, 92, 78, 90] },

 { name: 'Bob', grades: [75, 88, 95, 100] },

 { name: 'Charlie', grades: [60, 72, 68, 74] },

 { name: 'David', grades: [92, 88, 95, 98] },

 { name: 'Eve', grades: [100, 100, 100, 100] }

 ];

let pArray = document.querySelectorAll('p')
console.log(pArray)
students.forEach((name) => 
pArray[0].innerHTML += "<br>" + (name.name));

let result1 = students.every(student => student.grades.every(grade => grade >= 60));
pArray[1].innerHTML += result1
let result2 = students.some(student => student.grades.some(grade => grade == 100));
pArray[2].innerHTML += result2
let result3= students.filter(passedClass)
pArray[3].innerHTML += "<br>" + result3[0].name
pArray[3].innerHTML += "<br>" + result3[1].name
let result4 = students.map(FindAverage)
for(i=0;i<5;i++) {
    pArray[4].innerHTML += "<br>" + students[i].name + "'s Average is :" + result4[i]
}


for(x=0;x<5;x++) {
let totalGrade = students[x]['grades'].reduce((total, grade) => total + grade, 0)
 pArray[5].innerHTML += "<br>" + students[x].name + "'s Average is :" + totalGrade
}

function passedClass(e) {
    let total
    total = e.grades[0] + e.grades[1] + e.grades[2] + e.grades[3] 
    average = total/4

    return average >=90
}
function FindAverage(e) {
      let total
    total = e.grades[0] + e.grades[1] + e.grades[2] + e.grades[3] 
    average = total/4
 return average
}


    



