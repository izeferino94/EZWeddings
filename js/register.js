function createAccount()
{   
    var newAccount = {};                
    newAccount["fname"] = document.getElementById("fnameidR").value;
    newAccount["lname"] = document.getElementById("lnameidR").value;              
    newAccount["email"] = document.getElementById("emailidR").value;
    newAccount["password"] = document.getElementById("passwordidR").value;
    newAccount["phone"] = document.getElementById("phoneidR").value;
    
    if(document.getElementById("cradioidR").checked){
      newAccount["type"] = "client";
    }
    else{
        newAccount["type"] = "vendor";
    }               
    //localStorage.setItem('newAccount', JSON.stringify(newAccount));
    alert("a");
    return true;
}