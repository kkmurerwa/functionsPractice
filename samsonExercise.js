// Question 1
function num1(){
    return 23
}

function num2(){
    return 47
}

function num3(){
    return 15
}

// Question 2
function add(var1, var2){
    return var1 + var2
}


// Question 3
function add2(fn1, fn2){
    return (add(fn1(), fn2()))
}

console.log("Add Results: " +add(num1(), num2()))


// Question 4
function ambiguous(value){
    return function(){
        return value
    }
}


// Question 5
let sum = 0
function addn(arr){
    // Method 1
    for(let i = 0; i < arr.length; i++){
        sum = add2(ambiguous(sum), arr[i])
    }
    return(sum)

    //Method 2
    if (arr.length === 0){
        return 0
    } else {
        sum = add2(ambiguous(sum), arr[0])
        addn(arr.slice(1))
        return sum
    }

    // Method 3
    return arr.reduce((a, b) => (typeof a === 'function') ? add2(a, b) : add2(ambiguous(a), b))
}

console.log("Addn Results: " +addn([num1, num2, num3]));