var missingNumber = function (nums) {
    // Step 1: Get the length of the array
    var length = nums.length;
  
    // Step 2: Calculate the sum of natural numbers up to 'length'
    let sum = ((length + 1) * length) / 2;
  
    // Step 3: Subtract each element in the array from the calculated sum
    for (let i = 0; i < length; i++) {
      sum = sum - nums[i];
    }
  
    // Step 4: The remaining sum is the missing number
    return sum;
  };
  