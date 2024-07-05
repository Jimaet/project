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
            loaderScreen.style.display = "flex";
            setTimeout(function() {
                window.location.href = "game-start.html";
            }, 3000);
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
        firstStepsScreen.classList.add("show");
    });

    continueBtn2.addEventListener("click", function() {
        firstStepsScreen.classList.add("hidden");
        whatNextScreen.classList.remove("hidden");
        whatNextScreen.classList.add("show");
    });

    continueBtn3.addEventListener("click", function() {
        whatNextScreen.classList.add("hidden");
        adviceScreen.classList.remove("hidden");
        adviceScreen.classList.add("show");
    });

    startBtn.addEventListener("click", function() {
        adviceScreen.classList.add("hidden");
        startScreen.classList.remove("hidden");
        startScreen.classList.add("show");
    });

    setTimeout(function() {
        loaderScreen.style.display = "none";
        welcomeScreen.classList.remove("hidden");
        welcomeScreen.classList.add("show");
    }, 3000);
});
