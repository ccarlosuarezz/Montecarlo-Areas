//Prametros: limites y cantidad de iteraciones
const loweLimit = document.getElementById('input_lower_limit');
const upperLimit = document.getElementById('input_upper_limit');
const iterations = document.getElementById('input_iterations');
const button = document.getElementById('button');
const estimatedValue = document.getElementById('estimated_value');
button.addEventListener("click", calculate);

function calculate() {
    //functionOne();
    //functionTwo();
    functionThree();
}

function functionOne() {
    let lower = Number(loweLimit.value);
    let upper = Number(upperLimit.value);
    let n = Number(iterations.value);
    let lowerExpresionOne = expresionOne(lower);
    let upperExpresionOne = expresionOne(upper);
    let rectangleArea = (Math.abs(lower) + Math.abs(upper)) * (Math.abs(lowerExpresionOne) + Math.abs(upperExpresionOne));
    let pointsInside = 0;
    let x = 0;
    let y = 0;
    let fx = 0;
    let gx = 0;
    for (let i = 0; i < n; i++) {
        x = lower + ((upper-lower)*Math.random());
        y = lowerExpresionOne + ((upperExpresionOne-lowerExpresionOne)*Math.random());;
        //console.log(`x: ${x} - y: ${y}`);
        fx = expresionOne(x);
        gx = expresionTwo(x);
        if (y >= fx && y <= gx) {
            pointsInside++;
        }
    }
    let estimatedResult = rectangleArea * pointsInside / n;
    console.log(`${rectangleArea} * ${pointsInside} / ${n}`);
    estimatedValue.innerHTML = '<strong>Valor estimado: ' + estimatedResult + '</strong>';
}

function functionTwo() {
    let lower = Number(loweLimit.value);
    let upper = Number(upperLimit.value);
    let n = Number(iterations.value);
    let lowerExpresionOne = lineOne(lower);
    let upperExpresionOne = lineOne(upper);
    let rectangleArea = (Math.abs(lower) + Math.abs(upper)) * (Math.abs(lowerExpresionOne) + Math.abs(upperExpresionOne));
    let pointsInside = 0;
    let x = 0;
    let y = 0;
    let fx = 0;
    let gx = 0;
    let hx = 0;
    for (let i = 0; i < n; i++) {
        x = lower + ((upper-lower)*Math.random());
        y = lowerExpresionOne + ((upperExpresionOne-lowerExpresionOne)*Math.random());;
        fx = lineOne(x);
        gx = lineTwo(x);
        hx = lineThree(x);
        if (y >= fx && y <= gx && y >= hx) {
            pointsInside++;
        }
    }
    let estimatedResult = rectangleArea * pointsInside / n;
    estimatedValue.innerHTML = '<strong>Valor estimado: ' + estimatedResult + '</strong>';
}

function functionThree() {
    let lower = Number(loweLimit.value);
    let upper = Number(upperLimit.value);
    let n = Number(iterations.value);
    let lowerExpresionOne = curveOne(lower);
    let upperExpresionOne = curveOne(upper);
    let rectangleArea = (Math.abs(lower) + Math.abs(upper)) * (Math.abs(lowerExpresionOne) + Math.abs(upperExpresionOne));
    let pointsInside = 0;
    let x = 0;
    let y = 0;
    let fx = 0;
    let gx = 0;
    let hx = 0;
    for (let i = 0; i < n; i++) {
        x = lower + ((upper-lower)*Math.random());
        y = lowerExpresionOne + ((upperExpresionOne-lowerExpresionOne)*Math.random());;
        fx = curveOne(x);
        gx = curveTwo(x);
        hx = curveThree(x);
        if (y <= fx && y >= gx && y <= hx) {
            pointsInside++;
        }
    }
    let estimatedResult = rectangleArea * pointsInside / n;
    estimatedValue.innerHTML = '<strong>Valor estimado: ' + estimatedResult + '</strong>';
}

function expresionOne(x) {
    return (x * x) + (1 / (x + 1)) - 0.4;
}

function expresionTwo(x) {
    return (Math.sqrt(x) / 2) + (1 / (x + 1)) - 0.5;
}

function lineOne(x) {
    return (Math.pow(x, 4)) + (Math.pow(x, 3)) + (x * x)
}

function lineTwo(x) {
    return (Math.pow(x, 1/3)) - (x * x)
}

function lineThree(x) {
    return x / 2;
}

function curveOne() {
    return Math.sqrt(1 - (x * x));
}

function curveTwo() {
    return x - 1;
}

function curveThree() {
    return x + 1;
}