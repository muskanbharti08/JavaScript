
function SaveToDataBase(data,success,failure){
        let speed  = Math.floor( Math.random()*10)+1;
       // console.log(x);

       if(speed>=5){
        success();
       }
       else{
        failure();
       }
        
}

SaveToDataBase('Ramayan', ()=>{
        console.log("Data1 Saved");
        SaveToDataBase('Data2',
        ()=>{console.log("Data2 saved")


        SaveToDataBase("data3",
        ()=>{console.log("Data3 saved")},
        ()=>{console.log("Data3 discarded")}
        )


},
        ()=>{console.log("Data2 discard")}        
        );
},
()=>{
        console.log("Data1 Discarded");
}

);