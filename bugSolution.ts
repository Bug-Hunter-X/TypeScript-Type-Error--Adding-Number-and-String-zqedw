function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number | string, b: number | string): number {
  if (typeof a === 'string' || typeof b === 'string') {
    return parseFloat(String(a)) + parseFloat(String(b));
  }
  return a + b;
}

let result = addSafe(1, "2");
console.log(result); //Output 3

let result2 = addSafe(1,2)
console.log(result2) //Output 3