let doble = (num) => {return num*2};
let triple = (num) => {return num*3};


function aplicarCallback(num, callBack){
    return callBack(num);
}

console.log(aplicarCallback(2, doble)); // 4
console.log(aplicarCallback(4, triple)); // 12