if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("mypwasw.js").then(() => {
      console.log("Service worker registered");
    });
  }