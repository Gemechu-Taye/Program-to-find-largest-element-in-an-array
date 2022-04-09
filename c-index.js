// Given an array of integers, our task is to write a program that efficiently finds the second lasrgest element present in the array.

// input: arr[] = { 10, 10, 10}
// outout: There is no more second largest element


function secondlargest (arr, arr_size) {
    let i;
    let largest = second = -2454635434

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
}

if (second == -2454635434) {
    console.log("There is no more second largest element ");
}
else{
    console.log("The second largest element is " + second);
    return;
}
}

let arr= [ 10, 10, 10 ];
let n = arr.length;
secondlargest(arr, n);