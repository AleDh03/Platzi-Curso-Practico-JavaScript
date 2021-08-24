function calculateArithmeticAverage (list) {
    const sumList = list.reduce(
        function (accumulatedValue = 0, newElement) {
            return accumulatedValue + newElement;
        }
    );
    const listAverage = sumList / list.length;
                return listAverage;
}

const list1 = [
    100,
    200,
    500,
    4000000,
];

const middleOfList = parseInt(list1.length / 2);

function isPar (num) {
    if (num % 2 === 0){
        return true;
    } else {
        return false;
    }
}

    let median;

    if (isPar(list1.length)) {
        const element1 = list1[list1 - 1];
        const element2 = list1[middleOfList];
        const averageElement1Y2 = calculateArithmeticAverage([
            element1,
            element2,
        ]);

    median = averageElement1Y2;
        } else {
            median = list1[middleOfList]
    }