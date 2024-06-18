function outerfunction(){
    let count=0;
    return function(){
        count=count+1;
        return count
    }
}
const counter1=outerfunction();
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());

const counter2=outerfunction();
console.log(counter2());
console.log(counter1());
console.log(counter2())