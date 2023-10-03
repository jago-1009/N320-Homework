const students = [
 { name: 'Alice', grades: [85, 92, 78, 90] },
 { name: 'Bob', grades: [75, 88, 95, 100] },
 { name: 'Charlie', grades: [60, 72, 68, 74] },
 { name: 'David', grades: [92, 88, 95, 98] },
 { name: 'Eve', grades: [100, 100, 100, 100] }
 ];
let pArray = document.querySelectorAll('p')
console.log(pArray)
//Question 1
students.forEach((student) => 
pArray[0].innerHTML += "<br>" + (student.name));
//Question 2
let Question2 = students.every(student => student.grades.every(grade => grade >= 60));
pArray[1].innerHTML += Question2
//Question 3
let Question3 = students.some(student => student.grades.some(grade => grade == 100));
pArray[2].innerHTML += Question3
//Question 4
let Question4= students.filter(function(studentAVG) {
    if (FindAverage(studentAVG) >= 90) {
        return studentAVG
    }
})
pArray[3].innerHTML += "<br>" + Question4[0].name
pArray[3].innerHTML += "<br>" + Question4[1].name
//Question 5
let Question5 = students.map(FindAverage)
for(i=0;i<5;i++) {
    pArray[4].innerHTML += "<br>" + students[i].name + "'s Average is :" + Question5[i]
}
//Question 6
for(x=0;x<5;x++) {
    let totalGrade = students[x]['grades'].reduce((total, grade) => total + grade, 0)
    pArray[5].innerHTML += "<br>" + students[x].name + "'s Average is :" + totalGrade
}
//Functions
function FindAverage(e) {
    let total
    total = e.grades[0] + e.grades[1] + e.grades[2] + e.grades[3] 
    average = total/4
 return average 
}