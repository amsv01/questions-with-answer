
/*
  Promise waterfall.
  Runs an array of promises in series, each passing
  their results to the next promise in the array.
*/

const input = [
  input => new Promise(resolve => resolve(input + 1)),
  prev => new Promise(resolve => resolve(prev + 2)),
  prev => new Promise(resolve => resolve(prev * 3)),
  prev => new Promise(resolve => resolve(prev + ' hello')),
];


const waterfall = (promises, value) => {
  // write the function here :)
  return Promise.resolve(promises.reduce((res, func) => {
    return res.then(func);
  }, Promise.resolve(value)));
};


waterfall(input, 0).then(result => console.log(result));
