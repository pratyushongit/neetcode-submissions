class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */ 
    groupAnagrams(strs) {
        if(strs.length <= 0) return [];
        const hm = new Map();
        strs.forEach(el => {
            let arr = Array(26).fill(0);
            for (let char of el){
                arr[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }
            const key = arr.join(',');
            if(hm.has(key)){
                hm.get(key).push(el);
            }
            else {
                hm.set(key, [el])
            }
        });
        return Array.from(hm.values());
    }
}
