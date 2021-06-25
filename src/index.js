const derivativeArray = [3, 4, 3, 3, 2, 1]; // --> [6, 5, 1, 3, 2, 4]
const permutationArray = [];

let currentValue = 1;

derivativeArray.forEach((derivative) => {
  let hops = derivative;
  for (let i = 0; i < hops; i++) {
    if (permutationArray[i]) {
      hops += 1;
    }
  }
  permutationArray[hops - 1] = currentValue;
  currentValue += 1;
});

// eslint-disable-next-line no-console
console.log(permutationArray);
