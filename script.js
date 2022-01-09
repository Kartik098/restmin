
function min(...nums){
    var nums_ref = nums
    var x_ref = nums.length;
    minimun = nums_ref[x_ref - 1]
    while(x_ref--){
        if(nums_ref[x_ref] < minimun){
            minimun = nums_ref[x_ref]
        }
    }
    return minimun;
}
document.querySelector("div").innerText = min(-7,1,2,3,4,5,5);