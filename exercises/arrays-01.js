const appSort = function () {
    const myArray = [2, 32, 53, 1, 33, 12, 50]; // array to sort
    /*
    The next line sort the variable myArray using the rule current - next, where
    if the result is negative means that current is minor than next, if the result
    is positive means that next is minor than current and if the result is 0 means
    that both numbers are equals.
    */
    const sorted = myArray.sort((current, next) => current - next);
    console.log(sorted); // Print in console the array already sorted
}
appSort();
