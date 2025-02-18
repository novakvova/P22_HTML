const loadDOM = (path) => {
    //уміє загружати дом
    let xhr = new XMLHttpRequest();
    xhr.open("GET", path, false); //загрузка буде проведена синхроно
    xhr.send();
    document.write(xhr.response); //записуємо результат роботи html-розмітку
}