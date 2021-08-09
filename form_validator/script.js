// 1ere etape selectionner le formulaire
let form=document.getElementById("form");

// ecouter la soumission du formulaire
form.addEventListener("submit",function(event){
event.preventDefault();

const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
// console.log(username.value);
// console.log(email.value);

let usernameMessage=document.getElementById("usernameMessage");
if (username.value ==="" || username.value.lenght <3)
{
  usernameMessage.textContent="il faut plus de trois caractere";
  username.style.border="2px solid red";
  usernameMessage.style.color="red";
}
else if(username.value.lenght > 15){
    usernameMessage.textContent="il faut pas dépasser 15 caractere";
    username.style.border="2px solid red";
    usernameMessage.style.color="red";
    
}else {
  username.style.border="2px solid green";
  usernameMessage.textContent="";

}
let emailMessage=document.getElementById("emailMessage");
const re =/^(([^<>()[].,;:s@]+(.[^<>()[].,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
// console.log(re.test(email.value));
if (re.test(email.value)){
  emailMessage.textContent="";
  email.style.border="2px solid green";
}
else {
  emailMessage.textContent="entrer un email valide";
  email.style.border="2px solid red";
  emailMessage.style.color="red";
  
}
let passwordMessage=document.getElementById("passwordMessage");

if (password==="" ){
  passwordMessage.textContent="entrer un  password"
  password.style.border="2px solid red";
  passwordMessage.style.color="red";
}
else if(password.value.length < 8){
  passwordMessage.textContent="le password doit contenir au moin 8 caracteres"
  password.style.border="2px solid red";
}
else {
  password.style.border="2px solid green";
  passwordMessage.textContent="";
}
let password2Message=document.getElementById("password2Message");
if (password===password2 && (password2.value !== "" && password.value !== "")  ){
  password2.style.border="2px solid green";
  password2Message.textContent="";

 }
else {
  password2Message.textContent="entrer le meme password"
  password2.style.border="2px solid red";
  password2Message.style.color="red";
}
})