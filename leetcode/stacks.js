
//20. Valid Parentheses

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    
    let stack = []
    
    
    for(let i = 0; i < s.length; i++){
        
        if(stack.length == 0){
           stack.push(s[i])
        }else{
            
            let currentBracket = s[i]
            
            //Checks if its opening bracket
            if(currentBracket == '(' || currentBracket == '[' || currentBracket == '{' ){
                //Push it to the stack
                stack.push(currentBracket)
            }else{
                //Closing bracket
                let previousBracket = stack.pop()
                
                //Checks if its the previous bracket its an opening 
                if(previousBracket == '(' || previousBracket == '[' || previousBracket == '{' ){
                    //Compares if the closing bracket not match
                    if(!matchClosingBrackrt(previousBracket,currentBracket)){
                        //If not, an invalid parantheses was typed
                        return false
                    }
                    
                }else{
                    //There can be two closing brackets int the stack
                    return false;
                }
            }
        }
    }
    
    
    return stack.length == 0 ? true: false;
}
    

const matchClosingBrackrt = (previous,closing) =>{
    
    let valid = true;
    switch(previous){
        case '(':
            if(closing!= ')') {
                valid = false
            }
            break;
        case '[':
            if(closing != ']'){
                valid = false
            }
            break;
        case '{':
            if(closing != '}'){
                valid = false
            }
            break;
    }            
    return valid;
}

////////
