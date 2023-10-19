////leetcode
//169. Majority Element
//Given an array nums of size n, return the majority element.
//
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
//
//
// Example 1:
//
// Input: nums = [3,2,3]
// Output: 3
// Example 2:
//
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
/**
 * @param {number[]} nums
 * @return {number}
 */
let majorityElement = function (nums) {
    const frequencyMap = {}

    for (let i = 0; i < nums.length; i++) {
        if (Object.hasOwn(frequencyMap, nums[i])) {
            frequencyMap[nums[i]] += 1
        } else {
            frequencyMap[nums[i]] = 1
        }
    }

    const maxValue = Math.max(...Object.values(frequencyMap))
    const key = Object.keys(frequencyMap).find(key => frequencyMap[key] === maxValue)
    return Number(key)
};

console.log(majorityElement([3, 2, 3]))//3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))//2

