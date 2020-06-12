 function repeat(x){
     if(x < 0){
         return
     }
     console.log('start', x);
     repeat(x -1 )
     console.log('end',x)
 }

 repeat(3)