var gloabl = 'as';

function sample(a){
    return function(){
        console.log(a)
    }
}

console.dir(sample(1))