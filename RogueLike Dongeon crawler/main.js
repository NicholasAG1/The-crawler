// The Crawler

// Load canvas
let cnv = document.getElementById("main game");
let ctx = cnv.getContext("2d");
cnv.width = 750
cnv.height = 750

// Global variables
let player = [];
let playerHealth = [10];
let levelGeberator = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];   
let goblin = [];

// Player location
for (let i = 0; i < 1; i++) {
    player.push({
        x: 375,
        y: 740,
        r: 20
    })
}

// Goblin Location
for (let i = 0; i++ < 1; i++) {
    goblin.push({
        x: 375,
        y: 375,
        r: 15
    })
}


// Event listiners
document.addEventListener("keydown", move)
// Functions

// Main Programe loop
requestAnimationFrame(draw);

function draw() {
    // Drawing 
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    // Set player info
    for (let i = 0; i < player.length; i++) {
        ctx.fillstyle = 'black';
        ctx.beginPath();
        ctx.arc(player[i].x, player[i].y, player[i].r, 0, 2 * Math.PI);
        ctx.fill();
    }

    // Set Goblin info
    for (let g = 0; g < goblin.length; g++) {
        ctx.fillstyle = 'green';
        ctx.beginPath();
        ctx.arc(goblin[g].x, goblin[g].y, goblin[g].y, goblin[g].r, 0, 2 * Math.PI);
        ctx.fill
        // Goblin Movement

    }

    // Request another Animation frame
    requestAnimationFrame(draw);
}

function move() {
    for (let i = 0; i < player.length; i++) {
        if (event.code == "ArrowUp") {
            player[i].y -= 10
        }else if (event.code == "ArrowRight") {
            player[i].x += 10
        }else if (event.code == "ArrowDown") {
            player[i].y += 10
        }else if (event.code == "ArrowLeft") {
            player[i].x -= 10
        }

        // stop at the edges
        if (player[i].y < 0) {
            player[i].y = 0;
        }else if (player[i].y > 750) {
            player[i].y = 750;
        }else if (player[i].x < 0) {
            player[i].x = 0;
        }else if (player[i].x > 750) {
            player[i].x = 750;
        }
    }
} 


