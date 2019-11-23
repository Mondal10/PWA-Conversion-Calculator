importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.0.0/workbox-sw.js");

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

  /**
   * https://developers.google.com/web/tools/workbox/guides/precache-files
   * 
   * If you want your web app to work offline or there are assets you know can be cached
   * for a long time, precaching is the best approach.
   * 
   * Precaching a file will ensure that a file is downloaded and cached before a service
   * worker is installed, meaning that if your service worker is installed, your files
   * are cached.
   */
  workbox.precaching.precacheAndRoute([]);

  /**
   * https://developers.google.com/web/tools/workbox/guides/route-requests
   * 
   * Cache the items in the register routes, basically matching extensions.
   * 
   * Make your JS, CSS, Img fast by returning the assets from the cache,
   * while making sure they are updated in the background for the next use.
   */
  workbox.routing.registerRoute(
    /(.*)others(.*)\.(?:png|gif|jpg)/,
    new workbox.strategies.CacheFirst({
      cacheName: "images",
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 50,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
        })
      ]
    })
  );

  workbox.routing.registerRoute(
    // cache js, css, scc files
    /.*\.(?:css|js|scss|)/,
    // use cache but update in the background ASAP
    new workbox.strategies.StaleWhileRevalidate({
      // use a custom cache name
      cacheName: "assets",
    })
  );

  // cache google fonts
  workbox.routing.registerRoute(
    new RegExp("https://fonts.(?:googleapis|gstatic).com/(.*)"),
    new workbox.strategies.CacheFirst({
      cacheName: "google-fonts",
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200],
        })
      ]
    })
  );

  // add offline analytics
  workbox.googleAnalytics.initialize();

  /**
   * Install a new service worker and have it update
   * and control a web page as soon as possible
   */

  workbox.core.skipWaiting();
  workbox.core.clientsClaim();

} else {
  console.log("Oops! Workbox didn't load 😬");
}