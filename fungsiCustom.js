// TODO: import module bila dibutuhkan di sini

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = function(){

  const fs = require("fs");
  fs.readFile(file1,"utf8",(err,data1)=>{

    if(err){
        console.log("data 1 erro "+ err)
    }
    fs.readFile("./data2.json","utf8",(err,data2)=>{
      if(err){
          console.log("data 2 erro "+ err)
      } 
      fs.readFile("./data3.json","utf8",(err,data3)=>{

        if(err){
            console.log("data 1 erro "+ err)
        }
      
    let dariDatajson = JSON.parse(data1);
    let darifilejson = dariDatajson.message;
    const arrFilejson1 = darifilejson.split(" ");
    //console.log(arrFilejson1[1]);
    
    let dariDatajson2 = JSON.parse(data2);
    let darifilejson2 = dariDatajson2[0].message;
    const arrfilejson2= darifilejson2.split(" ")
    //console.log(arrfilejson2[1]);
    

    let dariDatajson3 = JSON.parse(data3);
    let darifilejson3 = dariDatajson3[0].data.message;
    const arrFilejson3 =darifilejson3.split(" ");
    //console.log(arrFilejson3[1]);
    let gabungan= arrFilejson1[1]+','+arrfilejson2[1]+','+arrFilejson3[1];
    let result = gabungan.split(',');
    console.log(result);
   });
  });
});
};























// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
