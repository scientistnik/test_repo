var CACHE_NAME = 'my-site-cache-v1';

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(['/test_repo/main.js']);
      })
  );
});
