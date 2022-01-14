const chColor = () => {
    $('body').css('background-color', 'red')
}
const ChangeColor = (elm) => {
    var color = $(elm).val()
    $('body').css('background-color', color)
}
const showBox = () => {
    $('.box').show()

}
const hideBox = () => {
    $('.box').hide()
}
const taggleBox = () => {
    $('.box').toggle()
}