function getStringNumber(arg1){
    let n = arg1;
    var stringNumbers = {}
    if (n > 999){
        alert(stringNumbers);
}   else if (String(n).length==3){
        stringNumbers= {
        'единицы': n % 10,
        'десятки': Math.floor(n / 10 % 10),
        'сотни': Math.floor(n /  100)};
            alert(JSON.stringify(stringNumbers));
}   else if (String(n).length==2){
        stringNumbers= {
        'единицы':  n % 10,
        'десятки':  Math.floor(n / 10 % 10)};
         alert(JSON.stringify(stringNumbers));
}   else {
    stringNumbers= {
        'единицы': n % 10};
         alert(JSON.stringify(stringNumbers));
}
}

getStringNumber(+prompt("Введите число"));


