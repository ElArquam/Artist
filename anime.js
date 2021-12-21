function filtrage(){
    ma_rec = document.getElementById("rec").value

    anime = document.getElementsByClassName("anime")
    
    for(i=0; i<anime.length;i++){


        if(!anime[i].textContent.toLowerCase().includes(ma_rec.toLowerCase())) {
          
            anime[i].parentElement.parentElement.style.display="none"
       }
       else{
          
        Portrait[i].parentElement.parentElement.style.display="block"
   }
    }  
}





