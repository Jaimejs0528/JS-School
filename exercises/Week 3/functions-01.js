// avoiding use global variables
const appReverse = function main() {
  /*
    This function reverse an array using their first index and last index,
    so interchange their values, then reduce the end index and the first
    index and repeat until first index is major than end index.
    @param array receive an array.
    */
  const array = ['school', 'js', 'the', 'is', 'this'];

  function reverseArray() {
    // Conditional that validate if the array is valid
    if (array === undefined || array.length === 0) {
      // eslint-disable-next-line no-console
      console.log('Invalid array');
    }
    let init = 0; // define the first index in the first position of array
    let end = (array.length - 1); // define the end index in the last position of array
    while (init < end) {
      const temp = array[init];
      array[init] = array[end];
      array[end] = temp;
      init += 1; // plus one to the first index
      end -= 1; // minus one to the last index
    }
    // eslint-disable-next-line no-console
    console.log(array); // print the array reversed
  }
  reverseArray(array);
};
appReverse();
