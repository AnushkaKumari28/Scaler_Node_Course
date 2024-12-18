console.log("KG ");

const fs=require('fs');
fs.writeFile('output.text', 'writing file', (err)=>{
    if(err){
        console.log("error occured")
    }else{
        console.log("written successfully")
    }
})
