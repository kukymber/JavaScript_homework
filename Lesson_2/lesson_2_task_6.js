function mathOperation (arg1, arg2, operation){
    switch (operation){
        case '+': plus(arg1, arg2); break;
        case '-': minus(arg1, arg2); break;
        case '*': multiply(arg1, arg2); break;
        case '/': divide(arg1, arg2); break;
    }
}
mathOperation(+prompt('input first number'), +prompt('input second number'), prompt('input operand'));

//              PLUS
function plus(arg1, arg2){
    alert(arg1 + arg2);
}
//              MINUS
function minus(arg1, arg2){
    alert(arg1 - arg2);
}
//             MULTIPLY
function multiply(arg1, arg2){
    alert(arg1 * arg2);
}
//               DIVIDE
function divide(arg1, arg2){
    alert(arg1 / arg2);
}

// function mathOperation(arg1, arg2, operation){
//     switch (operation){
//         case '+': alert(arg1 + arg2); break;
//         case '-': alert(arg1 - arg2); break;
//         case '*': alert(arg1 * arg2); break;
//         case '/': alert(arg1 / arg2); break;
//     }
// }
// mathOperation(+prompt('input first number'), +prompt('input second number'), prompt('input operand'));