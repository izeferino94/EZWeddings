function onLoad(){
var listing = {}; 
            listing["title"] = "Fast Catering with drinks!";
            listing["cname"] = "Rico's Tasty Enchilladas";    
            listing["description"] = "eat some home made fresh flame grilled yum yum food";            
            listing["email"] = "rtEch@aol.com";
            listing["phone"] = "818-324-6342";  
            listing["address"] = "123 balcony ave, La Jolla, CA";  
 
    var picture = document.getElementById("imageListing");
    var add = document.getElementById("contactInfo");
    
    var name = document.createElement("P");
    var address = document.createElement("P");
    var number = document.createElement("P");
    var description = document.createElement("P");
    var button = document.createElement("BUTTON");
    
    name.innerHTML = listing["title"];
    address.innerHTML = listing["address"];
    number.innerHTML = listing["phone"];
    description.innerHTML = listing["description"];
    button.innerHTML = "Add Business";
    button.onclick = function(){
        functionBusinessListing();
    };
    picture.setAttribute("src","img/TACOS.png");
    
    
    add.appendChild(name);
    add.appendChild(address);
    add.appendChild(number);
    add.appendChild(description);
    add.appendChild(button);
    
            function functionBusinessListing(){
                alert('Business Has Been Added');
            }
    
            function populate(){              
                document.getElementById("titleidUL").value = listing["title"];
                document.getElementById("cnameidUL").value = listing["cname"];     
                document.getElementById("descriptionidUL").value = listing["description"];
                document.getElementById("emailidUL").value = listing["email"];
                document.getElementById("phoneidUL").value = listing["phone"];  
                document.getElementById("addressidUL").value = listing["address"];                 
            }
            
            function saveChanges(){  
                listing["title"] = document.getElementById("titleidUL").value; 
                listing["cname"] = document.getElementById("cnameidUL").value;  
                listing["description"] = document.getElementById("descriptionidUL").value;     
                listing["email"] = document.getElementById("emailidUL").value;  
                listing["phone"] = document.getElementById("phoneidUL").value; 
                listing["address"] = document.getElementById("addressidUL").value; 
            
                return false;
            }               
}