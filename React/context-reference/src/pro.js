const a = () => {
    return new Promise(res => setTimeout(() => {
        res()
    }, 1000))
}


const b = () => {
    return new Promise(res => setTimeout(() => {
        res()
    },1000))
}

const c = () => {
    return new Promise((res,rej) => setTimeout(() => {
        rej('asdasasd')
    },1000))
}


Promise.all([a(),b(),c()]).then(data => {
    console.log(data,'=====')
}).catch(data => {
    console.log(data,'======')
})