describe('Bubble Sort', function() {
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });

  it('handles an array with one item', function() {
    expect(bubbleSort([3])).toEqual([3]);
  });

  it('sorts an array with two items', function() {
    expect(bubbleSort([5, 2])).toEqual([2, 5]);
  });

  it('sorts an array with multiple items', function() {
    expect(bubbleSort([5, 2, 8, 10, 1, 3])).toEqual([1, 2, 3, 5, 8, 10]);
  });

});
