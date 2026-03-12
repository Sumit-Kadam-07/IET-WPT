var arr = [12, 5, 8, 21, 14, 7, 30, 9, 2, 17];

console.log("Original Array:");
console.log(arr);

console.log("Even Numbers:");
for(var i = 0; i < arr.length; i++)
{
    if(arr[i] % 2 == 0)
    {
        console.log(arr[i]);
    }
}

console.log("Odd Numbers:");
for(var i = 0; i < arr.length; i++)
{
    if(arr[i] % 2 != 0)
    {
        console.log(arr[i]);
    }
}

arr.sort(function(a, b){ return a - b; });

console.log("Sorted Array:");
console.log(arr);