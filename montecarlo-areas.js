//Prametros: limites y cantidad de iteraciones
const loweLimit = document.getElementById('input_lower_limit');
const upperLimit = document.getElementById('input_upper_limit');
const iterations = document.getElementById('input_iterations');
const f1 = document.getElementById('f1');
const f2 = document.getElementById('f2');
const f3 = document.getElementById('f3');
const button = document.getElementById('button');
const results = document.getElementById('results');
button.addEventListener("click", calculate);

function calculate() {
    results.innerHTML = '';
    if (f1.checked) {
        functionOne();
    } else if (f2.checked) {
        functionTwo();
    } else if (f3.checked) {
        functionThree();
    } else {
        window.alert('No ha seleccionado una función');
    }
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
        y = lowerExpresionOne + ((upperExpresionOne-lowerExpresionOne)*Math.random());
        fx = expresionOne(x);
        gx = expresionTwo(x);
        if (y >= fx && y <= gx) {
            pointsInside++;
        }
    }
    let estimatedResult = rectangleArea * pointsInside / n;
    const res = document.createElement('p');
    res.textContent = `Valor estimado: ${estimatedResult}`;
    results.appendChild(res);
}

function functionTwo() {
    let lower = Number(loweLimit.value);
    let upper = Number(upperLimit.value);
    let n = Number(iterations.value);
    let lowerExpresionOne = lineOne(lower);
    let upperExpresionOne = lineOne(upper);
    let rectangleArea = (Math.abs(lower) + Math.abs(upper)) * (Math.abs(lowerExpresionOne) + Math.abs(upperExpresionOne));
    let pointsInsideAreaOne = 0;
    let pointsInsideAreaTwo = 0;
    let pointsInsideAreaThree = 0;
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
            pointsInsideAreaOne++;
        }
        if (y >= fx && y <= gx && y <= hx) {
            pointsInsideAreaTwo++;
        }
        if (y <= fx && y <= gx && y >= hx) {
            pointsInsideAreaThree++;
        }
    }
    let estimatedResultAreaOne = rectangleArea * pointsInsideAreaOne / n;
    let estimatedResultAreaTwo = rectangleArea * pointsInsideAreaTwo / n;
    let estimatedResultAreaThree = rectangleArea * pointsInsideAreaThree / n;
    const resAreaOne = document.createElement('p');
    const resAreaTwo = document.createElement('p');
    const resAreaThree = document.createElement('p');
    resAreaOne.textContent = `Valor estimado área 1: ${estimatedResultAreaOne}`;
    resAreaTwo.textContent = `Valor estimado área 2: ${estimatedResultAreaTwo}`;
    resAreaThree.textContent = `Valor estimado área 3: ${estimatedResultAreaThree}`;
    results.appendChild(resAreaOne);
    results.appendChild(resAreaTwo);
    results.appendChild(resAreaThree);
}

function functionThree() {
    let lower = Number(loweLimit.value);
    let upper = Number(upperLimit.value);
    let n = Number(iterations.value);
    let lowerExpresionOne = curveOne(lower);
    let upperExpresionOne = curveOne(upper);
    let rectangleArea = (Math.abs(lower) + Math.abs(upper)) * (Math.abs(lowerExpresionOne) + Math.abs(upperExpresionOne));
    let pointsInsideAreaOne = 0;
    let pointsInsideAreaTwo = 0;
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
            pointsInsideAreaOne++;
        }
        if (y <= fx && y >= gx && y >= hx) {
            pointsInsideAreaTwo++;
        }
    }
    let estimatedResultAreaOne = rectangleArea * pointsInsideAreaOne / n;
    let estimatedResultAreaTwo = rectangleArea * pointsInsideAreaTwo / n;
    const resAreaOne = document.createElement('p');
    const resAreaTwo = document.createElement('p');
    resAreaOne.textContent = `Valor estimado área 1: ${estimatedResultAreaOne}`;
    resAreaTwo.textContent = `Valor estimado área 2: ${estimatedResultAreaTwo}`;
    results.appendChild(resAreaOne);
    results.appendChild(resAreaTwo);
}

function expresionOne(x) {
    return (x * x) + (1 / (x + 1)) - 0.4;
}

function expresionTwo(x) {
    return (Math.sqrt(x) / 2) + (1 / (x + 1)) - 0.5;
}

function lineOne(x) {
    return (Math.pow(x, 4)) + (Math.pow(x, 3)) + (x * x);
}

function lineTwo(x) {
    return (Math.pow(x, 1/3)) - (x * x);
}

function lineThree(x) {
    return x / 2;
}

function curveOne(x) {
    return Math.sqrt(1 - (x * x));
}

function curveTwo(x) {
    return x - 1;
}

function curveThree(x) {
    return x + 1;
}