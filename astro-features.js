/* CREATE OM SYMBOL */

document.addEventListener("DOMContentLoaded",function(){

let hero=document.querySelector(".hero")

if(hero){

let om=document.createElement("div")

om.className="om-astro"

om.innerHTML="ॐ"

hero.prepend(om)

}



/* CREATE ADMIN BUTTON */

let btn=document.createElement("button")

btn.innerText="Admin"

btn.className="astro-admin-btn"

btn.onclick=openAstroAdmin

document.body.appendChild(btn)



/* CREATE ADMIN PANEL */

let panel=document.createElement("div")

panel.className="astro-admin-panel"

panel.id="astroAdminPanel"



panel.innerHTML=`

<h3>Upload Photo</h3>

<input type="text" id="astroTitle" placeholder="Title">

<input type="file" id="astroFile">

<button onclick="uploadAstroPhoto()">Upload</button>

`



document.body.appendChild(panel)



})



/* ADMIN LOGIN */

function openAstroAdmin(){

let pass=prompt("Enter Admin Password")

if(pass==="astro108"){

document.getElementById("astroAdminPanel").style.display="block"

}else{

alert("Wrong Password")

}

}



/* PHOTO UPLOAD */

function uploadAstroPhoto(){

let title=document.getElementById("astroTitle").value

let file=document.getElementById("astroFile").files[0]



if(!file)return



let reader=new FileReader()



reader.onload=function(){



let card=document.createElement("div")

card.className="astro-photo-card"



card.innerHTML=`

<h3>${title}</h3>

<img src="${reader.result}" style="width:100%;border-radius:8px">

`



let container=document.getElementById("blogContainer")



if(container){

container.prepend(card)

}



}



reader.readAsDataURL(file)

  }
