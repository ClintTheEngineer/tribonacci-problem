const tribonacci = (signature, n) => {
  let result = [...signature];

  if(n === 0) return [];
  
  Array.prototype.arraySum = function() {
    return this.slice(-3).reduce(function(x, y) {
      return x + y;
    }, 0);
  };
  
  if(n < 3) return signature.slice(-n);
  
  while (result.length < n) {
    result.push(result.arraySum())
  }
  return result;
}