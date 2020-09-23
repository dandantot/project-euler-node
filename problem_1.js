var start=1;
var end=999;
var x;
var sum=0;

for( x=start;x<=end;x++){
    if(x%3==0 || x%5==0)
    sum+=x;
}

console.log(sum); 