//normal
var num = 3;
if(num % 3 === 0 && num % 5 === 0) {
    console.log("Boy Girl")
}else if(num % 3 === 0) {
    console.log("Boy")
}else if(num % 5 === 0) {
    console.log("Girl")
}else{
    console.log(num)
}



//in function
function modulo(num) {
    if(num % 3 === 0 && num % 5 === 0 ) {
        console.log("Boy Girl")
    } else if(num % 3 === 0 ){
        console.log("Boy")
    } else if(num % 5 === 0 ){
        console.log("Girl")
    } else {
        console.log(num)
    }
}
modulo(21)