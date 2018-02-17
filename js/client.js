// DO ON LOAD
function loadInfo() {
    var page_title = document.getElementsByClassName("title")[0];
    var children = page_title.children;
    var page_picture = children[0];
    var business_title = children[1];
    page_picture.setAttribute("src", "img/title_bg4.jpeg");
    business_title.firstChild.innerHTML = "Rosa Melano";
    
    var business_picture = document.getElementById("client-picture");
    business_picture.setAttribute("src", "img/client2.jpeg");
    
    var contact_info = document.getElementById("contact-info");
    var br = document.createElement("BR");
    var b = document.createElement("B");
    var i = document.createElement("I");
    
    b.innerHTML = "Phone-Number:";
    i.innerHTML = " 888-888-8888";
    contact_info.appendChild(b);
    contact_info.appendChild(i);
    contact_info.appendChild(br);
    
    b = document.createElement("B");
    i = document.createElement("I");
    br = document.createElement("BR");
    b.innerHTML = "E-mail:";
    i.innerHTML = " rosa_melano@gmail.com";
    contact_info.appendChild(b);
    contact_info.appendChild(i);
    contact_info.appendChild(br);
}

// FUNCTIONS
function showModal() {
    var modal = document.getElementById("add-item-modal");
    modal.style.display = "block";
}

function closeModal() {
    var modals = document.getElementsByClassName("modal");
    modals[0].style.display = "none";
    modals[1].style.display = "none";
}

var idCounter = 0;
function addTodoItem() {
    var newId = "todo";
        
    var todo_list = document.getElementById("todo-list");
    var node = document.createElement("LI");
    var anchorNode = document.createElement("A");
    var item = document.getElementById("add-modal-text").value;
    var textnode = document.createTextNode(item);

    newId += idCounter.toString();
    node.setAttribute("id", newId);
    idCounter++;
    node.setAttribute("class", "todo-item");
    node.setAttribute("onclick", "showEditModal(this.id);");
    anchorNode.appendChild(textnode);
    node.appendChild(anchorNode);
    todo_list.appendChild(node);
    
    document.getElementById("add-modal-text").value = "";
    closeModal();
}

var editId = "";
function showEditModal(id) {
    var item = document.getElementById(id).firstElementChild.innerHTML;
    var modal = document.getElementById("edit-item-modal");
    document.getElementById("edit-modal-text").value = item;
    modal.style.display = "block";
    editId = id;
}

function editTodoItem() {
    var item = document.getElementById("edit-modal-text").value;
    document.getElementById(editId).firstElementChild.innerHTML = item;
    closeModal();
}

function deleteTodoItem() {
    var item = document.getElementById(editId);
    item.parentNode.removeChild(item);
    idCounter--;
    closeModal();
}

function sendMessage(event) {
    if (event.keyCode == 13) {
        var message_input = document.getElementById("msg-input");
        var message_text = message_input.value;
        if(message_text != "") {
            var chat_box = document.getElementById("chat-box");
            var message = document.createElement("DIV");
            var sender = document.createTextNode("You:");
            var br = document.createElement("BR")
            var text = document.createTextNode(message_text);
            message.setAttribute("class", "chat-msg");
            message.appendChild(sender);
            message.appendChild(br);
            message.appendChild(text);
            chat_box.appendChild(message);
            message_input.value = "";
        }
    }
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.className == "modal") {
        closeModal();
    }
}