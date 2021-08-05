// Square Code
console.group("Square")

    const squarePerimeter = (side) =>  side * 4;
        // console.log('The perimeter is: ' + squarePerimeter(4)  + 'cm');
    const squareArea = (sideSquare) => sideSquare * 2;
        // console.log('The area is: ' + squareArea(3)  + ' cm');

console.groupEnd();


// Triangle Code
console.group("Triangle")
    // const triangleSide1 = 6;
    // const triangleSide2 = 6;
    // const triangleBase = 4;
    // console.log('The sides Triangle measures: '
    // + triangleSide1
    // + 'cm, '
    // + triangleSide2
    // + 'cm, '
    // +  triangleBase
    // + 'cm'
    // )
    // const triangleHeight = 5.5;
    //     console.log('The height of triangle is: ' +  triangleHeight + ' cm').
// const trianglePerimeter =  triangleSide1 + triangleSide2 + triangleBase;
    const trianglePerimeter = (side1, side2, base)=> side1 + side2 + base;
        // console.log('The triangle perimeter  is: ' + trianglePerimeter(6, 5, 12) + 'cm')
// const triangleArea = (triangleBase * triangleHeight) / 2;
    const triangleArea = (base, height) => (base * height) / 2;

console.groupEnd();



// Isosceles Triangle

console.group("IsoscelesTriangle")

function triangleHeight (sideA, sideB, base) {
    
}

function isoscelesTriangle(sideA,sideB, base) {
    if (sideA === sideB) {
        return (Math.sqrt((sideA * sideA) + (sideB * sideB) / base));
    } else {
        console.log("Is not a triangle Isosceles")
    }

}




console.groupEnd()


    //Circle
console.group("Circle")
//Pi
    const PI = Math.PI;
        console.log('Pi is ' + PI + ' cm')

//Circumference
        const circlePerimeter = (radio) => {
            const diameter = circleDiameter(radio);
                return diameter * PI;
        }

//Area
        const circleArea = (radio) => (radio * radio) * PI;

console.groupEnd()


    //Here I have interaction whit my html document

    function calculateSquarePerimeter () {
        const input = document.getElementById("squareInput")
        const value = input.value;
        const perimeter = squarePerimeter(value);
        alert(perimeter)
    }

    function calculateSquareArea ()  {
        const input = document.getElementById("squareInput")
        const value = input.value;
        const area = squareArea(value);
        alert(area)
    }

