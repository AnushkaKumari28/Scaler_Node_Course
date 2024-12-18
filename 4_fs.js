// files
const fs=require('fs')

// // reading a file : if the filename that is passed doesn't exists a new file will  be created 
// // with its name and the data will be written on that file.
// let fileContent=fs.readFileSync('f1.txt')
// console.log('content of f1 is: '+ fileContent)

// // writing a file
// fs.writeFileSync('f2.txt' , 'This is file2')
// console.log('File has been written')   // overriden a file

// //append a data: appendFileSync method adds new data to a previously written file.
// fs.appendFileSync('f3.txt', 'This is file 3')
// console.log('Data has been appended')

// // deleting a file
// fs.unlinkSync('f2.txt')
// console.log('File has been deleted')


// directories
// create a directory
// fs.mkdirSync('myDirectory')

// check the content inside a directory
let folderPath='C:\\Users\\anush\\OneDrive\\Desktop\\node\\myDirectory'
let folderContent=fs.readdirSync(folderPath)
console.log('Folder Content is : ' ,  folderContent)

// if the particular directory exists or not
let doesExist=fs.existsSync('myDirectory')
console.log(doesExist)

//remove directory
fs.rmdirSync('myDirectory')
console.log('Directory has been deleted')


