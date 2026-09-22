function handleEven() {
    console.log("number is even");
}
function handleOdd() {
    console.log("number is odd");
}

function handleNum (number, callbackEven, callbackOdd) {
    if (number % 2 === 0) {
        callbackEven()
    }
    else {
        callbackOdd()
    }
}

handleNum(2, handleEven, handleOdd)