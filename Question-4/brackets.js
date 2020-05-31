let checkBrackets = function (item) {
    let bracketsList = [];
    let brackets = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    for (let i = 0; i < item.length; i++) {

        if (item[i] === '(' || item[i] === '{' || item[i] === '[') {
            bracketsList.push(item[i]);
        }
        else {
            let last = bracketsList.pop();

            if (item[i] !== brackets[last]) { return false };
        }
    }
    if (bracketsList.length !== 0) { return false };

    return true;
}


//Question Examples
console.log(checkBrackets("{[]}")); 
console.log(checkBrackets("{(])}")); 
console.log(checkBrackets("{([)]}")); 

// Different Examples

console.log(checkBrackets("(){}")); 
console.log(checkBrackets("({(()))}}"));  
console.log(checkBrackets("}}}}{(()))}}")); 




