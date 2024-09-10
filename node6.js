function delay(ms) {
    return new Promise(resolve => 
setTimeout(resolve, ms));
} 
 delay(2000) 
 .then(() => { 
     console.log("سلام");
     return delay(1000);
     }) 
     .then(() => {
         console.log("خداحافظ");
         return delay(3000); 
        }) 
        .then(() => { 
            console.log("پایان"); 
        });
