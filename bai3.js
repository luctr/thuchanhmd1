let arr = [1,2,3,5,8,13,21,34,55]
let getTheNumber = prompt("Nhập số để kiểm tra")

function result() {
    for ( let i=0; i<arr.length; i++){

        if ( getTheNumber == arr[i] ){

            return true;
        }

    }return false;
}

alert(result())
