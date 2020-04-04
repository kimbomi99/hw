let number=[];
for(let i=0; i<100; i++){
    number[i]=Math.floor(Math.random()*100+1);
}

for(let i=0; i<100; i++){
    if (number[i]%2==0){
        number.splice(i, 1);
        i-=1;
    }
}
console.log(number);