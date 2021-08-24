function calculateArithmeticAverage (list) {
//     let sumList = 0;
//     for (let i = 0; i < list.length; i++) {
//     sumList += list[i];
// }
    const sumList = list.reduce(
        function (accumulatedValue = 0, newElement) {
            return accumulatedValue + newElement;
        }
    );
    const listAverage = sumList / list.length;
                return listAverage;
}