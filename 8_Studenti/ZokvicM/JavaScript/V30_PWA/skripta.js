if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("myPwasw.js").then(() => {
    console.log("Service worker registered!");
  });
}
