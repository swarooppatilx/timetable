const CACHE_NAME = 'timetable-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/app.js',
    '/data.js',
    '/icons/icon-192x192.png',
    '/icons/icon-512x512.png'
];

const externalAssets = [
    'https://cdn.tailwindcss.com',
    'https://unpkg.com/lucide@latest'
];

self.addEventListener('install', event => {
    event.waitUntil(
        (async () => {
            const cache = await caches.open(CACHE_NAME);
            await cache.addAll(urlsToCache);
            for (const url of externalAssets) {
                try {
                    const response = await fetch(url, { mode: 'no-cors' });
                    await cache.put(url, response);
                } catch (err) {
                    console.error('Failed to cache external asset:', url, err);
                }
            }
        })()
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});
