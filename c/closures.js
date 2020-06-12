var name = 'Mani'

function a() {
    return function(){
        console.log(name)
    }
}

const b = a();

 b();