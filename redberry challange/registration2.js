let players = document.querySelector(".players")
let choose = document.querySelector(".choose")
let back = document.querySelector(".back")
let done = document.querySelector(".done")
let level = document.querySelector(".level")
var personid = 200
let next=document.querySelector(".next")
fetch('https://chess-tournament-api.devtest.ge/api/grandmasters')
.then(x=> x.json())
.then(info=>{
    console.log(info)
    for(var i of info){
        var tmp = `
        <div class="pl">
            <span>${i.name}</span>
            <img src="${i.image}" alt="">
        </div>
        `
        players.innerHTML += tmp
   
    }

    var allplayers = document.querySelectorAll(".pl")
    for(var i of allplayers){
    i.addEventListener("click",function(){
      choose.innerText = this.children[0].innerText
      players.classList.toggle('players'); 
      personid = ([...allplayers].indexOf(this)+1)
        
    })
  }
})
var z = localStorage.getItem("truecheck") || "false"
localStorage.setItem("truecheck",z)
console.log(localStorage.getItem("truecheck"))
choose.addEventListener("click",function(){
    players.classList.toggle('players');
})

back.addEventListener("click",function(){
  z = "true"
  localStorage.setItem("truecheck",z)
  console.log(localStorage.getItem("truecheck"))
})
done.addEventListener("click",function(){
  var registedPerson = JSON.parse(localStorage.getItem("myobject"))
  var newobj = {
     name:registedPerson.fullname,
     email:registedPerson.email,
     phone:registedPerson.phone,
     date_of_birth:registedPerson.bday,
     experience_level:level.value,
     already_participated:true,
     character_id:personid
   
  }
  


  fetch("https://chess-tournament-api.devtest.ge/api/register", {
    method: "POST",
    headers: {'Content-Type': 'application/json'}, 
    body: JSON.stringify(newobj)
    
  }).then(res => {
    console.log("Request complete! response:", res);
  });
})
 


