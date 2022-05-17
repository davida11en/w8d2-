Array.prototype.uniq = function() {
    let res = [];
    for(let i = 0; i < this.length; i++){
        if (!res.includes(this[i])) {
            res.push(this[i]);
        }
    }
    return res; 
};

// console.log([1,1,2,2,3,3,4,4].uniq());


Array.prototype.twoSum = function() {
    let res = []
    for (let i = 0; i < this.length; i++) {
        for (let j = i; j < this.length; j ++) {
            if (this[i] + this[j] === 0) {
                res.push([this[i], this[j]])
            }   
        }
    }
    return res;
}

console.log([1,2,3,-2,-1].twoSum());