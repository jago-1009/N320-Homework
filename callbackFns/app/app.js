
const cb=(h,m,a) => {
    let mLetter = a[h]
    let ml2= m[h]
    console.log(`Middle letter: ${mLetter} ${ml2}`)
}
const midPos = (msg, callback) => {
    let sl=msg.length
    let half = Math.floor(sl/2)
    let sArray = msg.split('')
    callback(half,msg,sArray)
}




midPos("Gabriel", cb)

