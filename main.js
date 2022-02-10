const sum = function (num1, num2) { // takes parameter and return values 
const result = num1 + num2 
return result 

}

console.log(sum(5 , 6));

const sayHello = function () { //dosn't take parameters and doesn't return value 
console.log('hello world!');
}

const greet = function (name) { // takes a parameter but doesn't return a value 
console.log('hello '+name); 
}


console.log(greet('khaled'))

const specialChar = function (str, specialChar) {
    let counter = 0 
    for (let i = 0; str[i]; i++) {
        for (let k = 0; specialChar[k]; k++) {
            if (str[i] == specialChar[k]){
                counter++ 
            }
        }
    }
    return counter 
}
console.log(specialChar('hjfhfghjbgf@vchrdhghbjbh+@#$%','+@'));

const factorial = function (num) {
    let result = 1; 
    for (let i = num; i > 1; i--) {
        result = result * i 
        
    }
    return result;
    
    }
    console.log(factorial(8));
    
    const str= 'apple #horse# #dog# cat'
    const findkey = function (str) {
        let keys=''
        for (let i = 0; str[c]; i++) {
            const element = [i]; 
            
        }  
        
    }





