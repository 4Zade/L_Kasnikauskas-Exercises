function getFunctionName() {
    return arguments.callee.name;
  }
  
const result = getFunctionName()
console.log(getFunctionName())