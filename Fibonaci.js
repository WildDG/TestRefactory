var x = [15,1,3]; 
fibonaci(x);

function fibonaci(params) {
let sum = 0;
for (let i = 0; i < params.length; i++) {
sum += params[i];
}
// console.log(sum);
let s=0;
let f=1;
let final=0;
let score=0;
for (final; final<=sum;){
    final=s+f;
    s=f;
    f=final;
    // console.log(final)
}
if(final < sum){
    score = sum - final;
}score = final - sum
console.log(score)
}