let btn= document.getElementById("btn");
let span =document.querySelectorAll('#counter span')
console.log(span)
let go = document.getElementById("go")
btn.addEventListener('click',()=>{
    go.style.className="name"
 go.innerText="Get Ready"
 btn.style.display="none"
 document.getElementById("counter").style.display="block"
 span.forEach((num)=>{

 })
   
 })