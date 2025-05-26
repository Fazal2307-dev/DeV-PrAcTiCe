// High order function


function add(a,b ,cb){
let result = a+b;
cb(result);
}

add(2,5, (val)=>console.log(val))


// fn return fn
function add(a,b ,cb){
  let result = a+b;
  cb(result);
return ()=>console.log(result)
}
let sum = add(1,8,()=>{})
sum()