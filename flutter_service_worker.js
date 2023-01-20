'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_17.part.js": "0756f6f37a3bfb1c63585d692d480134",
"main.dart.js_16.part.js": "ebe44234151a2e3a85d4d2ce737bbfc1",
"main.dart.js_18.part.js": "b06b2b0e458a2f73db85c58d5a21c71c",
"main.dart.js_5.part.js": "2a8249b67fa705f03303ee6abf6357cc",
"main.dart.js_14.part.js": "0e7af312fae9fa280b0f43783f7ee5fa",
"main.dart.js_8.part.js": "67f61d15d1e56b33822d2e33af57f61f",
"main.dart.js_12.part.js": "3a83a2754f5d3b6160e82b92f77ae1e5",
"main.dart.js_21.part.js": "678008b2f2bd93e7a80e1b0bf6c9e844",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"main.dart.js_9.part.js": "6b9571851dd8f5ef80d955c2a5300f9a",
"main.dart.js_6.part.js": "ee39f17fe70d0dd14b072b44bff0230a",
"main.dart.js_7.part.js": "b53a9b96402eb0452174819c2356362f",
"index.html": "db2a4bcbe6f1829a399cccf67075ec1d",
"/": "db2a4bcbe6f1829a399cccf67075ec1d",
"main.dart.js": "54339ebe73eddf3d1542ce82083ec8d0",
"main.dart.js_19.part.js": "ff0452d9a6ae667e466e59caaad15abd",
"manifest.json": "15f73b7e8a8209c2206210b3ac8dea1b",
"main.dart.js_1.part.js": "e5907269714378c463c86d378a74fbcc",
"main.dart.js_15.part.js": "3ccbfa426cef3f60e2ad202abea1c739",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_22.part.js": "bae50277ba3e41ed55ba5c314593b675",
"main.dart.js_13.part.js": "4c862b658f073ef3327bf42731be8e1f",
"main.dart.js_10.part.js": "feae7a96608b457181c0ecdf57218bd5",
"main.dart.js_11.part.js": "9def69d8f0cc2b92ec592c6f4c3f6608",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"main.dart.js_3.part.js": "121d671ce27b8de47904b80d9f63d2a9",
"main.dart.js_4.part.js": "de8308a3cc1bdad07b1c2f074881e6e9",
"splash/img/dark-2x.png": "2d9b17fa4e4ecbc711c838fa5b903c18",
"splash/img/light-1x.png": "4485d4d6ec1ccc89f93c3fd4838d0e50",
"splash/img/light-3x.png": "e6854e8554dd5216edd8d93e70670117",
"splash/img/light-2x.png": "2d9b17fa4e4ecbc711c838fa5b903c18",
"splash/img/dark-3x.png": "e6854e8554dd5216edd8d93e70670117",
"splash/img/dark-1x.png": "4485d4d6ec1ccc89f93c3fd4838d0e50",
"splash/style.css": "f8e8383c64b765de4871c2b23e30b102",
"assets/FontManifest.json": "6b53bbac7e12ce88331411914c31782e",
"assets/NOTICES": "cd7fc639d4ec16fc491b8fb4798bfa4e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/flutter_logo.png": "8ba1d5b022cd7f5999bea3085e87ceb0",
"assets/shaders/ink_sparkle.frag": "28a404c6523bd094ee13ab7bd8e1534e",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/fluent_ui/fonts/FluentIcons.ttf": "1cd173aed13e298ab2663dd0924f6762",
"assets/packages/fluent_ui/assets/AcrylicNoise.png": "81f27726c45346351eca125bd062e9a7",
"assets/AssetManifest.json": "d28c888634906fb585a4e78b850824ca",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"main.dart.js_2.part.js": "b42f4ce496efbb934b28102226dff151",
"version.json": "ff966ab969ba381b900e61629bfb9789"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
