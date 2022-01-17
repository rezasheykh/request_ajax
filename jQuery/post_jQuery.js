const url = "http://127.0.0.1:3000/api/Categories"

const postDataWithPostjQuery = () => {

    const category = {}
    category.categoryName = $('#categoryName').val()
    category.description = $('#description').val()
    $.ajax(url, {
        type: "POST",
        timeout: 3000,
        data: JSON.stringify(category),
        headers: {
            "Content-type": "application/json"
        },
        success: function(data) {
            alert(JSON.stringify(data))
            $('#container').html(JSON.stringify(data))
        },
        error: function(e) {
            var err = JSON.stringify(e.responseText)
            alert(e.responseText)
            $('#error').html(err)

        }


    })
}






// const postDataWithAjax = () => {
//     const category = {}
//     category.categoryName = $('#categoryName').val()
//     category.description = $('#description').val()
//     $.ajax(url, {
//         type: "post",
//         timeout: 3000,
//         success: function(data)
//     })

// }