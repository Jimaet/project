function selectGender(gender) {
    if (gender === 'male') {
        document.getElementById('maleBtn').style.border = '2px solid #9713FF';
        document.getElementById('femaleBtn').style.border = 'none';
    } else if (gender === 'female') {
        document.getElementById('maleBtn').style.border = 'none';
        document.getElementById('femaleBtn').style.border = '2px solid #9713FF';
    }
}

function savePerson() {
    const name = document.getElementById('name').value.trim();
    let gender = '';

    if (document.getElementById('maleBtn').style.border === '2px solid rgb(151, 19, 255)') {
        gender = 'male';
    } else if (document.getElementById('femaleBtn').style.border === '2px solid rgb(151, 19, 255)') {
        gender = 'female';
    } else {
        alert('Пожалуйста, выберите пол.');
        return;
    }

    // Ваш код для сохранения имени (name), пола (gender) и дальнейших действий с данными
    // Например, можно отправить данные на сервер или сохранить локально

    console.log(`Имя: ${name}, Пол: ${gender}`);

    // Здесь можно перенаправить пользователя на следующую страницу или выполнить другие действия
}
