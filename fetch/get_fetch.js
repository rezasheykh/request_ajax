const getCategoriesWithFetch = () => {
    fetch("http://127.0.0.1:3000/api/Categories")
        .then(response => response.json())
        .then(data => {
            document.getElementById('container').innerHTML = JSON.stringify(data);
        })
}
async function getCategoriesWithFetchAsync() {
    let response = await fetch("http://127.0.0.1:3000/api/Categories")
    let data = await response.json()
    return data


}

async function showCategories() {
    let category = await getCategoriesWithFetchAsync()
    document.getElementById('container').innerHTML = JSON.stringify(category);
    // createBox(category)

}

function clearPage() {
    document.getElementById("container").innerHTML = ""
}

function createBox(category) {
    let box = document.createElement('div');
    box.className = 'box';
    let id = document.createElement('h4');
    id.innerText = "Id:" + category.categoryId;



    let title = document.createElement("h3");
    title.innerText = category.categoryName;

    let description = document.createElement("p");
    description.innerText = category.description;

    box.appendChild(id)
    box.appendChild(title);
    box.appendChild(description);
    document.getElementById("container").appendChild(box)
}