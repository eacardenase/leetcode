/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const obj = {};

    for (let i = 0; i < nums.length; i++) {
        let reminder = target - nums[i];

        if (obj[reminder] !== undefined) {
            return [obj[reminder], i];
        }

        obj[nums[i]] = i;
    }

    return obj;
};

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([2, 5, 5, 11], 10)); // [1, 2]
console.log(twoSum([3, 2, 3], 6)); // [0, 2]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSum([0, 4, 3, 0], 0)); // [0, 3]
