var staticCacheName = "pwa";
const assets = [
	"/",
	"/index.html",
	"/slplayer.js",
	"/untitled.js",
	"/resources/barre du haut_1.png",
	"/resources/barre du haut_2.png",
	"/resources/barre du haut.png",
	"/resources/boutoon bas.png",
	"/resources/cache_1.png",
	"/resources/cache_2.png",
	"/resources/cache.png",
	"/resources/fond_2.png",
	"/resources/Jaloux_1.png",
	"/resources/Jaloux.png",
  ]

self.addEventListener("install", function (e) {
e.waitUntil(
	caches.open(staticCacheName).then(function (cache) {
	return cache.addAll(assets);
	})
);
});

self.addEventListener("fetch", function (event) {
console.log(event.request.url);

event.respondWith(
	caches.match(event.request).then(function (response) {
	return response || fetch(event.request);
	})
);
});
// const KEY = 'key';

// self.addEventListener('install', (event) => {
//     event.waitUntil(self.skipWaiting());
// });

// self.addEventListener('message', (event) => {
//     if (event.data.type === 'CACHE_URLS') {
//         event.waitUntil(
//             caches.open(KEY)
//                 .then( (cache) => {
//                     return cache.addAll(event.data.payload);
//                 })
//         );
//     }
// });