// High order function


// function add(a,b ,cb){
// let result = a+b;
// cb(result);
// }

// add(2,5, (val)=>console.log(val))


// // fn return fn
// function add(a,b ,cb){
//   let result = a+b;
//   cb(result);
// return ()=>console.log(result)
// }
// let sum = add(1,8,()=>{})
// sum()

// Array

const students=["Afzal","fazal","Ram","shyam"]
console.log(students);
console.log(students.length);
console.log(students[1])
students.push("Akbar")
console.log(students);
students.push({name:"Fazal",age:25})
console.log(students)
