if("serviceWorker" in navigator){
    
navigator.serviceWorker.register("mypwasw.js").then(()=>{
    console.log("servis worker instaled")
});

}
