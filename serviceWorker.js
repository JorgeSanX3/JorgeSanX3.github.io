self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('ubicacion-v1').then((cache) => {
      return cache.addAll([
        '.',
        'indexForm.html',
        'js/funcionamiento.js',
        'vendor/bootstrap-5.2.3-dist/css/bootstrap.min.css',
        'img/ubi.png'
        // Agrega aquí otros archivos estáticos que quieras que se almacenen en caché
      ]);
    })
  );
});

self.addEventListener('fetch',(event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});