// DO ON LOAD
function loadInfo() {
    var page_title = document.getElementsByClassName("title")[0];
    var children = page_title.children;
    var page_picture = children[0];
    var business_title = children[1];
    page_picture.setAttribute("src", "img/index1.jpeg");
    business_title.firstChild.innerHTML = "My Wedding Planner";
    
    loadBusinessSearch();
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

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.className == "modal") {
        closeModal();
    }
}

function loadBusinessSearch() {
    var businessTypes = ["Venues", "Officiant", "Decorations", "Food & Drinks", "Cake", "Rings", "Transportation", "Entertainment", "Clothing", "Hair & Makeup", "Photographer & Videographer"];
    var search_list = document.getElementById("business-types");
    
    for(i = 0; i < businessTypes.length; i++) {
        var type = document.createElement("LI");
        var a = document.createElement("A");
        var text = document.createTextNode(businessTypes[i]);

        type.setAttribute("class", "todo-item");
        a.setAttribute("href", "business_search.html");
        a.appendChild(text);
        type.appendChild(a);
        search_list.appendChild(type);
    }
}

function progress_change() {
    var radios = document.getElementsByName("progress");

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            var list_item = document.getElementById(editId);
            if(radios[i].value=="in_progress") {
                list_item.className = "todo-item";
            }
            else {
                list_item.className = "a_active";

            }
            break;
        }
    }
}
    



