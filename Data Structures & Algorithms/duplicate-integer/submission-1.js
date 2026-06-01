class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     * O(n)
     */
    hasDuplicate(nums) {
       const mySet = new Set();
       for(let val of nums){
        if(mySet.has(val)){
            return true;
        }
        mySet.add(val);
       }
       return false;
    }
}
