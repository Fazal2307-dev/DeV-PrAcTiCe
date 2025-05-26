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

// const students=["Afzal","fazal","Ram","shyam"]
// console.log(students);
// console.log(students.length);
// console.log(students[1])
// students.push("Akbar")
// console.log(students);
// students.push({name:"Fazal",age:25})
// console.log(students)
// console.log(students.indexOf("Akbar"));
// students.pop();
// console.log(students)


//Array HOf

const students = [1,2,3,4,5,8,9,78];
// students.forEach((val)=> console.log(val));
function double(n){
  return n*2;
}

const newArry = students.map(double)
console.log(newArry);

//find()
//findIndex()
//slice()
//splics()

