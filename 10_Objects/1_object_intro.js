let student = {
    name : "Albert",
    roll : 158,
    cg : 3.77,
    subjects : ["math", "swe", "physcis", "DSA", "OOP"]
}

console.log(student);
console.log(student.name);
console.log(student.roll);
console.log(student.cg);
console.log(student.subjects[3]);


student.favSubject = "DSA";
student.cg = 3.85;

delete student.name;
student.name = "Albert Smith Bala";

console.log(student);


console.log(student.subjects.splice(0,1));
console.log(student.subjects);

