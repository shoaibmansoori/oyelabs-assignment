// 4 quetion 
const person = {
    name : "shoaib",
    age : 23
}

const student ={
    email : "shaoib@gmail.com",
    gender : "Male"
}


const third = { ...person, ...student }

console.log(third.age,third.email,third.gender,third.name)