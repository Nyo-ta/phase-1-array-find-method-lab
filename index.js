function superbowlWin(myArray){
    let superbowl = myArray.find(finder)
    return superbowl ? superbowl.year : undefined
}
function finder(currentvalue){
    let targetrecord = currentvalue.result == "W"
    return targetrecord
}
console.log(superbowlWin(record));