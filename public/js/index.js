const alert=document.querySelector(`.alert`);

alert.style.position="absolute";
alert.style.top="70px";
setTimeout(()=>{
    if(alert!=null){
        alert.style.display="none";
    }
},3000)