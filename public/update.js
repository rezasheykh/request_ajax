function UpdateCategory() {

    const category = {}
    var categoryId = document.getElementById('categoryId').value;
    // categorey.categoryId = document.querySelector('#categoryId').value;
    // category.categoryName = document.getElementById("categoryName").value;
    // category.description = document.getElementById("description").value;
    console.log(category);

    let url = `http://127.0.0.1:3000/api/Categries/${categoryId}`
    const request = new XMLHttpRequest();
    request.open("PUT", url)
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            alert(this.responseText);
        } else {
            document.getElementById('error').innerText = this.responseText;
        }
    }
    request.setRequestHeader("Content-Type", "applaication/json");
    console.log(JSON.stringify(category));
    // request.send(JSON.stringify(category))
    request.send()

}

function ClearPage() {
    document.getElementById('result').innerHTML = ""
}