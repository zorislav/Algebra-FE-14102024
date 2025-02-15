self.addEventListener("install",(event)=>{
    console.log("Servis worker registered")
});

self.addEventListener("fetch",()=>{
    console.log(`You fetched: ${event.target.url}`);
});
