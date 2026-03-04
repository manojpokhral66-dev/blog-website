let blogs = JSON.parse(localStorage.getItem("blogs")) || []

function addBlog(){

let title=document.getElementById("title").value
let content=document.getElementById("content").value

let blog={
title:title,
content:content,
date:new Date().toLocaleDateString()
}

blogs.push(blog)

localStorage.setItem("blogs",JSON.stringify(blogs))

displayBlogs()

}

function displayBlogs(){

let container=document.getElementById("blogList")

if(!container) return

container.innerHTML=""

blogs.forEach(blog=>{

container.innerHTML+=`

<div class="blogCard">

<h3>${blog.title}</h3>

<p>${blog.content}</p>

<small>${blog.date}</small>

</div>

`

})

}

displayBlogs()




let questions = JSON.parse(localStorage.getItem("questions")) || []

function addQuestion(){

let q=document.getElementById("questionInput").value

questions.push(q)

localStorage.setItem("questions",JSON.stringify(questions))

displayQuestions()

}

function displayQuestions(){

let container=document.getElementById("questionList")

if(!container) return

container.innerHTML=""

questions.forEach(q=>{

container.innerHTML+=`

<div class="blogCard">

<p>${q}</p>

</div>

`

})

}

displayQuestions()
