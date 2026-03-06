
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