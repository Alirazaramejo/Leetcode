var containsNearbyDuplicate = function(nums, k) {
    // Loop through the array with index i
    for (let i = 0; i <= nums.length - 1; i++) {
        // Initialize variable j to the last index of the array
        let j = nums.length - 1;

        // Inner loop while i is less than j
        while (i < j) {
            // Check if nums[i] is equal to nums[j] and the absolute difference between i and j is less than or equal to k
            if (nums[i] == nums[j] && Math.abs(i - j) <= k) {
                // If true, return true
                return true;
            }

            // Decrement j to move towards the beginning of the array
            j--;
        }
    }

    // If no such indices are found, return false
    return false;
};
