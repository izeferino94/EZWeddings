function loadInfo() {
    var business_list = document.getElementById("business-list");
    
    var business = generate_business("fairbanks_rcc@gmail.com", "Venue",  "Fairbanks Ranch Country Club", "img/wedding_venue_1.jpg");
    business_list.appendChild(business);
    
    business = generate_business("tacos_el_gordo@gmail.com", "Food", "Tacos El Gordo", "img/TACOS.png");
    business_list.appendChild(business);
    
    business = generate_business("banda_ms@gmail.com", "Entertainment", "Banda MS", "img/banda_ms.jpg");
    business_list.appendChild(business);
}

function generate_business(id, type, name, img_src) {
    var a              = document.createElement("A");
    var business       = document.createElement("DIV");
    var header_name    = document.createElement("H3");
    var business_picture = document.createElement("IMG");
    
    a.onclick = function(){setBusiness(id);};
    a.setAttribute("id", id);
    
    business.className = "business";
    
    header_name.innerHTML = type+": "+name;
    
    business_picture.className = "business-picture";
    business_picture.setAttribute("src", img_src);
    business_picture.setAttribute("alt", "business");
    
    business.appendChild(header_name);
    business.appendChild(business_picture);
    
    a.appendChild(business);
    return a;
}

function setBusiness(id) {
    localStorage.setItem("view_business", id);
    window.location.href = "/business.html";
}
