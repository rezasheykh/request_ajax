exports.getAny = (req, res) => {
    res.send(`<h2 style="text-align:center"> 404 Page Not Found </h2>`)
}
exports.getRoot = (req, res) => {
    res.send('hello')
}

exports.getApiCategories = (req, res) => {
    console.log(Categories)
    res.send(Categories)

}