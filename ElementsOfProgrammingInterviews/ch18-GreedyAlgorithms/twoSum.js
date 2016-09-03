function twoSum(A, sum) {
    var i = 0, j = A.length-1;
    while(i < j) {
        if(A[j] + A[i] === sum) {
            return true;
        } else if(A[j] + A[i] < sum) {
            i++;
        } else {
            j--;
        }
    } 

    return false;
}