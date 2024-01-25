function saveTOdatabase(data){
        return new Promise(
                (resolve,reject)=>{
                let speed = Math.floor(Math.random()*10)+1;
                if(speed>=5){
                        resolve();
                }
                else{
                        reject();
                }
        
        });
}


saveTOdatabase("data1")
.then(
        ()=>{
                console.log("Data1 saved");
            return saveTOdatabase("data2");
        }
)
.then(
        ()=>{
                console.log("Data2 saved");
                return saveTOdatabase("Data3");
        }
)
.then(
        ()=>{
                console.log("Data 3 saved");
                 return saveTOdatabase("Data4");
        }
)
.then(
        ()=>{
                console.log("Data 4 saved");
        }
)

.catch(
        ()=>{
                console.log("data rejected");
        }
);
