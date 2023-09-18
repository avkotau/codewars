//complete two arrays in one array and sort in non-decreasing order.
// let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3 // [1,2,2,3,5,6]
let nums1 = [0], m = 0, nums2 = [1], n = 1 //[1]

function merge (nums1, m, nums2, n) {
    for (let i = m, j = 0; j < n; i++, j++) {
        nums1[i] = nums2[j];
    }
    nums1.sort((a, b) => a - b);
}

console.log(merge(nums1, m, nums2, n))
