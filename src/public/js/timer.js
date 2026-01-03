document.querySelectorAll(".activity-row").forEach(row => {
  const display = row.querySelector(".activity-duration");
  const startBtn = row.querySelector(".btn-start");
  const stopBtn = row.querySelector(".btn-stop");

  let seconds = parseInt(display.textContent) * 60;
  let interval = null;

  function updateDisplay() {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;

    display.textContent =
      `${mins.toString().padStart(2, "0")}:` +
      `${secs.toString().padStart(2, "0")}`;
  }

  startBtn.addEventListener("click", () => {
    if (interval !== null) return;

    interval = setInterval(() => {
      if (seconds <= 0) {
        clearInterval(interval);
        interval = null;
        return;
      }

      seconds--;
      updateDisplay();
    }, 1000);
  });

  stopBtn.addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
  });
});
