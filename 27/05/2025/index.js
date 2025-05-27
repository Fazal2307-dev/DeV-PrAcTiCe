// alert("Hey Fazal r you going to complete this course within timeline");

// let name = prompt("whats your name");
// document.write("hello" + name);

//  const body = document.querySelector('body')
//  body.innerHTML='<h1>You are hacked!!! </h1>'

//  const pre = document.querySelector('pre')
//  pre.innerHTML = '<h2>This is change</h2>'

//  const name1 = document.querySelector('#username')
//  name1.innerHTML = '<h2>JOHN DOE</h2>'

const elements = document.getElementsByClassName('block')
for(let i=0;i<elements.length;i++){
  elements.item(i).style.background = "blue";
}