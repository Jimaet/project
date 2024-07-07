document.addEventListener("DOMContentLoaded", function() {
    const startBtn = document.getElementById("start-customization");
    const customizationForm = document.getElementById("customization-form");
    const characterFaceImg = document.getElementById("character-face-img");
    const characterHairImg = document.getElementById("character-hair-img");
    const characterTopImg = document.getElementById("character-top-img");
    const characterBottomImg = document.getElementById("character-bottom-img");
    const characterShoesImg = document.getElementById("character-shoes-img");
    const characterAccessoriesImg = document.getElementById("character-accessories-img");

    startBtn.addEventListener("click", function() {
        startBtn.classList.add("hidden");
        customizationForm.classList.remove("hidden");
        customizationForm.classList.add("show");
    });

    const saveCharacterBtn = document.getElementById("save-character");
    saveCharacterBtn.addEventListener("click", function() {
        // Получение выбранных значений
        const face = document.getElementById("character-face").value;
        const hair = document.getElementById("character-hair").value;
        const top = document.getElementById("character-top").value;
        const bottom = document.getElementById("character-bottom").value;
        const shoes = document.getElementById("character-shoes").value;
        const accessories = document.getElementById("character-accessories").value;

        // Установка изображений на основе выбранных значений
        characterFaceImg.src = `images/face_${face}.png`;
        characterHairImg.src = `images/hair_${hair}.png`;
        characterTopImg.src = `images/top_${top}.png`;
        characterBottomImg.src = `images/bottom_${bottom}.png`;
        characterShoesImg.src = `images/shoes_${shoes}.png`;
        characterAccessoriesImg.src = `images/accessories_${accessories}.png`;

        alert("Персонаж сохранен!");
    });
});
