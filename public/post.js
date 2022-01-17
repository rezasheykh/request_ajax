function PostCategory() {
    let category = {};
    category.categoryName = document.querySelector("#categoryName").value;
    category.description = document.querySelector("#description").value;
    const request = new XMLHttpRequest();
    request.open("POST", "http://127.0.0.1:3000/api/Categories")
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // alert(this.responseText);
            createBox(JSON.parse(this.responseText));
            // console.log(this.responseText);
        } else {
            var err = JSON.parse(this.responseText)
            var msg = "";
            for (const e of err) {
                msg += e.message + "<br/>"
            }
            document.getElementById("error").innerHTML = msg

        }
    }

    request.setRequestHeader('Content-type', 'application/json')
    request.send(JSON.stringify(category));
}

function clearPage() {
    document.getElementById("container").innerHTML = ""
}

function createBox(category) {
    let box = document.createElement('div');
    box.className = 'category-box';
    let id = document.createElement('h4');
    id.innerText = "Id:" + category.categoryId;

    let title = document.createElement("h3");
    title.innerText = category.categoryName;

    let description = document.createElement("p");
    description.innerText = category.description;

    let button = document.createElement('button');
    button.className = 'btn_box'
    button.type = "button";
    // button.onclick(getCategories())
    button.innerText = "Update"
    box.appendChild(id)
    box.appendChild(title);
    box.appendChild(description);
    box.appendChild(button)
    document.getElementById("container").appendChild(box)
}