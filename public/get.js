 function getCategories() {
     var request = new XMLHttpRequest();
     //  request.open("GET", "http://127.0.0.1:3000/api/Categories");
     request.open("GET", "http://127.0.0.1:3000/api/Categories");
     request.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
             generateCategoriesBox(JSON.parse(this.responseText))
             console.log(this.responseText);
         }

     }
     request.send();
 }

 function clearCategories() {
     document.getElementById("container").innerHTML = "";
 }

 function generateCategoriesBox(data) {
     for (let i = 0; i < data.length; i++) {
         createBox(data[i]);
         // console.log(data[i]);
     }

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
     button.innerHTML = ''
     button.innerText = "Update"

     box.appendChild(id)
     box.appendChild(title);
     box.appendChild(description);
     box.appendChild(button);
     document.getElementById("container").appendChild(box)
 }