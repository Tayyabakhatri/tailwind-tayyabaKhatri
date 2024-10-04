let btn= document.getElementById("btn");
let container=document.getElementById("container");
let go = document.getElementById("go")
console.log(go)
btn.addEventListener('click',()=>{
    go.style.className="name"
 go.innerText="Get Ready"
 btn.style.display="none"
 document.getElementById("counter").style.display="block"
})