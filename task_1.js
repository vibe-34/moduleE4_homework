const student = {
    name: 'Andrey',
    surname: 'Shashkov',
    course: 'Fullstack',
    group: 109 
  }

function school() {
for (let key in student) {
if (student.hasOwnProperty(key)) {
    console.log(key, student[key]);
    }
}  
    
}
  
school(student);
