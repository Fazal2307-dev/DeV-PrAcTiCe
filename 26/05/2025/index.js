// High order function


function add(a,b ,cb){
let result = a+b;
cb(result);
}

add(2,5, (val)=>console.log(val))
