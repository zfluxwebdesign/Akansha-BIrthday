// 🎶 Music play button
const musicBtn = document.getElementById("music-btn");
let audio = new Audio("audio/birthday_music.mp3");
musicBtn.addEventListener("click", () => {
  audio.play();
  musicBtn.innerText = "Music Playing 🎶";
  musicBtn.disabled = true;
});

// 🎉 Confetti animation
const confettiCanvas = document.getElementById("confetti");
const ctx = confettiCanvas.getContext("2d");
confettiCanvas.width = window.innerWidth;
confettiCanvas.height = window.innerHeight;

let confettiPieces = [];
for (let i = 0; i < 150; i++) {
  confettiPieces.push({
    x: Math.random() * confettiCanvas.width,
    y: Math.random() * confettiCanvas.height,
    r: Math.random() * 6 + 2,
    d: Math.random() * 150,
    color: `hsl(${Math.random() * 360}, 100%, 50%)`,
    tilt: Math.floor(Math.random() * 10) - 10
  });
}

function drawConfetti() {
  ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  confettiPieces.forEach(p => {
    ctx.beginPath();
    ctx.lineWidth = p.r;
    ctx.strokeStyle = p.color;
    ctx.moveTo(p.x + p.tilt + p.r, p.y);
    ctx.lineTo(p.x + p.tilt, p.y + p.r * 2);
    ctx.stroke();
  });
  updateConfetti();
}

function updateConfetti() {
  confettiPieces.forEach(p => {
    p.y += Math.cos(p.d) + 1 + p.r / 2;
    p.x += Math.sin(0.5);
    if (p.y > confettiCanvas.height) {
      p.x = Math.random() * confettiCanvas.width;
      p.y = -10;
    }
  });
}

setInterval(drawConfetti, 20);
