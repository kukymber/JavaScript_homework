var a = 4, b = -90;
if (a >= 0 && b >= 0 ) {
    alert(a-b);
} else if  (a < 0 && b < 0){
    alert(a*b);
} else if ((a<0 && b >=0) || (a >=0 && b < 0)){
    alert(a + b);
}