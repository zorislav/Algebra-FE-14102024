if("serviceWorker" in navigator){

    navigator.serviceWorker.register("mypwasw.js").then(()=>{
        console.log("Serivice worker registered!");
    });
}

