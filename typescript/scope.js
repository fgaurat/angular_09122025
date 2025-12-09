

function f(){
    
    if(true){
        var a = 2 // limite à la fonction avec hoisting
        let b = 3
        console.log("f => b",b)
        
    }
    console.log("f => b",b)
    console.log("f",a)
    a =3
    console.log("f",a)

}

// console.log(a)
f()
// console.log(a)