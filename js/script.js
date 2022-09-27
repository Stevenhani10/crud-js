let username=document.getElementById("username");
let password=document.getElementById("password");
let submit=document.getElementById("submitBtn");
let users;


// console.log(username,password,submit);




// create the users

if(localStorage.use !=null)
{
    users=JSON.parse(localStorage.use);
}
else{
    users=[];
}



submit.onclick=function(){
    let newuser={
        username:username.value,
        password:password.value,
    }
    let retrieveitem=JSON.parse(localStorage.getItem("register"));
        console.log(retrieveitem);
   for(let i=0;i<retrieveitem.length;i++)
    {
        if(retrieveitem[i].username==username.value && retrieveitem[i].password==password.value)
        {
            // console.log("true");
            users.push(newuser);
            console.log(users);
            localStorage.setItem('use', JSON.stringify(users));
            sessionStorage.setItem("usernames",username.value );
            let name = sessionStorage.getItem("usernames");
            console.log(name);
            clearData();

            window.location.href = "notes.html";

        }
        else{
            let error=document.getElementById("error");
            error.innerHTML=`<h3>please enter the info correctly</h3>`;
        }
    }
   
}


// clear data
function clearData()
{
    username.value='';
    password.value='';
}