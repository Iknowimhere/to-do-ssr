const alertDiv=document.querySelector(`.alert`);

alertDiv.style.position="absolute";
alertDiv.style.top="70px";
setTimeout(()=>{
    if(alertDiv!=null){
        alertDiv.style.display="none";
    }
},3000)