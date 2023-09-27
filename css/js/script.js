// Инициализация Swiper.js
var swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
});

// Открыть модальное окно
document.getElementById("openModal").addEventListener("click", function () {
    document.getElementById("modal").style.display = "flex";
});

// Закрыть модальное окно
document.getElementById("closeModal").addEventListener("click", function () {
    document.getElementById("modal").style.display = "none";
});

// Предпросмотр файла       
function previewFile() {
    var preview = document.querySelector('#preview');
    var file = document.querySelector('input[type=file]').files[0];
    var reader = new FileReader();

    reader.addEventListener("load", function() {
        preview.src = reader.result;
    }, false);

    if(file) {
        reader.readAsDataURL(file);
    }
}