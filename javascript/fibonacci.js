function fibonacciGenerator (n) {
    //TODO
    var output = [];
    for(var i = 0; i<n; i++){
        if(i<=1){
        output.push(i);
        }
        else{
        output.push(output[i-1]+output[i-2]);
        }
    }
    return output;
    //Return an array of fibonacci numbers.
}

    fibonacciGenerator(3);
//OPEN JAVASCRIPT Ctrl+Shift+i
//Open node js Using CMD
