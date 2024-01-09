const chooseColor = document.querySelectorAll('.chooseColorButton');
const contentItem = document.querySelectorAll('.contentItem');

console.log(chooseColor);

chooseColor.forEach(function (item) {
    item.addEventListener('click', open)
})

function open(evt){
    const target = evt.currentTarget;
    const button = target.dataset.button;
    const contentActive = document.querySelectorAll(`.${button}`)
    chooseColor.forEach(function (item) {
        item.classList.remove('chooseColorButtonActive');
    })

    target.classList.add('chooseColorButtonActive')

    contentItem.forEach(function (item) {
        item.classList.remove('contentActive');
    })

    contentActive.forEach(function (item) {
        item.classList.add('contentActive');
    })
}