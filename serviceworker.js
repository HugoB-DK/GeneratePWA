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
	"/resources/Message fond defilant hippo.png",
	"/resources/Message fond defilant.png",
	"/resources/Message Hippo.png",
	"/resources/Messagerie Clavier.png",
	"/resources/Messagerie Hippo_1.png",
	"/resources/Messagerie Hippo.png",
	"/resources/notification message_1.png",
	"/resources/on peut se voir .png",
	"/resources/P1.png",
	"/resources/P2.png",
	"/resources/P3.png",
	"/resources/P4.png",
	"/resources/P5.png",
	"/resources/P6.png",
	"/resources/P7.png",
	"/resources/P8.png",
	"/resources/P9.png",
	"/resources/P10.png",
	"/resources/P11.png",
	"/resources/P12.png",
	"/resources/P13.png",
	"/resources/Pas du tout.png",
	"/resources/taper votre message.png",
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