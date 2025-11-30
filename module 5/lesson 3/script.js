var points = [77,4,8,93,87,58,2,30,82,12,34,85];
document.getElementById("result1").innerHTML = points;
function ascendingOrder() {
    points.sort(function(a,b){return a-b});
    document.getElementById("result1").innerHTML = points;
}
var points = [77, 4, 8, 93, 87, 58, 2, 30, 82, 12, 34, 85];
document.getElementById("result2").innerHTML = points;
function descendingOrder() {
    points.sort(function (a, b) { return b-a });
    document.getElementById("result2").innerHTML = points;
}
