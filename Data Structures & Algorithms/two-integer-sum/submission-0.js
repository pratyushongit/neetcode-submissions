class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let hm = {};
        for (let index = 0; index < nums.length; index++){
            let val = nums[index];
            let diff = target - val;
            if (hm.hasOwnProperty(diff)){
                return [index, hm[diff]];
            } else {
                hm[val] = index;
            }
        }
    }
}
