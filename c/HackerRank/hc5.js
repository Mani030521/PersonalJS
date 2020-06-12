const arr = [73,67,38,33];
const resultArray = [];

for(let i=0;i<arr.length;i++){
    const tempRemainder = arr[i]%5;
    const temp = arr[i];
    if(arr[i] < 38){
        resultArray.push(arr[i])
    }else{
        if(tempRemainder === 0){
            resultArray.push(arr[i])
        }else{
            arr[i] = (5-tempRemainder);
            if(arr[i] < 3){
                resultArray.push(temp + arr[i])
            }else{
                resultArray.push(temp)
            }
        }
    }
}

console.log(resultArray)