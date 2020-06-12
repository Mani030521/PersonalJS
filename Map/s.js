const obj = {
    name: 'Manikandan',
    stream: 'CSE',
    details: {
        job: 'Mindtree',
        Project: 'P&G'
    }
}


function objectFinding(obj, propName){
    let result;
    for(let i in obj){
        console.log(i)
        console.log(obj.hasOwnProperty())
    }
}

objectFinding(obj)