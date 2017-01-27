'use strict'

let promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('resolved after 1000ms')
    }, 1000);
});

promise.then(function(result) {
    console.log(result);
})
