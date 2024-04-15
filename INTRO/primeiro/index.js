const fs = require('node:fs');

fs.readFileSync('teste.txt', 'utf-8',(err, data)=>{
  if(err){
    console.log(err);
  }
  console.log(data);
});