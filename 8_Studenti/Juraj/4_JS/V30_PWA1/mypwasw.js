self.addEventListener("install", (event)=>{
    console.log("service worker installed");
    
});

self.addEventListener("fetch", ()=> {
    console.log(`You fetched ${event.target.url}`);
    
});