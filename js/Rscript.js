let usernameR=document.getElementById("username");
let emailR=document.getElementById("email");
let passwordR=document.getElementById("password");
let password_confirmR=document.getElementById("password_confirm");
let register=document.getElementById("register");
let notesR;


console.log(username, email, password, password_confirm, register);




// create the users

if(localStorage.register !=null)
{
    users=JSON.parse(localStorage.register);
}
else{
    users=[];
}



register.onclick=function(){
    let newuser={
        username:username.value,
        email:email.value,
        password:password.value,
        password_confirm:password_confirm.value,
        notesR,
    }
    users.push(newuser);
    console.log(users);
    localStorage.setItem('register', JSON.stringify(users));
    clearData();
}


// clear data
function clearData()
{
    username.value='';
    password.value='';
    email.value='';
    password_confirm.value='';
}