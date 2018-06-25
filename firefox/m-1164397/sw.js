var CACHE_VERSION = 1;
var CURRENT_CACHES = {
    font: 'cache-v' + CACHE_VERSION
};

self.addEventListener('activate', function (event) {
    var expectedCacheNames = Object.keys(CURRENT_CACHES).map(function (key) {
        return CURRENT_CACHES[key];
    });

    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.map(function (cacheName) {
                    if (expectedCacheNames.indexOf(cacheName) == -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', function (event) {
    console.log('Handling fetch event for', event.request.url);
    event.respondWith(
        caches.open(CURRENT_CACHES['font']).then(function (cache) {
            return cache.match(event.request).then(function (response) {
                return fetch(event.request.clone()).then(function (response) {
                    return response;
                });
            }).catch(function (error) {
                console.error('  Error in fetch handler:', error);
                throw error;
            });
        })
    );
});
