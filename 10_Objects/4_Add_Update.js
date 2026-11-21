const student = {
    name : "Albert",
    roll : 158,
    cg : 3.77,
    subjects : ["math", "swe", "physcis", "DSA", "OOP"]
}

student.favSubject = "DSA";
student.cg = 3.85;

delete student.name;
student.name = "Albert Smith Bala";

console.log(student);