//callback
//passing function as parameter to ensure that program behaves in asynchronous way ;

const message = function () {
    console.log("This message is shown after 3 seconds");
}

let callFinished = false;

firstCall = (friend, callback) => {
    console.log(`I am busy rightnow I will call you later.I am talking to ${friend}`)
    setTimeout(() => {
        callFinished = true;
        console.log("call finished");
        callback();


    }, 3000)


}

secondCall = () => {
    console.log("see I called you back ")
}

firstCall('sunita', secondCall);

