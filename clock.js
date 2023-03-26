setInterval(function(){
    let a=new Date()
    let h=a.getHours()
    let m=a.getMinutes()
    let s=a.getSeconds()
    let d=a.getDate()
    let mon=a.toLocaleString('default', { month: 'long' })
    let year=a.getFullYear()
    let h1=("0" + h).slice(-2)
    let m1=("0" + m).slice(-2)
    let s1=("0" + s).slice(-2)
    let t=document.getElementById("time")
    t.innerHTML=h1+":"+m1+":"+s1
    let d1=document.getElementById("date")
    d1.innerHTML="Date: "+d+" "+mon+" "+year
},1000)
setInterval(async function(){
    let page = document.getElementById("page")
    page.classList.toggle("page_color")
},1000)
