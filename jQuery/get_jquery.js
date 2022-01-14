const getDataWithGet = () => {
    let url = "http://127.0.0.1:3000/api/Categories"
    $.get(url, (data) => {
        // $('#container').html(JSON.stringify(data))
        gbox(data)
    })
}

function gbox(data) {
    data.forEach(element => {
        createBox(element)

    });
}

function createBox(category) {
    let box = document.createElement('div');
    box.className = 'box';

    let id = document.createElement('h3');
    id.innerText = "ID :" + category.categoryId

    let title = document.createElement('h3');
    title.innerText = category.categoryName;

    let description = document.createElement('p');
    description.innerText = category.description;

    box.appendChild(id);
    box.appendChild(title);
    box.appendChild(description);
    document.getElementById('container').appendChild(box)


}