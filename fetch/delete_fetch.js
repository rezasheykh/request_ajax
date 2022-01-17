 async function deleteCategoriesWithFetch() {
     var categoryId = document.getElementById('categoryId').value;
     let url = `http://127.0.0.1:3000/api/Categories/${categoryId}`
     let response = await fetch(url, {
         method: "DELETE",
         headers: {
             "Content-Type": "application/json"
         }
     })
     let data = await response.json()
     console.log(data);
     // .then(response => response.json())
     // .then(data => {
     //     alert(JSON.stringify(data))
     //     document.getElementById('containe').innerHTML = JSON.stringify(data);
     // })
 }