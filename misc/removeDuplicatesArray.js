// Two pointers
// i is slow, j is fast 
function removeDuplicates(nums) {
    // nums is sorted
    var i = 0;
    for(var j = 1; j < nums.length; j++) {
        if(nums[i] !== nums[j]) {
            nums[++i] = nums[j];
        }
    }

    return i+1;
}