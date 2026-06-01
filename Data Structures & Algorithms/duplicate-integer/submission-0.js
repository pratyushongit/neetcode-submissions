class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     * O(n)
     */
    hasDuplicate(nums) {
        let freqObj = {};
        for (let val of nums){
            freqObj[val] = (freqObj[val] ?? 0)  + 1; 
        }
        return Object.values(freqObj).some(el => el > 1);
    }
}
