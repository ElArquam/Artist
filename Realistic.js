function filtrage(){
    ma_rec = document.getElementById("rec").value

    Portrait = document.getElementsByClassName("Portrait")
    
    for(i=0; i<Portrait.length;i++){


        if(!Portrait[i].textContent.toLowerCase().includes(ma_rec.toLowerCase())) {
          
            Portrait[i].parentElement.parentElement.style.display="none"
       }
       else{
          
        Portrait[i].parentElement.parentElement.style.display="block"
   }
    }  
}





