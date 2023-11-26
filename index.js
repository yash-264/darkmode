let label=document.querySelector(".label")
let container=document.querySelector(".container")
let heading=document.querySelector(".heading")

check=0;

label.addEventListener('click',()=>{

    if (check==0) {
        container.style.backgroundColor= 'black'
        //  heading.style.display='block'
         
        check=1;
    }
        else{
            container.style.backgroundColor= 'white'
            // heading.style.display='none'
            check=0;
        }
        
})