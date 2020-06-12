const arr = [
    {
        date: "1/2/2020",
        prop1: 2,
        prop2: "12",
        prop3: 3,
        prop4: null,

    },
    {
        date: "2/2/2020",
        prop1: 2,
        prop2: '2',
        prop3: 2,
        prop4: null,
    },
    {
        date: "3/2/2020",
        prop1: 2,
        prop2: '2',
        prop3: 2,
        prop4: null,
    },
    {
        date: "2/2/2020",
        prop1: 2,
        prop2: '2',
        prop3: 2,
        prop4: null,
    },
    {
        date: "2/2/2020",
        prop1: 2,
        prop2: '2',
        prop3: 2,
        prop4: null,
    },
    {
        date: "2/2/2020",
        prop1: 2,
        prop2: '2',
        prop3: 2,
        prop4: null,
    },
    {
        date: "2/2/2020",
        prop1: 2,
        prop2: '2',
        prop3: 2,
        prop4: null,
    },
   ]


const obj = {};

arr.map(arrData => {
    console.log(arrData,'====')
    if(obj[arrData.date]){
        Object.keys(arrData).forEach(arr => {
            if(typeof arrData[arr] === 'number'){
                obj[arrData.date][arr] += arrData[arr]
            }
        })
    } else{

        obj[arrData.date] = arrData
    }
})

console.log(obj)