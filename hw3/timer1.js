function printTime(){
    console.log(new Date());

    count+=1;
    if(count==10)
        clearInterval(id);
}
let id = setInterval(printTime, 1000);
let count=0;