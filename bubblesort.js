function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let lowerNum = arr[j];
        arr[j] = arr[i];
        arr[i] = lowerNum;
      }
    }
  }
  return arr;
}
