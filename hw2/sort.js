let number=[];
for(let i=0; i<100; i++){
    number[i]=Math.floor(Math.random()*100+1);
}
number.sort();
console.log(number);