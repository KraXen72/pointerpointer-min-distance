/**
 * Math.round but behaves correctly when rounding floating point numbers
 * it does this by first converting the numbers to integers, rounding them and then dividing them back to floating points.
 * @param {number} number number to round
 * @param {number} precision the decimal points precision. default it 2
 * @returns {number} the rounded number with correct decimal points
 */
function precisionRound(number, precision = 2) {
    let factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
}

//https://stackoverflow.com/questions/42755576/javascript-function-distance-between-two-points#42755717
function distanceOfTwoPoints(x1, y1, x2, y2) {
    return Math.sqrt((Math.pow(x2 - x1, 2)) + (Math.pow(y2 - y1, 2)))
};

const w = 1300
const h = 975

const image = document.querySelector("img")

let points = [...positions]
    //.slice(0, 100)
    .map((arr, i) => {
        return [
            i,
            precisionRound(w * arr[0]),
            precisionRound(h * arr[1])
        ]
    })

console.log(points)

image.addEventListener("mousemove", (event) => {
    

    const distances = []
    
    for (let i = 0; i < points.length; i++) {
        const point = points[i];
        distances.push(precisionRound(distanceOfTwoPoints(point[1], point[2], event.clientX, event.clientY)))
    }

    let smallest = distances.indexOf(Math.min(...distances))
    if (smallest === 0) smallest = 1

    image.src = `img/${smallest}.jpg`
})