// primitive
// 7 types: String, Number, Boolean, null, undefined, symbol, BigInt
const Id=Symbol("123");
const anotherId=Symbol("123");

console.log(Id===anotherId);

const bigNumber = 344353535353677n
console.log(bigNumber);

// reference type (non-primitive)
// array, objects, functions