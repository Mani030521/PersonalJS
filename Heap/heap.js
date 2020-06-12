function sample(){
    const step = 1;
    myCounter.value++;
}

const myCounter = { value: 0 }

console.log(myCounter.value)

sample()
sample()
sample()