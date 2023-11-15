var majorityElement = function (nums) {
    // Step 1: Sort the array in ascending order
    nums.sort((a, b) => a - b);
  
    // Step 2: Get the length of the sorted array
    var l = nums.length;
  
    // Step 3: Check if the length of the array is even or odd
    if (l % 2 === 0) {
      // Step 4a: If the length is even, return the element at the middle index
      return nums[l / 2];
    } else {
      // Step 4b: If the length is odd, return the element at the middle index
      return nums[(l - 1) / 2];
    }
  };
  