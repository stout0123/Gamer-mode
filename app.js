document.addEventListener("DOMContentLoaded", function() {
    const clickableArea = document.getElementById("clickable-area");
    const message = document.getElementById("message");
    const toggleButton = document.getElementById("toggle-button");

    let isRunning = false; // Auto clicker is initially off
    let clickTimeout;

    function randomClick() {
        if (!isRunning) return; // Do nothing if the auto-clicker is off

        const delay = Math.floor(Math.random() * 10) + 1;
        message.textContent = `Next click in ${delay} second(s)...`;

        clickTimeout = setTimeout(() => {
            clickableArea.click();
        }, delay * 1000);
    }

    clickableArea.addEventListener("click", function() {
        if (!isRunning) return;
        message.textContent = "Clicked!";
        randomClick(); // Schedule the next random click
    });

    toggleButton.addEventListener("click", function() {
        isRunning = !isRunning;

        if (isRunning) {
            toggleButton.textContent = "Stop Auto Clicker";
            toggleButton.classList.remove("off");
            randomClick(); // Start auto-clicking
        } else {
            toggleButton.textContent = "Start Auto Clicker";
            toggleButton.classList.add("off");
            clearTimeout(clickTimeout); // Stop any pending clicks
            message.textContent = "Auto Clicker Stopped";
        }
    });
});
