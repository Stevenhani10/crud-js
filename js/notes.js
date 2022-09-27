
let name = sessionStorage.getItem("usernames");
// console.log(name);
let nameuser = document.getElementById("nameuser");
nameuser.textContent="hello MR/MRS "+name;

let retrieveitem=JSON.parse(localStorage.getItem("register"));
let returnnotes=JSON.parse(localStorage.getItem("newNOTES"));

let namegdeed=sessionStorage.getItem("usernames");
showData();
function showData(){
    table='';

      
            for( let k=0;k<returnnotes.length;k++){ 
                if(returnnotes[k].username==namegdeed)
                {     
                      
                                          
                                         table+=`<tr>
                                        <th>note ${k+1}:</th>
                                        <td>${returnnotes[k].notebooks}</td>
                                        <td><button onclick="deleteData(${k})" id="delete" class="btn btn-primary my-2 text-center ">Delete</button></td>
                                        <td><button id="update" class="btn btn-primary my-2 text-center ">Update</button></td>
                                      </tr>`
                                      
                                      console.log(returnnotes[k].notebooks);    
                 }
                }
            





            
            
                
   
}
function deleteData(k){
  
  returnnotes.splice(k,1);
  
  // console.log(returnnotes[k]);
  table+=`<tr>
  <th>note ${k+1}:</th>
  <td></td>
  </tr>`
  localStorage.product=JSON.stringify(returnnotes);
}
console.log(table);
document.getElementById("table").innerHTML = table;



































   
