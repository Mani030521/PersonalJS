// const arr = ['Mani','Vicky','Dinesh','Naveen','David','sanjay','simba','Vicks'];
// const arr2 = [];

// const filter = (arr,execute) => {
//     for(var i=0;i<arr.length;i++){
//          execute(arr[i])
//     }
    
// }

// const cn = (arr) => {
//     filter(arr,(word) => {
//             word[0] === 'm' ? console.log(word): console.log('np')
//     })
// }

// cn(arr);

const details = {
    name: 'mani',
    dept: 'cse',
    desc: function () {
        var some = this;
        console.log(some.name);
        return (function () {
            console.log(some.name)
        })()
    }
}

details.desc();