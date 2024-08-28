'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ada04ef751d380191148645be68d72df",
".git/config": "f937346b5a368aac6d52d7178d248dfb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "6fde23c5b79b70b8f0930c993d2b793e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9ee7af258a55a48972ac02aa5ed5340c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "30986218247cdab761a791de8ae4f272",
".git/logs/refs/heads/master": "30986218247cdab761a791de8ae4f272",
".git/logs/refs/remotes/origin/HEAD": "416863cd8cce5511f7114ad0e2d91106",
".git/logs/refs/remotes/origin/master": "c62e51b309a22be6bc53215773566613",
".git/objects/02/073ec2d1940bfe6e85a5e389ca4be8a92f8b3f": "6bb0272a764e9b397fa1c898baec7f7e",
".git/objects/03/3a068e335463fd8879671b77a77abb58a1f144": "c2bdd2b7b6a75d45e28adca03b2cbb4f",
".git/objects/04/40890e7dd28a01ca2c60b5a3d0fd32fb5995d9": "e88dadd7eccbf239a127d82f0fc525c4",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0b/af76afcd4559dbefbc75622b3f6552c523290e": "2a72570c9ccf5ae9206a033549b8f498",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/14/b0e923270dad6bb7f0787c32b6bb49c77a8a00": "fcc247c9800b449c181bf6c9cce6e841",
".git/objects/15/7b9c3d9fb5a2201a4c704cce72d777e51f8af3": "f358599b1d504fdb77fe6306a9f23b1f",
".git/objects/16/027a0d6df0a160099cd831c06aa0a69aef1258": "3ac0f167fd29e9e9f7c0cdef054c5acc",
".git/objects/17/5b96f41048ee497bcde2678d0021f5c5c89adf": "2a1a7c6cb6d3e39b7a95d114f8790120",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/7f27c65a25d22e260dfecef3d29727e5c12ea1": "6c049cd2357fd1e83be9540973019d0b",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/21/a0898e5ef865fcc88c46d4775536c2b7864081": "81032f9c3681b0bcfc43f934c8ad94bb",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/25/1b6818a9443779de686be8037361df24dddad4": "9a142a852d0015a0f054129d8e508d29",
".git/objects/30/0efaefa7d2bd34a221ffad6d778922d14bceb1": "d50b8515ecf3b28528b1d55b9128382e",
".git/objects/32/dacaa60d9fb2ff3cd75790687f94b31600918b": "a5303f04fa709fcd7f08d25fe74fc400",
".git/objects/36/b87a002b277a6a0b93cb70c2a8d2aa1cffad43": "e63aab0ac72cac5976cdff59d8debb75",
".git/objects/37/a18b6112636fa7d74d82a43b9eaf9a2bda89aa": "d2d656edbc23285f7e28ad1c15e7606c",
".git/objects/3a/81272661a4113a7e3dbcd76a284a2955f8e3c3": "75e771156a4b059682d5ecd9da83f060",
".git/objects/3a/faa8684254c825a4c44eed3e76ddd430da5160": "c4577b0c843aa7389796e7ad9942dabc",
".git/objects/3e/089096818e08c54e9cabb41aeb02eae95f5268": "66f4cd6ee18822dc86349366760af46f",
".git/objects/3f/26bc0f64ad330669ccf1e1a8663020b4dd2e8e": "549e1692b8e12b09d2640295b5610228",
".git/objects/3f/504686b94920000cf129c0562f693cf2ce121e": "43d6f7bbf9e4a4a32a14a9baef5a1272",
".git/objects/42/9744f6ae8818d57d04468ba2e73dc742937a3f": "b6fe3941c7368cf53269791e09d99b17",
".git/objects/43/c64c1b9bc2ffc4d4cce67ff4a172c36bd0dc26": "edcea218c8cb1de95f9856b0b4617a97",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/48/ab62cc0bafbd0623664c0632ade6800f51983c": "f4c4e487c40ca359108fff02f341ff52",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4f/e8e0603c019f3343f70450831d322d21acc7f2": "6ce872373e990a24d35b26de492bbaba",
".git/objects/52/9b22899d8c5927d1b5184a8147f99be1caa4fc": "50bde57529d9aea91d3f4194579941cd",
".git/objects/54/a41dbed7475a9ad554801623db52ba46532724": "758ef60d50b871bf9d9c1ec9ad7e7abb",
".git/objects/56/b56ccb3193ec373edc4fb576ed784baaaa5a75": "942e1237a47bfcaacdf07015be7fa306",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/59/6293b60127098c50c652d4296505b2cec04e91": "695f801b4d041896a167359b7fe1afa8",
".git/objects/5a/35f5dd7c105601b2f49ab645870666c472d1d0": "711db95bccb4c138135c63ce68d3e348",
".git/objects/5f/b2400d6da0830c891d21b2c7a3d91df3356556": "de42484099b20f32ce1af5bf05046a63",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/64/8187b1a592afdb32928a8f98d25a5db58f8579": "844323c446910f36f6f65748a010f6fc",
".git/objects/6a/4c99ff95e35b18ff6db89926e9d16b59b88654": "e41ecc2d4fc5b4897fb876b1d8a62f1b",
".git/objects/6b/cd08de8db20b3ad0f34110b3cbef7220af4480": "c85b9c0f379a6f81d5ce9745265b74aa",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/73/39dad94fa586f11001e77ee5b457b114f8c1e7": "2447b53f4222a4ae8a93efbaa61c8631",
".git/objects/75/0fa5c8f794ae34b915899d7a36631d94ee905c": "00528768b390649b2171f54ba20ad327",
".git/objects/7c/1f4e7fc418507eb3ee32aadb5dd0b3a058d5d7": "fcb6c4563c06e801b5f44f341402fbca",
".git/objects/82/ce453905c9eab4eec50f6364758ee947454153": "f320e9f4b59e1bf13b3b433afe16a799",
".git/objects/84/d88270e5bd7074436d3950640b5584ca3bb5c9": "8e03a01f9c674949c85df37154d662f3",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/2b0e6130f4d62fd326f52ff49a551ce13dda61": "99f777f1a6bd45e59cc765b41a38bbeb",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/a3/003ea0c4e58c6a85a14991b61b3cf1366020ef": "e6c7d1d83e841e131e0d06011b21a9b2",
".git/objects/ad/985c9ea240d21353a3c6e1d5caf43b472bcfeb": "4d153fd9b9294dc9d84bd08448536547",
".git/objects/ad/d8742f9cc41ed4aa9ea07895971564b2b2aa97": "3b97a3911445907285df6ed5a1aa3828",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b2/5c74ac8df405d7b9339dc4d72e0e19756a9946": "de557d5b4957fd5a6d168ddb2d7fc86f",
".git/objects/b3/52f59292523fb76295959d1c14ddf22de95832": "760c83566b6a4fbe214ae2d65233b282",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b5/2500a64dcff4fcc8237e3c98d01c0324fec557": "4a050cb5a5a68e958d2dae6f5a7acf25",
".git/objects/b6/888fdcd5449272ee0de00430dafdf701c0e0dc": "44e15e291547e42fc80845d492ce3225",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/17c24c17f2bb176ec0829d045b1b4700df5d88": "70f58ae6a2de9ab530ab7d846a220cf7",
".git/objects/b9/fb0082f75d08f648579a454a45d79e81dc98a6": "fb37e23d5a44832a60046e02e13c4a69",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c6/34324852e7337e7b8c6c7d6c2e7d31a72b53ac": "c8ae6fd12b3219891934da47116ffd83",
".git/objects/c8/e315d97b95e3e6222cd2a467572af59e934c59": "ae889ae4589d330ce572be8c288180bc",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/cf/2286771cf1ab7a4cdeadabe84090fc702558d0": "1b7c00e3c56ff214bb5dc8a4c97eb94b",
".git/objects/cf/b11e9e497a3627828b944b7534dba2f63b2cce": "7cd9f84b3251e448bfa0648ce0edf463",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d0/353e7ec10e1753aad3bf333664d8f86e4116c5": "bf7b1c797f6806c5ccfab44e04666661",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/e0/96a1c37223767d654b1e2a8e83cb8cdab8ddd1": "bd88958f08830c3f3f1d42c6bcbe0170",
".git/objects/e3/f3ab3a712e85ce25b4219b2893968216712c4e": "3f7d0edace859419aa0413ee44b64fa7",
".git/objects/e4/87c876745e1f17e32e583a4f7c88ab01593c1a": "4b282ead7df3916ab6f6789813c4f2bf",
".git/objects/e6/0ac6ccfa21aefeadf9cfcc15056958fc6ac447": "d609f045451ba78d8ea50fe04ffb76d9",
".git/objects/ed/c4fb465cc4063bb71437e94689a91570e8952e": "0babdf7ede463fede515de2695422155",
".git/objects/ee/dd29a96138452c245ddb102857013d5eba8406": "45cc169e8831c50981436d9382ce9b04",
".git/objects/ef/3c3dc72e37dbe4b145ad6efca9074cc12f6e48": "dcf674719508e42e26372d1cb440f7d2",
".git/objects/f1/0a07db7cc295bafe4e9a0ceea8417433ecbb20": "12a7bd69cae2b3a46f4545771c01d159",
".git/objects/f1/dcdb3d6e6704be0786e3524fc33e3be948a254": "5f4f42dd298a0e20689a81bdea08cf70",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/cda54561d207e7c3546a5f95338a7a6904ef04": "f213a35112a9154505e87562e6279156",
".git/objects/f5/ed37be39789b68a0da0868499df671a3b8f8a8": "5d883f450f3396d8a737f24d4cfe7e4e",
".git/objects/fa/dfdb16385009c53f8d3c30d935ea83fae822cc": "20d98afe42d20192cb1a5e2573ca9e51",
".git/objects/fd/8ce4d97feacf049a49b4739e12263ad290bf80": "61751b0bfd1e3b4782ebfe665fceb1f4",
".git/objects/fe/b923193313be2c33af92df86fc627fc96aa89c": "48d3914d107178d5a36ac94eb3d8b760",
".git/refs/heads/master": "56565dcab19305cf022112a4cca0b415",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "56565dcab19305cf022112a4cca0b415",
"assets/AssetManifest.bin": "fa8ddfa17aabe38518766a63c109120d",
"assets/AssetManifest.bin.json": "7c77d329d71389d306bd976827ead5d8",
"assets/AssetManifest.json": "5f9d9e104ab569ac2eae3f7e87b3ac60",
"assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/adaptive_foreground_icon.png": "3d1e3ff559bdde3e20e62f318fa05582",
"assets/assets/images/app_launcher_icon.png": "3d1e3ff559bdde3e20e62f318fa05582",
"assets/assets/images/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/semcodigobr.png": "3d1e3ff559bdde3e20e62f318fa05582",
"assets/assets/lottie_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/pdfs/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/rive_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/videos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "875fd7a2c624bc45da96203e0ae4ffb2",
"assets/NOTICES": "78e95361540cc5b9a9696ab79677aa23",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b72c617acdf2227c8b1413215f620711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "2704101cb06ce66e2000356a312be25c",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "a44c59c30f63171f59a57b82dc82698c",
"icons/app_launcher_icon.png": "3d1e3ff559bdde3e20e62f318fa05582",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "07f58259afa232d67bb6af6e5868a51f",
"/": "07f58259afa232d67bb6af6e5868a51f",
"main.dart.js": "b981e540ecde7f695a918bb44e19372d",
"manifest.json": "7b96a8ca19d19f8ece81649c150f4929",
"semcodigobr.png": "3d1e3ff559bdde3e20e62f318fa05582",
"version.json": "79fe6107b1819e5f667bffff0a1b86e1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
