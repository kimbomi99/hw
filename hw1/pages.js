
let studentCount=31;
let pageSize=10;
let page=(Math.floor(studentCount/pageSize));
if (studentCount%pageSize!=0)
    page=page+1;
console.log(page);