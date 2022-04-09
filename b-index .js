// Given an array of integers, our task is to write a program that efficiently finds the second lasrgest element present in the array.

// input: arr[] = { 10, 5, 10}
// outout: The largest elemt of the array is 10 and the second largest element is 5.


function secondlargest (arr, arr_size) {
    let i;
    let largest = second = -2454635434
    let max = arr[0];

    if (arr_size < 2) {
        console.log(" Incorrect Input ");
        return;
    }
    for (i = 0; i < arr_size; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    for (i = 0; i<arr_size; i++) {
        if (arr[i]>second && arr[i]<largest) {
            second = arr[i];
        }
        for (i = 1; i < arr.length; i++) {
            if (arr[i] > max)
                max = arr[i];
        }
         
      return max;
}

if (second == -2454635434) {
    console.log("There is no more second largest element ");
}
else if{
    console.log("The second largest element is " + second);
    return;
}
    else {
        console.log("Largest in given array is " + largest(arr));
    }
}

let arr= [ 10, 5, 10 ];
let n = arr.length;
secondlargest(arr, n);