let testScore = [1,2,3,4,5,6,7,8,9]
function findMax(max) {
    max = [0];
    let i ;
    for (i = 0;i< testScore.length ;i++){
        if ( testScore[i] > max ){
            max =testScore[i];
        }
    }return max;
}
document.write(findMax())