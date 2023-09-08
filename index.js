const btn=document.getElementById('btn')
const name1=document.getElementById('name')
const usn=document.getElementById('usn')
const sem=document.getElementById('sem')
const branch=document.getElementById('branch')
const option=document.getElementById('option')
const msg=document.getElementById('msg')
btn.addEventListener("click",function(){
const myname=name1.value
const myusn=usn.value
const mysem=sem.value
const mybranch=branch.value
const myoption=option.value
console.log(myname)
if(myname=="" || myusn=="" || mysem=="" || mybranch=="" || myoption==""){
msg.style.display="block"
setInterval(() => {
    msg.style.display="none"
 
}, 3000);
}
else{
localStorage.setItem('name',myname)
localStorage.setItem('usn',myusn)
localStorage.setItem('sem',mysem)
localStorage.setItem('branch',mybranch)
localStorage.setItem('option',myoption)
window.location.href="letter.html"
document.getElementById('form').reset()
}
})
