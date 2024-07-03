document.addEventListener("DOMContentLoaded", function() {
    const loaderScreen = document.getElementById("loader-screen");
    const welcomeScreen = document.getElementById("welcome-screen");
    const firstStepsScreen = document.getElementById("first-steps-screen");
    const whatNextScreen = document.getElementById("what-next-screen");
    const adviceScreen = document.getElementById("advice-screen");
    const startScreen = document.getElementById("start-screen");

    const continueBtn = document.getElementById("continue-btn");
    const continueBtn2 = document.getElementById("continue-btn-2");
    const continueBtn3 = document.getElementById("continue-btn-3");
    const startBtn = document.getElementById("start-btn");

    // Функция для закрытия экрана по клику на крестик
    function closeScreen(screen) {
        const closeBtn = screen.querySelector(".close-btn");
        closeBtn.addEventListener("click", function() {
            screen.classList.add("hidden");
            loaderScreen.style.display = "flex"; // Показываем загрузочный экран
            setTimeout(function() {
                window.location.href = "game-start.html";
            }, 3000); // Имитация задержки, можно удалить в реальном приложении
        });
    }

    // Применяем функцию closeScreen для каждого экрана
    closeScreen(welcomeScreen);
    closeScreen(firstStepsScreen);
    closeScreen(whatNextScreen);
    closeScreen(adviceScreen);

    continueBtn.addEventListener("click", function() {
        welcomeScreen.classList.add("hidden");
        firstStepsScreen.classList.remove("hidden");
    });

    continueBtn2.addEventListener("click", function() {
        firstStepsScreen.classList.add("hidden");
        whatNextScreen.classList.remove("hidden");
    });

    continueBtn3.addEventListener("click", function() {
        whatNextScreen.classList.add("hidden");
        adviceScreen.classList.remove("hidden");
    });

    startBtn.addEventListener("click", function() {
        adviceScreen.classList.add("hidden");
        startScreen.classList.remove("hidden");
    });

    // Simulate loading delay for initial welcome screen
    setTimeout(function() {
        loaderScreen.style.display = "none";
        welcomeScreen.classList.remove("hidden");
    }, 3000); // Имитация задержки загрузки, можно изменить или удалить
});
