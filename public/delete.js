function deleteCategory() {
    var categoryId = document.querySelector("#categoryId").value;
    // console.log(categoryId);
    // category.categoryName = document.querySelector("#categoryName").value;
    const request = new XMLHttpRequest();
    request.open("DELETE", `http://127.0.0.1:3000/api/Categories/${categoryId}`)
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            alert(this.responseText);
            var res = this.responseText;
            createBox(res);

        } else {
            document.getElementById("error").innerHTML = this.responseText;
        }
    }

    request.setRequestHeader('Content-Type', 'application/json')
    request.send();
}

function clearPage() {
    document.getElementById("container").innerHTML = ""
}

function createBox(category) {
    let box = document.createElement('div');
    box.className = 'category-box';
    let id = document.createElement('h4');
    id.innerText = "Id:" + category.categoryId

    let title = document.createElement("h3");
    title.innerText = category;

    let description = document.createElement("p");
    description.innerText = category.description;

    // box.appendChild(id)
    box.appendChild(title);
    // box.appendChild(description);
    document.getElementById("container").appendChild(box)
}