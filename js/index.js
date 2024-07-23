const searchForm = document.getElementById("github-form");
const userResult = document.getElementById("user-list");
const repoResult = document.getElementById("repos-list");
const searchPlace=document.getElementById("search")
const githubCont=document.getElementById("github-container")
searchForm.addEventListener("submit", (e) =>{
  e.preventDefault();
  userResult.innerHTML=""
  repoResult.innerHTML=""
  let userInput=searchPlace.value
  fetch(`https://api.github.com/search/users?q=${userInput}`)
  .then(res=>res.json)
  .then(data=>{
    let user=document.createElement("li")
    let userName=document.createElement("p")
    userName.textContent=data.items[0].login
    user.appendChild(userName)
    let userImage=document.createElement("img")
    userImage.setAttribute("src",data.items[0].avatar_url)
    user.appendChild(userImage)
    let userUrl=document.createElement("a")
    userUrl.setAttribute("href",data.url)
    userUrl.textContent=`Link to ${userdata.login}'s profile`
    user.appendChild(userUrl)
    user.addEventListener("click",()=>{
        fetch(`https://api.github.com/users/${userName.innerText}/repos`)
        .then(res=>res.json)
        .then(repoData=>{
            for (repo of repoData){
                let repository=document.createElement("p")
                repository.innerText=repo.name
                repoResult.appendChild(repository)
            }
        })
    })
    userResult.appendChild(user)

  })
  form.reset
})