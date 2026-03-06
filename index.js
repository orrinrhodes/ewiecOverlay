//3d spin
const viewer = document.querySelector("model-viewer");
let angle = 0;

function spin() {
    angle += 1;
    viewer.cameraOrbit = `${angle}deg 90deg 2.5m`;
    requestAnimationFrame(spin);
};

spin();


//stream starting
const textFile = 'streamText.txt'; 
async function updateText() {
    try {
        const response = await fetch(textFile + '?t=' + Date.now());
        if (response.ok) {
            const newText = await response.text();
            const el = document.getElementById('text-container');
            if (el.innerText !== newText) {
                el.innerText = newText;
            }
        }
    } catch (err) {
        console.error("Error reading text file:", err);
    };
};

setInterval(updateText, 1000);


//DVD bounce
const speed = 5;
const updateInterval = 1000 / 60;

const img = document.getElementById('bouncing-img');
function initBounce() {
    const imgWidth = img.width;
    const imgHeight = img.height;
    const screenWidth = 1920;
    const screenHeight = 1080;

    let posX = 200;
    let posY = 200;
    let speedX = (Math.random() < 0.5 ? -1 : 1) * speed; 
    let speedY = (Math.random() < 0.5 ? -1 : 1) * speed;

    function updatePosition() {
        posX += speedX;
        posY += speedY;
        
        if (posX + imgWidth >= screenWidth) {
            posX = screenWidth - imgWidth;
            speedX *= -1;
        }
        if (posX <= 0) {
            posX = 0;
            speedX *= -1
        }
        
        if (posY + imgHeight >= screenHeight) {
            posY = screenHeight - imgHeight;
            speedY *= -1;
        }
        if (posY <= 0) {
            posY = 0;
            speedY *= -1;
        }

        img.style.left = posX + 'px';
        img.style.top = posY + 'px';
    }

    setInterval(updatePosition, updateInterval);
}

img.addEventListener('load', initBounce);
if (img.complete) { initBounce(); }