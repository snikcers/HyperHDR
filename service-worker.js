/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5e86d7671fbd7d5afdb5392f56af022f"
  },
  {
    "url": "assets/css/0.styles.83e9b54b.css",
    "revision": "7e79518fc38022b193001d03e78fb6af"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.deb989d3.js",
    "revision": "62389e465e373785d5413f0b224d8440"
  },
  {
    "url": "assets/js/11.898ad007.js",
    "revision": "6c496433aa5e60819b6631436e2eba12"
  },
  {
    "url": "assets/js/12.d089833a.js",
    "revision": "a741c9624f3d8a0e411b643afff76835"
  },
  {
    "url": "assets/js/13.e9c64516.js",
    "revision": "0530449164aa233b533bc0c7dd146e41"
  },
  {
    "url": "assets/js/14.abe8d7a9.js",
    "revision": "5554cb6f577d080c8ba495b089dccd3a"
  },
  {
    "url": "assets/js/15.c0189512.js",
    "revision": "d206206d396a3841605bf44c6bad0727"
  },
  {
    "url": "assets/js/16.5f700cc7.js",
    "revision": "f3bfff2ac6b9e3bca5070d8fbf05bc70"
  },
  {
    "url": "assets/js/17.aa237108.js",
    "revision": "3daaff475b530ea894a475f759113277"
  },
  {
    "url": "assets/js/18.bc1873c6.js",
    "revision": "8a0e104c54a8707fa386e8c441edf4c7"
  },
  {
    "url": "assets/js/19.4644c9f3.js",
    "revision": "b09ae7345c0c91b767da8ee7a6c46354"
  },
  {
    "url": "assets/js/2.f4e7b3b4.js",
    "revision": "a504f9f01bc0d3179efde3b3981f4aad"
  },
  {
    "url": "assets/js/20.35eb56e9.js",
    "revision": "9e1f29ae0eaddd9825a0b97ae234514d"
  },
  {
    "url": "assets/js/21.d4b0f7a5.js",
    "revision": "f2886b376627c0efc10cddda5b9ca6ea"
  },
  {
    "url": "assets/js/22.94bd93b7.js",
    "revision": "af96fb9d3d9ab6586f68296031f3504b"
  },
  {
    "url": "assets/js/23.973e35ac.js",
    "revision": "fcee81d0c4fec649b6ecdf1300ded67a"
  },
  {
    "url": "assets/js/24.42e74286.js",
    "revision": "c250ea83303ab588d8f686d381a20a64"
  },
  {
    "url": "assets/js/25.4563c1cc.js",
    "revision": "2a39b84e286d4c2b3e96be5af520dd29"
  },
  {
    "url": "assets/js/26.edc2a867.js",
    "revision": "e6ecd81d96136e1aae5309cabc1c9ac4"
  },
  {
    "url": "assets/js/27.81dade84.js",
    "revision": "d89c8f349217d50c29391fb769f43281"
  },
  {
    "url": "assets/js/28.6af3c074.js",
    "revision": "67d5af5e203f2e676b7825f149df7d61"
  },
  {
    "url": "assets/js/29.8011b12d.js",
    "revision": "5c38e9fc02199cbc5e46e907fff18220"
  },
  {
    "url": "assets/js/3.549baaf7.js",
    "revision": "ea74496abc2f6e3640be769782209858"
  },
  {
    "url": "assets/js/30.3bca66c3.js",
    "revision": "f51780e9019c46eb18aac319e8d289e0"
  },
  {
    "url": "assets/js/31.983dc35c.js",
    "revision": "0e46fb81e274470dcbe72a336b3ddd1f"
  },
  {
    "url": "assets/js/32.48c0800f.js",
    "revision": "9c0042519a6494ede311d0e65c83878d"
  },
  {
    "url": "assets/js/4.a333783b.js",
    "revision": "128f774d010919dc013857a7047074af"
  },
  {
    "url": "assets/js/5.47840f41.js",
    "revision": "a5d6b56f09fd5a5b1268be5c75fe4f48"
  },
  {
    "url": "assets/js/6.9367514b.js",
    "revision": "8a995a5da7354f5f14e80fefd9f13cf1"
  },
  {
    "url": "assets/js/7.b7ccec3b.js",
    "revision": "b3b28897d718335993b9c941ef122c30"
  },
  {
    "url": "assets/js/8.926dd2a7.js",
    "revision": "246ae2298ac408cc28d222180b5e93fa"
  },
  {
    "url": "assets/js/9.131f33d8.js",
    "revision": "76db65c8f4fc644723a12eb0b9006869"
  },
  {
    "url": "assets/js/app.72f73bb0.js",
    "revision": "d6d1bbcfbba9809eebc12069921660ee"
  },
  {
    "url": "de/index.html",
    "revision": "b738b5f6a25c24d217724f69af5d20d6"
  },
  {
    "url": "en/addons/API.html",
    "revision": "902e726cc64cb43a63e55eb7c7d985f1"
  },
  {
    "url": "en/addons/index.html",
    "revision": "ab9c5bda401bb52f24f199df2325bdaf"
  },
  {
    "url": "en/addons/OurFirstAddon.html",
    "revision": "61ffe47e3d7fcccd9ebefd1f8e3b92cc"
  },
  {
    "url": "en/api/Detect.html",
    "revision": "564d3f2edae40677817d1e9df73fe1ad"
  },
  {
    "url": "en/api/Guidelines.html",
    "revision": "a57875f0cd0bc551358b817f19c6ffce"
  },
  {
    "url": "en/api/Ui.html",
    "revision": "70378d0c2f8e9c00e2f11c6ae7dad3cc"
  },
  {
    "url": "en/effects/API.html",
    "revision": "bf99142b384c940aa386334e8e3b3c87"
  },
  {
    "url": "en/effects/index.html",
    "revision": "baf0decebb529c0bdb91cb5ff3afbdb0"
  },
  {
    "url": "en/effects/OurFirstEffect.html",
    "revision": "7162c9075ce86d9affd3b7632386926c"
  },
  {
    "url": "en/json/Authorization.html",
    "revision": "b7ae2c0f8497025bae4147aa90469958"
  },
  {
    "url": "en/json/Control.html",
    "revision": "d33ddd9cbdc18686f16819f1d3fcaefb"
  },
  {
    "url": "en/json/index.html",
    "revision": "3c3e69dd517adb65a072005ebd136ad2"
  },
  {
    "url": "en/json/ServerInfo.html",
    "revision": "9905a90fdffb3878b89888bf3fb78e48"
  },
  {
    "url": "en/json/Subscribe.html",
    "revision": "fcff4c58ec52d5152b0d674fd2452e8c"
  },
  {
    "url": "en/user/advanced/Advanced.html",
    "revision": "baed278be6151d256be5de04cb251b1f"
  },
  {
    "url": "en/user/advanced/Support.html",
    "revision": "115b4f714ba5b2f29e94d98a5999c1cc"
  },
  {
    "url": "en/user/Configuration.html",
    "revision": "7651d1d3e4649401acc43cbba7e8e7e3"
  },
  {
    "url": "en/user/HyperBian.html",
    "revision": "9d277e3b80349d284fdc5f48c687ffb3"
  },
  {
    "url": "en/user/index.html",
    "revision": "867df2f587b814d6b5178826a13f9890"
  },
  {
    "url": "en/user/Installation.html",
    "revision": "fd18b5182a9968df0484f5d55322b396"
  },
  {
    "url": "en/user/LedDevices.html",
    "revision": "2a167e02bc0f8a3eeb397e156c218eef"
  },
  {
    "url": "hyperion-logo.png",
    "revision": "7b45f0e37b11274a222268811f6e821b"
  },
  {
    "url": "icons/apple-icon-120x120.png",
    "revision": "5310363c781b9c15c4f3ac59a73e3b63"
  },
  {
    "url": "icons/apple-icon-152x152.png",
    "revision": "58629194b92a3ad0de995f82e24af904"
  },
  {
    "url": "icons/apple-icon-167x167.png",
    "revision": "b10bfc94b3eb0fba64c2a11c940b9e17"
  },
  {
    "url": "icons/apple-icon-180x180.png",
    "revision": "0d49293c63426ec5b6946f362b97a452"
  },
  {
    "url": "icons/apple-launch-1125x2436.png",
    "revision": "9f8f96dd6c8de9f853f8babad699b1c9"
  },
  {
    "url": "icons/apple-launch-1242x2208.png",
    "revision": "7eaccc1a59c4fcffe92a21bc53bfe9ee"
  },
  {
    "url": "icons/apple-launch-1242x2688.png",
    "revision": "f218f534f64bb4cadc26f69286466fe1"
  },
  {
    "url": "icons/apple-launch-1536x2048.png",
    "revision": "f5ab3ee8116e2345b2bf0e096c28f0d4"
  },
  {
    "url": "icons/apple-launch-1668x2224.png",
    "revision": "79c6d66cf0f62a8e4a0274b2b082a3d7"
  },
  {
    "url": "icons/apple-launch-1668x2388.png",
    "revision": "eccc0736edec7fc914b60fbb227cac4d"
  },
  {
    "url": "icons/apple-launch-2048x2732.png",
    "revision": "4a22dec3a72bcbb094f4b0d57a7db25f"
  },
  {
    "url": "icons/apple-launch-640x1136.png",
    "revision": "25b4e430d8b9547998da9b3f3463f722"
  },
  {
    "url": "icons/apple-launch-750x1334.png",
    "revision": "2375e4f7e1bed22f49886a8db7aadfdf"
  },
  {
    "url": "icons/apple-launch-828x1792.png",
    "revision": "268a96c9e5a1f9b91b42c83f2630c32f"
  },
  {
    "url": "icons/favicon-128x128.png",
    "revision": "7fde7bf4a277f4795367404b1218d124"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "167d760fcaaab2e1721103ea5f870d20"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "2e72cabfbdb490eb07e9e495c44e7864"
  },
  {
    "url": "icons/favicon-96x96.png",
    "revision": "e1da949fce8aeed88ea70b16eed30dc4"
  },
  {
    "url": "icons/icon-128x128.png",
    "revision": "7fde7bf4a277f4795367404b1218d124"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "88e3e773614a52607ba9664c5236e4c7"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "b76a964a2568f71e113b2d82092832ae"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "140554afc213f539d78548dbbf9b3e41"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "2fe9fb83d0f57d9a79a569f29c71d072"
  },
  {
    "url": "icons/ms-icon-144x144.png",
    "revision": "bbb850753c840119673d50cf9a6854ca"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "146f0e1ea346388f72176e58d5f68177"
  },
  {
    "url": "images/en/avahi-browse.jpg",
    "revision": "03de1d29359b589003aff4b041a1f63b"
  },
  {
    "url": "images/en/http_jsonrpc.jpg",
    "revision": "c237320d34cbed2496fc836681b1605a"
  },
  {
    "url": "images/en/owneff_1.jpg",
    "revision": "cc2b1b0957e3a176a5ce9e450db233cb"
  },
  {
    "url": "images/en/owneff_2.jpg",
    "revision": "030d5b1e039cec2a6859313b4bbac2fe"
  },
  {
    "url": "images/en/owneff_3.gif",
    "revision": "a056840376aba4c22b240df2112250bb"
  },
  {
    "url": "images/en/owneff_4.gif",
    "revision": "03d9004e8bb5bd3014d2d17df0dd2af2"
  },
  {
    "url": "images/en/user_bbmodes.jpg",
    "revision": "1fd1fc941b0e875d8befc702fc427129"
  },
  {
    "url": "images/en/user_config_access.jpg",
    "revision": "e84efcf8139e2d837f7d7354187f5794"
  },
  {
    "url": "images/en/user_config_dash.jpg",
    "revision": "caa761bb871f030e674b6e8122bf3449"
  },
  {
    "url": "images/en/user_config_lang.jpg",
    "revision": "10a4d6094151277680cf71634262d301"
  },
  {
    "url": "images/en/user_gammacurve.png",
    "revision": "7e64a468b663f15dfc523cb14ca93c48"
  },
  {
    "url": "images/en/user_hyperbian_ssh.jpg",
    "revision": "d00e6d4cef9b884744bb97dea0d08738"
  },
  {
    "url": "images/en/user_hyperbian_wpa_suppli1.jpg",
    "revision": "bd2b0056d9f4a4f450cc71a2613ca5f1"
  },
  {
    "url": "images/en/user_hyperbian_wpa_suppli2.jpg",
    "revision": "5b08f56e71e8c7592e37f8cacaacd61a"
  },
  {
    "url": "images/en/user_hyperbian_wpa_suppli3.jpg",
    "revision": "e2e40a64836bb8ce19fad290223172ba"
  },
  {
    "url": "images/en/user_ledlayout.jpg",
    "revision": "2815e5ab254a09a7c24af33d169c0e66"
  },
  {
    "url": "images/en/user_ledlayout1.jpg",
    "revision": "6da17c4ff33ca70b66709f4d924ae865"
  },
  {
    "url": "images/en/user_ledlayout2.jpg",
    "revision": "fa9d66601d016ac2ed520b93eff35bee"
  },
  {
    "url": "images/en/user_ledlayout3.jpg",
    "revision": "01d98f6f598d4ab018e58935bd0728c0"
  },
  {
    "url": "index.html",
    "revision": "00b87214601ac28899a53a7d08664565"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})