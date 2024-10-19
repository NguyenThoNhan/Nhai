const canvas = document.getElementById('snow-canvas');
const ctx = canvas.getContext('2d');

let snowflakes = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function createSnowflakes() {
    let count = canvas.width / 4;
    for (let i = 0; i < count; i++) {
        snowflakes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 3 + 1,
            speed: Math.random() * 1 + 0.5
        });
    }
}

function drawSnowflakes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';
    ctx.beginPath();
    snowflakes.forEach((flake) => {
        ctx.moveTo(flake.x, flake.y);
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2, true);
    });
    ctx.fill();
    updateSnowflakes();
}

function updateSnowflakes() {
    snowflakes.forEach((flake) => {
        flake.y += flake.speed;
        if (flake.y > canvas.height) {
            flake.y = 0;
        }
    });
}

function animateSnow() {
    drawSnowflakes();
    requestAnimationFrame(animateSnow);
}

window.addEventListener('resize', () => {
    resizeCanvas();
    snowflakes = [];
    createSnowflakes();
});

document.addEventListener('DOMContentLoaded', () => {
    const nameElement = document.getElementById('name-animation');
    const name = "Bùi Nhài";
    let index = 0;

    function typeLetter() {
        if (index < name.length) {
            nameElement.innerHTML += name[index];
            index++;
            setTimeout(typeLetter, 500);
        }
    }

    typeLetter();
});

resizeCanvas();
createSnowflakes();
animateSnow();
