
function formatNumber(num) {
    return Number(num.toFixed(2)).toLocaleString();
}

function displayResult(elementId, volume, surfaceArea) {
    document.getElementById(elementId).innerHTML = `
        Volume: ${formatNumber(volume)}<br>
        Surface Area: ${formatNumber(surfaceArea)}
    `;
}

function calculateCube() {
    const side = Number(document.querySelector('.cube-side').value);
    const volume = Math.pow(side, 3);
    const surfaceArea = 6 * Math.pow(side, 2);
    displayResult('cube-result', volume, surfaceArea);
}

function calculateCuboid() {
    const length = Number(document.querySelector('.cuboid-length').value);
    const width = Number(document.querySelector('.cuboid-width').value);
    const height = Number(document.querySelector('.cuboid-height').value);
    const volume = length * width * height;
    const surfaceArea = 2 * (length * width + length * height + width * height);
    displayResult('cuboid-result', volume, surfaceArea);
}


function calculateSphere() {
    const radius = Number(document.querySelector('.sphere-radius').value);
    const volume = (4/3) * Math.PI * Math.pow(radius, 3);
    const surfaceArea = 4 * Math.PI * Math.pow(radius, 2);
    displayResult('sphere-result', volume, surfaceArea);
}


function calculateCylinder() {
    const radius = Number(document.querySelector('.cylinder-radius').value);
    const height = Number(document.querySelector('.cylinder-height').value);
    const volume = Math.PI * Math.pow(radius, 2) * height;
    const surfaceArea = 2 * Math.PI * radius * (radius + height);
    displayResult('cylinder-result', volume, surfaceArea);
}


function calculateCone() {
    const radius = Number(document.querySelector('.cone-radius').value);
    const height = Number(document.querySelector('.cone-height').value);
    const slantHeight = Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2));
    const volume = (1/3) * Math.PI * Math.pow(radius, 2) * height;
    const surfaceArea = Math.PI * radius * (radius + slantHeight);
    displayResult('cone-result', volume, surfaceArea);
}


function calculatePyramid() {
    const base = Number(document.querySelector('.pyramid-base').value);
    const height = Number(document.querySelector('.pyramid-height').value);
    const slantHeight = Math.sqrt(Math.pow(base/2, 2) + Math.pow(height, 2));
    const volume = (1/3) * Math.pow(base, 2) * height;
    const surfaceArea = Math.pow(base, 2) + 2 * base * slantHeight;
    displayResult('pyramid-result', volume, surfaceArea);
}

function calculatePrism() {
    const base = Number(document.querySelector('.prism-base').value);
    const height = Number(document.querySelector('.prism-height').value);
    const length = Number(document.querySelector('.prism-length').value);
    const volume = 0.5 * base * height * length;
    const surfaceArea = (base * height) + (3 * base * length);
    displayResult('prism-result', volume, surfaceArea);
}


function calculateTorus() {
    const majorRadius = Number(document.querySelector('.torus-major').value);
    const minorRadius = Number(document.querySelector('.torus-minor').value);
    const volume = 2 * Math.pow(Math.PI, 2) * majorRadius * Math.pow(minorRadius, 2);
    const surfaceArea = 4 * Math.pow(Math.PI, 2) * majorRadius * minorRadius;
    displayResult('torus-result', volume, surfaceArea);
}


function calculateHemisphere() {
    const radius = Number(document.querySelector('.hemisphere-radius').value);
    const volume = (2/3) * Math.PI * Math.pow(radius, 3);
    const surfaceArea = 3 * Math.PI * Math.pow(radius, 2);
    displayResult('hemisphere-result', volume, surfaceArea);
}