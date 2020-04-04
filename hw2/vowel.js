let sentence="When I find myself in times of trouble Mother Mary comes to me Speaking words of wisdom, let it be";
let row=sentence.toLowerCase();
for(let i=0; i<row.length; i++){
    if(row[i]=='a' || row[i]=='i' || row[i]=='u' || row[i]=='e' || row[i]=='o')
        console.log(i);
}