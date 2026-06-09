class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        if(nums.length === k) return nums;
        let freq = {};
        let bucket = Array.from({ length: nums.length + 1 }, () => []);
        const res = [];
        nums.forEach(el => freq[el] ? freq[el] += 1 : freq[el] = 1);
        for(let el in freq){
            bucket[freq[el]].push(Number(el));
        }
        for (let i = bucket.length-1 ; i >= 0; i--){
            for(let val of bucket[i]){
                res.push(val);
                if(res.length == k) return res;
            }
            
        }
    }
}
