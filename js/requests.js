function loadInfo() {
    var req_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel imperdiet lorem. Donec consequat quam quis ante mattis tincidunt. Curabitur eros nunc, condimentum sed leo elementum, placerat venenatis ipsum. Phasellus nulla velit, venenatis eget lorem id, cursus molestie erat. Ut neque ante, consectetur venenatis imperdiet ac, volutpat id libero. Sed sed lorem dignissim, bibendum lacus eget, tincidunt justo. Maecenas eu quam eget velit commodo hendrerit vel eu odio. Pellentesque eget auctor lorem, vitae efficitur ligula. Proin posuere augue eu lorem auctor consequat. Proin sit amet volutpat nisi, at tristique tellus. Maecenas in nisi vitae dui volutpat luctus eget eget elit. Nunc urna diam, dictum sed nisl sed, consectetur aliquam dui. Aenean gravida, ante eu sagittis lacinia,  lorem felis convallis diam, vel suscipit libero neque ac tortor. Maecenas tempus libero vitae urna sollicitudin luctus. Ut in purus a eros condimentum tempus non sed elit. Praesent vitae lacus finibus metus condimentum laoreet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vel quam eu turpis blandit facilisis in quis nunc. Sed nec ipsum sed sem elementum feugiat.";
    
    loadClientRequest("img/client2.jpeg", "Rosa Melano", "888-888-8888", "rosa_melano@gmail.com", req_text);
    loadClientRequest("img/elver_galarga.jpg", "Elver Galarga", "888-888-8888", "elver_galarga@gmail.com", req_text);
}

function denyRequest(client_name, id) {
    var client = document.getElementById(id);
    client.parentNode.removeChild(client);
    alert(client_name+" was denied!");
    //Nothing must be done.
}

function acceptRequest(client_name, id) {
    var client = document.getElementById(id);
    client.parentNode.removeChild(client);
    alert(client_name+" was accepted!");
    //Add client to clients_lists.
}

function loadClientRequest(img_src, client_name, pnumber, eaddr, req_str){
    var id = eaddr;
    var client        = document.createElement("DIV");
    var name          = document.createElement("H3");
    var client_info   = document.createElement("DIV");
    var client_pic    = document.createElement("IMG");
    var br            = document.createElement("BR");
    var phone_number  = document.createTextNode("Phone Number: "+pnumber);
    var email         = document.createTextNode("E-mail: "+eaddr);
    var req_text      = document.createElement("DIV");
    var text          = document.createTextNode(req_str);
    var deny_button   = document.createElement("BUTTON");
    var accept_button = document.createElement("BUTTON");

    client.className        = "client";
    client.setAttribute("id", id);
    client_info.className   = "client-info";
    client_pic.className    = "client-picture";
    req_text.className      = "request-text";
    deny_button.className   = "deny-button";
    accept_button.className = "accept-button";
    
    client_pic.setAttribute("src", img_src);
    client_pic.setAttribute("alt", "client");
    deny_button.onclick     = function () { denyRequest(client_name, id)   };
    accept_button.onclick   = function () { acceptRequest(client_name, id) } ;
    
    name.innerHTML          = client_name;
    deny_button.innerHTML   = "Deny";
    accept_button.innerHTML = "Accept";
    
    client_info.appendChild(client_pic);
    client_info.appendChild(br);
    client_info.appendChild(phone_number);
    br = document.createElement("BR");
    client_info.appendChild(br);
    client_info.appendChild(email);
    
    req_text.appendChild(text);
    
    client.appendChild(name);
    client.appendChild(client_info);
    client.appendChild(req_text);
    client.appendChild(deny_button);
    client.appendChild(accept_button);
    
    document.body.appendChild(client);
}