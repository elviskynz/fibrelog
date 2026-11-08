// Minimal service worker: lets Android treat FibreLog as an installable app.
// It stores no records, so technicians always see live data.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});