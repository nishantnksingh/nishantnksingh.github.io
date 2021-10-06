var arr=new Array()
arr=[2,5,6,2,4,12,1,2];
arr=arr.sort(function(a,b){return a-b;});
//console.log(arr);
var arr2=new Array();

var k=0;
//console.log(arr.length);
for(var i=0;i<arr.length;i++){
    if((arr2.indexOf(arr[i])==-1)){
        arr2[k]=arr[i];
        k++;
    }
}
console.log(arr2);