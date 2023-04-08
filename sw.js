self.addEventListener("install", (event) => {
  // This will be called when the service worker is installed.
  event.waitUntil(() => console.info("Installed!"));
});

self.addEventListener("fetch", function (ev) {
  console.log("fetch", ev);
});
