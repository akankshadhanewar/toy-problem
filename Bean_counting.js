function countBs(str){
    var c = 0
    for(i = 0; i<str.length; i++){
        if(str[i] === "B"){
            c++
        }
    }
    return c
}

console.log(countBs("ABBACCADDABB"))

function countChars(str, ch){
    var c = 0;
    for(i = 0; i<str.length; i++){
        if(str[i] === ch){
            c++
        }
    }
    return c
}

console.log(countChars("ABBACCADDABB", "C"))