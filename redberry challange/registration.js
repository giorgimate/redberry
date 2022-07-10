let myform = document.querySelector("#regform")
let fullname = document.querySelector(".fullname")
let email = document.querySelector(".email")
let bday = document.querySelector(".bday")
let phone = document.querySelector(".phone")
let allchks = document.querySelectorAll(".chk")
let back = document.querySelector(".back")
let redemail = document.querySelector(".redemail")
let localname = ""

fullname.addEventListener("keyup",function(e){
    localname = fullname.value
    console.log(localname)
    localStorage.setItem("localname",localname)
})



bday.addEventListener("click",function(){
    this.showPicker()
})

class Person{
    constructor(fullname,email,phone,bday){
        this.fullname = fullname,
        this.email = email,
        this.phone = phone,
        this.bday = bday
    }
}
//isvalid - იგულისხმება თქვენი ვალიდაცია, 
//რომ იმეილი ეკუთვნის ნამდვილად რედბერის.
var go = document.querySelector(".go")
//go.style.pointerEvents = "none"

let mark=`
<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
</svg>
`

 myform.addEventListener("submit", function(e) { 
     if  (email.value.slice(email.value.length-13)!="@redberry.com"){
        // amowmebs redberys mails
        console.log("arasworia")
        redemail.style.visibility = "visible"
        redemail.style.opacity = "1"
         redemail.innerHTML=mark+"invalid email"+"<br>"+"უნდა იყოს რედბერის მეილი"
       
        e.preventDefault();
          }
         else{
           console.log("sworia")
         }
 })


  myform.addEventListener("submit", function(e) { 
    // min da max length bagiaqvs htmlshi amitom vamowmeb jsze
    if  (phone.value.length!="9"){
        redemail.style.visibility = "visible"
        redemail.style.opacity = "1"
       redemail.innerHTML=mark+"invalid number"+"<br>"+"ნომერი უნდა შედგებოდეს 9 სიმბოლოსგან"
       e.preventDefault();
         }
        else{
          console.log("good")
        }
})


  
myform.addEventListener("submit", function(e) {
    if(fullname.value.length < 2){
        redemail.innerHTML  =mark+"invalid name "+"<br>"+"მინიმალური სიმბოლო 2"
        redemail.style.visibility = "visible"
        redemail.style.opacity = "1"
        e.preventDefault();

    }
    else{
        //თუ ვალდიდაცი გაირა შეიქმენბა ახალი ობიექტი
        //თუ ახალი ობიექტი შეიქმნა დაემატება მასივში და შეინახება ლოკალში
       var obj = {
        email:email.value,
        fullname:fullname.value,
        phone:phone.value,
        bday:bday.value
       }
       localStorage.setItem("myobject",JSON.stringify(obj))
    }
    
})

var z = localStorage.getItem("truecheck") || "false"
window.onload = function(){
    if(localStorage.getItem("truecheck")=="true"){
        for(var i of allchks){
             i.style.visibility = "visible"
            }
    }
    console.log(localStorage.getItem("truecheck"))
    var registedPerson = JSON.parse(localStorage.getItem("myobject"))
    if(registedPerson!=null){
       fullname.value = registedPerson.fullname
       email.value = registedPerson.email;
       phone.value = registedPerson.phone
       bday.value = registedPerson.bday
    }
    fullname.value = localStorage.getItem("localname")
}

back.addEventListener("click",function(){
    localStorage.clear()
})
