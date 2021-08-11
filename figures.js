console.group("Square")
    const squarePerimeter = (side) =>  side * 4;
    const squareArea = (sideSquare) => sideSquare * 2;
console.groupEnd();

console.group("Triangle")

    const trianglePerimeter = (side1, side2, base) => side1 + side2 + base;

    const triangleArea = (base, height) => (base * height) / 2;

console.groupEnd();



console.group("Circle")
    const PI = Math.PI;
    console.log("PI es: " + PI);

    // Diameter
    const circleDiameter = (radio) => radio * 2;

    // Circunferencia
    const circlePerimeter = (radio) => {
        const diameter = circleDiameter(radio);
                return Math.floor(diameter * PI);
    }

    // Area
    const circleArea = (radio) => Math.floor((radio * radio) * PI);

console.groupEnd()




// Isosceles Triangle

console.group("IsoscelesTriangle")

    function isoscelesTriangle(sideA,sideB, base) {
        if (sideA === sideB) {
            return (Math.sqrt((sideA * sideA) + (sideB * sideB) / base));
        } else {
            console.log("Is not a triangle Isosceles")
    }
}
console.groupEnd()


// Square
    //Here I have interaction whit my html document
    function calculateSquarePerimeter () {
        const input = document.getElementById("squareInput");
        const value = input.value;
        const perimeter = squarePerimeter(value);
        alert('The perimeter is ' + perimeter)
    }

    function calculateSquareArea ()  {
        const input = document.getElementById("squareInput");
        const value = input.value;
        const area = squareArea(value);
        alert('The area is ' + area)
    }

// Circle
    //Here I have interaction whit my html document
        function calculateCirclePerimeter () {
        const input = document.getElementById("circleInput")
        const value = input.value;
        const perimeter = circlePerimeter(value);
        alert('The perimeter is: ' + perimeter)
    }

    function calculateCircleArea ()  {
        const input = document.getElementById("circleInput")
        const value = input.value;
        const area = circleArea(value);
        alert('The area is: ' + area)
    }

    // function circleDiameter () {
    //     const input = document.getElementById("circleInput")
    //     const diameter = circleDiameter(value);
    //     const value = input.value;
    //     alert(diameter)
    // }


function calculateTrianglePerimeter () {
    const input = document.getElementById("triangleInput");
    const value = input.value;
    const perimeter = trianglePerimeter(value);
    alert('The perimeter is: ' + perimeter)
}

function calculateTriangleArea () {
    const input = document.getElementById("triangleInput")
    const value = input.value;
    const area = triangleArea(value);
    alert('The area is: ' + area)
}
