let maxSequence = function(arr){
    let max_sum = 0;
    let curr_sum = 0;
    for (let num of arr) {
        curr_sum = Math.max(curr_sum + num, 0);
        max_sum = Math.max(max_sum, curr_sum);
    }
    console.log(max_sum);

}

maxSequence([]) // 0);
maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) // 6);
