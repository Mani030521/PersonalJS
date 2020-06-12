import { mani } from './iterator.js' 

const handler = {
    get: function(target, name){
        return name in target ? target[name] : 42
    }
}

Function.prototype.apply.call

console.log(mani,'coming')