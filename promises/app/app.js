let basicPromise = new Promise(function(resolve,rejected) {
    let x = Math.random();
    let y= Math.random();
    if(x>0.98) {
        resolve(x)
        resolve(y)
    } else {
        rejected(x)
        resolve(y)
    }
})

basicPromise.then(function(x,y) {
    document.write("Basic Promise Resolved ", x, " y: ", y)
}).catch(function(x,y) {
    document.write("Basic Promise is rejected ", x, " y: ", y)
})