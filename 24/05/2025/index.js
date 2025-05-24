console.log("Learning loop in js");

//for
// for(let i =1;i<=10;i++){
//   console.log("Fazal" + ' ' +  i);
// }

//while
// let ip=50;
// let home = 100;
// // while(ip!=home){
// //   ip = ip +1;
// //   console.log('step count' + ip);
// // }
// // do while
// do{
//   ip = ip+1;
//   console.log('stp count'+ ip)
// }while(ip!=home);

// guess the no

// let otp = 123;
// let guess = 0;
// do{
//   guess = parseInt(prompt("please provide valid otp"))
//     if(guess == otp){
//       alert('you submit correct otp')
//       break;
//   }
// }while(guess!=0)

// function

function addNumber(a,b){
  return a+b
}
 let ans = addNumber(1,2)
 console.log(ans);

 //unlimited arguments accept

 function addValue(...number){
  let ans=0;
  for(let i = 0;i<number.length;i++){
    ans = ans+number[i];
  }
  return ans;
 }
 let result = addValue(1,5,6,78,6,5);
 console.log(result);




