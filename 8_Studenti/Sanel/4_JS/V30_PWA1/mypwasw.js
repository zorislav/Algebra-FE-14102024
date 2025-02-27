self.addEventListener("install", (event)=>{
    console.log("Service worker installed!");
});

self.addEventListener("fetch", (event) => {
    console.log(`You have fetched: ${event.target.url}`)
});

