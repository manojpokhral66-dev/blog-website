function openAstroAdmin(){

let pass=prompt("Enter Admin Password")

if(pass==="astro108"){

document.getElementById("astroAdminMenu").style.display="block"

}else{

alert("Wrong Password")

}

}



function uploadAstroPhoto(){

let title=document.getElementById("astroTitle").value
let file=document.getElementById("astroFile").files[0]

let reader=new FileReader()

reader.onload=function(){

let container=document.getElementById("blogContainer")

let html=`

<div style="background:white;padding:15px;margin:10px;border-radius:10px">

<h3>${title}</h3>

<img src="${reader.result}" style="width:100%;border-radius:8px">

</div>

`

container.innerHTML=html+container.innerHTML

}

reader.readAsDataURL(file)

}
