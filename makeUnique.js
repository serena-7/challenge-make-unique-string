// Write your solution below:
function makeUnique(str){
    return[...new Set(str)].join('');
}

console.log(makeUnique('helloworld'));