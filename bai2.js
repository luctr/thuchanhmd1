let arr = [1,3,4,5,7,0];
let emptyArray = [];
let x = prompt("nhập số");
function tryRemoveFromArray(x) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == x) {
            continue;
        } else {
            emptyArray.push(arr[i]);
        }
    }return emptyArray

}
tryRemoveFromArray(x)
document.write(emptyArray)