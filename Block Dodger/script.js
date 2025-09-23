const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

resizeCanvas(); // Pehli dafa set karna
window.addEventListener("resize", resizeCanvas); // Resize handle karna

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Sirf tab reposition karo jab player bana ho
    if (player && gameRunning) {
        player.x = canvas.width / 2 - player.width / 2;
        player.y = canvas.height - player.height - 20;
    }
}

const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const bgMusic = document.getElementById("bgMusic");
const gameOverSound = document.getElementById("gameOverSound");

let gameRunning = false;
let player, obstacles, score, gameOver;
let stars = [];

// Create moving stars
function initStars() {
    stars = [];
    for (let i = 0; i < 150; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2,
            speed: Math.random() * 0.5 + 0.2
        });
    }
}
initStars();

// Start Game
startBtn.addEventListener("click", () => {
    if (!gameRunning) {
        startGame();
        startBtn.disabled = true;
        stopBtn.disabled = false;
        bgMusic.play();
    }
});

// Stop Game
stopBtn.addEventListener("click", () => {
    resetGame();
    startBtn.disabled = false;
    stopBtn.disabled = true;
    bgMusic.pause();
});

// Initialize game variables
function startGame() {
    gameRunning = true;
    player = { 
        x: canvas.width / 2 - 25, 
        y: canvas.height - 70, 
        width: 50, 
        height: 50, 
        speed: 7, 
        dx: 0 
    };
    obstacles = [];
    score = 0;
    gameOver = false;
    gameLoop();
}

// Reset Game
function resetGame() {
    gameRunning = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Move player
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") player.dx = -player.speed;
    if (event.key === "ArrowRight") player.dx = player.speed;
});
document.addEventListener("keyup", () => {
    if (player) player.dx = 0;
});

// Game loop
function gameLoop() {
    if (!gameRunning || gameOver) return;

    update();
    draw();
    requestAnimationFrame(gameLoop);
}

// Update game state
function update() {
    // Move player
    player.x += player.dx;
    if (player.x < 0) player.x = 0;
    if (player.x + player.width > canvas.width) player.x = canvas.width - player.width;

    // Move stars
    stars.forEach(star => {
        star.y += star.speed;
        if (star.y > canvas.height) {
            star.y = 0;
            star.x = Math.random() * canvas.width;
        }
    });

    // Move obstacles
    for (let i = 0; i < obstacles.length; i++) {
        obstacles[i].y += 4;

        // Collision Detection
        if (
            player.x < obstacles[i].x + obstacles[i].width &&
            player.x + player.width > obstacles[i].x &&
            player.y < obstacles[i].y + obstacles[i].height &&
            player.y + player.height > obstacles[i].y
        ) {
            gameOverSound.play();
            gameOver = true;
            alert(`💥 Game Over! Score: ${score}`);
            resetGame();
        }
    }

    // Remove off-screen obstacles
    obstacles = obstacles.filter(obstacle => obstacle.y < canvas.height);

    // Add new obstacles
    if (Math.random() < 0.02) {
        obstacles.push({
            x: Math.random() * (canvas.width - 50),
            y: 0,
            width: 50,
            height: 50
        });
        score++;
    }
}

// Draw everything (background + game)
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw background stars
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = "cyan";
        ctx.fill();
    });

    // Draw player
    ctx.fillStyle = "lime";
    ctx.shadowBlur = 20;
    ctx.shadowColor = "lime";
    ctx.fillRect(player.x, player.y, player.width, player.height);
    ctx.shadowBlur = 0;

    // Draw obstacles
    ctx.fillStyle = "red";
    ctx.shadowBlur = 20;
    ctx.shadowColor = "red";
    for (let i = 0; i < obstacles.length; i++) {
        ctx.fillRect(obstacles[i].x, obstacles[i].y, obstacles[i].width, obstacles[i].height);
    }
}
