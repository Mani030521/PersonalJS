function sample(ar){
    return Promise.resolve(2 + ar);
}

const s1 = () => {
    sample(2).then((data) => {
        return sample(data+ 3)
    }).then((data) => {
        return sample(data + 3)
    }).then((data) => {
        return sample( data + 4)
    }).then(data => {
        console.log(data)
    }) 
}

// alternative to s1 using await

const s2 = async () => {
    let first = await sample(2);
    let second = await sample(first + 3);
    let third = await sample(second + 3);
    let fourth = await sample(third + 4);
    console.log(fourth)
}
s1();
s2();