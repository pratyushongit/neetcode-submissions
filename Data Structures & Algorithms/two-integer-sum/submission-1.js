class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let hm = new Map();
        for (let i = 0; i < nums.length; i++) {
            let diff = target - nums[i];
            if (hm.has(diff)) {
                return [hm.get(diff), i];
            }
            hm.set(nums[i], i);
        }
    }
}
