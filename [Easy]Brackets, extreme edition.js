class Parentheses {
    constructor(x) {
        this.value = x;
    }
    
    check() {
        console.error(this.value);
        
        let arr = this.value.split("");
        let stack = [];
        
        for (let i = 0; i < arr.length; i++) {
            switch (arr[i]) {
                case "{":
                case "(":
                case "[":
                    stack.push(arr[i]);
                    break;
                    
                case ")":
                    if (stack[stack.length - 1] == "(") {
                        stack.pop();
                    } else {
                        return false;
                    }
                    break;
                    
                case "}":
                    if (stack[stack.length - 1] == "{") {
                        stack.pop();
                    } else {
                        return false;
                    }
                    break;
                    
                case "]":
                    if (stack[stack.length - 1] == "[") {
                        stack.pop();
                    } else {
                        return false;
                    }
                    break;
            }
        }
            
        if (stack.length > 0) {
            return false;
        }
        
        return true;
    }
}

let expression = new Parentheses(readline());

console.log(expression.check());
