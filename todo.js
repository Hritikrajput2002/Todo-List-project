let submit=document.getElementById("add")
let textarea=document.getElementById("description")
let listed=document.getElementById("listed")
let text=""
let key=0
submit.addEventListener('click',function(){
    if(key==0){
        document.getElementById("listed").classList.toggle("hid")
        
    }
     text=textarea.value
     localStorage.setItem(key,JSON.stringify([text]))
     listed.innerHTML+=  `<div class="beauty" id="sh${key}"><div class="shower" > ${text} </div><div class="delbox" onclick=delelem(${key})>Remove</div></div><br id="shi${key}">`
     key++
     textarea.value=""
})


 function delelem(kiy){
    let elem=document.getElementById(`sh${kiy}`)
    elem.remove()
    let ele=document.getElementById(`shi${kiy}`)
    ele.remove()
    localStorage.removeItem(kiy)
    let hhh=document.getElementsByClassName("beauty")


    if(hhh.length==0){
        key=0;
        document.getElementById("listed").classList.toggle("hid")
        
    }
    
}


