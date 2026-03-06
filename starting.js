//3d spin
const viewer = document.querySelector("model-viewer");
let angle = 0;

function spin() {
    angle += 1;
    viewer.cameraOrbit = `${angle}deg 90deg 2.5m`;
    requestAnimationFrame(spin);
};

spin();