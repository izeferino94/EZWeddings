function loadInfo() {
    var client_list = document.getElementById("client-list");
    var client = generate_client("rosa_melano@gmail.com", "Rosa Melano", "img/client2.jpeg");
    client_list.appendChild(client);
    client = generate_client("elver_galarga@gmail.com", "Elver Galarga", "img/elver_galarga.jpg");
    client_list.appendChild(client);
    client = generate_client("jane_doe@gmail.com", "Jane Doe", "img/jane_doe.jpeg");
    client_list.appendChild(client);
    client = generate_client("john_smith@gmail.com", "John Smith", "img/john_smith.jpg");
    client_list.appendChild(client);
    
}

function generate_client(id, name, img_src) {
    var a              = document.createElement("A");
    var client         = document.createElement("DIV");
    var header_name    = document.createElement("H3");
    var client_picture = document.createElement("IMG");
    
    a.onclick = function(){setClient(id);};
    a.setAttribute("id", id);
    
    client.className = "client";
    
    header_name.innerHTML = name;
    
    client_picture.className = "client-picture";
    client_picture.setAttribute("src", img_src);
    client_picture.setAttribute("alt", "client");
    
    client.appendChild(header_name);
    client.appendChild(client_picture);
    
    a.appendChild(client);
    return a;
}

function setClient(id) {
    localStorage.setItem("view_client", id);
    window.location.href = "/client.html";
}
