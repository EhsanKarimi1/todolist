/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["README.md","1dc71f12cae50cddc610eabcc107ab4d"],["asset/css/iconfont.css","b3f9b356cd65ba22f4dacda48c3f057c"],["asset/css/style.css","e806de9fb08d994bb1908ebe07e0e72e"],["asset/images/apple-touch-icon.png","66e635e2031f4bc22b0af057fa922c0e"],["asset/images/bars-icon.svg","3556a1b32aedd12e4ea02e9488c3a610"],["asset/images/icon-v2-1024.png","1482ff224684833bd1cd143a60a2fa27"],["asset/images/icon-v2-192.png","78f484e73fb67a9605c106d6534c2165"],["asset/images/icon-v2-384.png","ea3fdb81eec8fcf367c33c7be96dd9d4"],["asset/images/icon-v2-512.png","33bcf8f67a47903f3a1046c6f0ab1283"],["asset/js/script.js","d5f9345714b78b693a28121bea88454b"],["asset/webfonts/Peyda-Medium.woff","8d8c62e0ba9d49f53eda39ab23625b1f"],["asset/webfonts/Peyda-Medium.woff2","deb12c3644148589a8628bad50b0865e"],["asset/webfonts/pro-fa-regular-400-5.0.0.eot","0d6cde1d1b64c2d064997002bd5f78b7"],["asset/webfonts/pro-fa-regular-400-5.0.0.svg","b0cc35e4ca43a46eb912ce2f6dbfcbb9"],["asset/webfonts/pro-fa-regular-400-5.0.0.ttf","40b8ede12f464e056098f8e45322a9bb"],["asset/webfonts/pro-fa-regular-400-5.0.0.woff","e5d6f5057d987cf966598e956a24484d"],["asset/webfonts/pro-fa-regular-400-5.0.0.woff2","e0e8f01313f5061924cb318b031d706e"],["asset/webfonts/pro-fa-regular-400-5.0.1.eot","7066de33824857d5568da012b3d106d0"],["asset/webfonts/pro-fa-regular-400-5.0.1.svg","8c84e3fc438b93bacc9791694b80cca6"],["asset/webfonts/pro-fa-regular-400-5.0.1.ttf","d15c8caee21d8db4b50286f926ad0881"],["asset/webfonts/pro-fa-regular-400-5.0.1.woff","5e11edba0e0bd081ebfae0ce391f0673"],["asset/webfonts/pro-fa-regular-400-5.0.1.woff2","60b576b34a4547003440ed48d2fb681b"],["asset/webfonts/pro-fa-regular-400-5.0.10.eot","2af987424e7a7d426a5103d0ae2681fe"],["asset/webfonts/pro-fa-regular-400-5.0.10.svg","1514d98a793dcefec73cd2495bd2a947"],["asset/webfonts/pro-fa-regular-400-5.0.10.ttf","7bcf2a936c8c22496a4864d56689d197"],["asset/webfonts/pro-fa-regular-400-5.0.10.woff","f645214838508ec06c9ee078190fc42e"],["asset/webfonts/pro-fa-regular-400-5.0.10.woff2","9f2c5a882ade7e44b26a175352528f8f"],["asset/webfonts/pro-fa-regular-400-5.0.11.eot","0fbc44ef87b5bd8c9c41891a06ca3ec8"],["asset/webfonts/pro-fa-regular-400-5.0.11.svg","ed43c5066a6e60e9c413eb16dc58888f"],["asset/webfonts/pro-fa-regular-400-5.0.11.ttf","18ab1245ac2eb56a879df5886e913605"],["asset/webfonts/pro-fa-regular-400-5.0.11.woff","68cd10b19263ae399af617fa4225783d"],["asset/webfonts/pro-fa-regular-400-5.0.11.woff2","355c8968defbaf0564bdbba6d41b320f"],["asset/webfonts/pro-fa-regular-400-5.0.13.eot","e5f3d9e5b6170da136d4d6c5ec68355b"],["asset/webfonts/pro-fa-regular-400-5.0.13.svg","b0a5d8f75d3d236a7671caf0adbc829e"],["asset/webfonts/pro-fa-regular-400-5.0.13.ttf","f466ef79d94870971549a609d23e6d05"],["asset/webfonts/pro-fa-regular-400-5.0.13.woff","a412162946160cfccb0a7db6a0e9a4b4"],["asset/webfonts/pro-fa-regular-400-5.0.13.woff2","5507ff9c8ebe869e56ea0472e20c9763"],["asset/webfonts/pro-fa-regular-400-5.0.3.eot","3d3f4928ccb7526359444939c7e2ba30"],["asset/webfonts/pro-fa-regular-400-5.0.3.svg","a541a8c51ccc526779768af2593b6479"],["asset/webfonts/pro-fa-regular-400-5.0.3.ttf","5f70d36a3936d7a3cf7a2b5ad30bd155"],["asset/webfonts/pro-fa-regular-400-5.0.3.woff","94645d1b099120a7915c8830075478bf"],["asset/webfonts/pro-fa-regular-400-5.0.3.woff2","0d06bbf6865135ed25f6344a6208bfe6"],["asset/webfonts/pro-fa-regular-400-5.0.5.eot","706c835c1fad96503bdbf7ac824a79fd"],["asset/webfonts/pro-fa-regular-400-5.0.5.svg","abfcac54fa5bb2238432e5a8244c009f"],["asset/webfonts/pro-fa-regular-400-5.0.5.ttf","75a6810c5fdb5d7a8444a3338c4ccc69"],["asset/webfonts/pro-fa-regular-400-5.0.5.woff","9a3425c02d572e69b643863bbbb29bf9"],["asset/webfonts/pro-fa-regular-400-5.0.5.woff2","d43e83f5cf59c1024af92d4f12736514"],["asset/webfonts/pro-fa-regular-400-5.0.7.eot","eb774d2abf3d0cd7bfaca6088176baec"],["asset/webfonts/pro-fa-regular-400-5.0.7.svg","9463a054f1f8f019454578ab0fb61dc7"],["asset/webfonts/pro-fa-regular-400-5.0.7.ttf","d6546a315153c86428d803d1acf3c427"],["asset/webfonts/pro-fa-regular-400-5.0.7.woff","8ff5d1d204380488decdf1a809e0f6cf"],["asset/webfonts/pro-fa-regular-400-5.0.7.woff2","8e5aec85685905b28a71f8387a568cad"],["asset/webfonts/pro-fa-regular-400-5.0.9.eot","39e1f48f3faf6109ade4bd7136347397"],["asset/webfonts/pro-fa-regular-400-5.0.9.svg","50ca29136961f603f2bd8ddb44286760"],["asset/webfonts/pro-fa-regular-400-5.0.9.ttf","e563f68181beea51338bdbd4930c34a0"],["asset/webfonts/pro-fa-regular-400-5.0.9.woff","4c74823b6564141b5dc21293d5e80dec"],["asset/webfonts/pro-fa-regular-400-5.0.9.woff2","e626d400db3ab37ee6dbdde07b490ced"],["asset/webfonts/pro-fa-regular-400-5.1.0.eot","fdb0e93a637effa0b1cdb430c46bc0c0"],["asset/webfonts/pro-fa-regular-400-5.1.0.svg","98490afe201adeccee3de1a6023cad78"],["asset/webfonts/pro-fa-regular-400-5.1.0.ttf","43d3cf0331984eb129a7e41cd0826b9d"],["asset/webfonts/pro-fa-regular-400-5.1.0.woff","d1c93301dad1af48e6bf49b18c5a7614"],["asset/webfonts/pro-fa-regular-400-5.1.0.woff2","cecb529769c21f50379b46654e3aaf6b"],["asset/webfonts/pro-fa-regular-400-5.1.1.eot","49bf7e30ada11915a42489139130db8d"],["asset/webfonts/pro-fa-regular-400-5.1.1.svg","8b2c7c85955ec5791aed08a20e1a4717"],["asset/webfonts/pro-fa-regular-400-5.1.1.ttf","d626588b0be2bfad1d2f804e0eec39f3"],["asset/webfonts/pro-fa-regular-400-5.1.1.woff","bd1c4b03f56458423331d6951b6a7dc4"],["asset/webfonts/pro-fa-regular-400-5.1.1.woff2","c050e530a33bffc83b4e930583b1da1c"],["asset/webfonts/pro-fa-regular-400-5.10.1.eot","6dfcdf9eb6ca48e85db8aee684b9e1e7"],["asset/webfonts/pro-fa-regular-400-5.10.1.svg","74cddbf75fe9a6c3552b3f624f4a0e18"],["asset/webfonts/pro-fa-regular-400-5.10.1.ttf","d33604d97689613cc94d38145c8e42fc"],["asset/webfonts/pro-fa-regular-400-5.10.1.woff","16b9ade8fd75610ac42ed0aeccc58b7b"],["asset/webfonts/pro-fa-regular-400-5.10.1.woff2","57e75c6e3dcf93277d40020bb1339f92"],["asset/webfonts/pro-fa-regular-400-5.10.2.eot","462ffafb8a4c4e8ac0bb3576da3c8eaf"],["asset/webfonts/pro-fa-regular-400-5.10.2.svg","924956c0031a693e7cf276cd1444c42f"],["asset/webfonts/pro-fa-regular-400-5.10.2.ttf","df64ebee83c62a0204378a2bce8be637"],["asset/webfonts/pro-fa-regular-400-5.10.2.woff","0f340a850eed4e4ec4963b92d349f9b3"],["asset/webfonts/pro-fa-regular-400-5.10.2.woff2","054b33973fedb68ef21f74b9d142acb4"],["asset/webfonts/pro-fa-regular-400-5.11.0.eot","0234bfc2e5fe3937cbca25d8953a4b99"],["asset/webfonts/pro-fa-regular-400-5.11.0.svg","e891e94d188259da6aa694ebd65fec0b"],["asset/webfonts/pro-fa-regular-400-5.11.0.ttf","cf6462a9580bb1801f020b227e35fd12"],["asset/webfonts/pro-fa-regular-400-5.11.0.woff","c0096fd84f9a40a6569277a2c41b8625"],["asset/webfonts/pro-fa-regular-400-5.11.0.woff2","16afa0fd7b33713ff06be5908d490ddd"],["asset/webfonts/pro-fa-regular-400-5.11.1.eot","b1ccfc18768d7b4a2dbdb6dc9ddfa86a"],["asset/webfonts/pro-fa-regular-400-5.11.1.svg","37dc4a3cb435741523c68d2809421ac3"],["asset/webfonts/pro-fa-regular-400-5.11.1.ttf","720de1833dfda4e4c7204232464940ae"],["asset/webfonts/pro-fa-regular-400-5.11.1.woff","c84f6ec2af3edc90defc27949ab1a173"],["asset/webfonts/pro-fa-regular-400-5.11.1.woff2","5b2f92df36592884952fbbfd50d96833"],["asset/webfonts/pro-fa-regular-400-5.11.2.eot","293a0325176bf214cf0a141906779aed"],["asset/webfonts/pro-fa-regular-400-5.11.2.svg","7c7300e73a7fb2335370ac22325b495c"],["asset/webfonts/pro-fa-regular-400-5.11.2.ttf","3c8aad55df493c37805b015122ac6b6f"],["asset/webfonts/pro-fa-regular-400-5.11.2.woff","c3fedea079c6d80ed78d576d0470e9a9"],["asset/webfonts/pro-fa-regular-400-5.11.2.woff2","f55b2429565939590af4a886f342c029"],["asset/webfonts/pro-fa-regular-400-5.12.0.eot","10abcc5268018f47be594f69d02c406a"],["asset/webfonts/pro-fa-regular-400-5.12.0.svg","f366b9ac5d4cea54e6887685085373a3"],["asset/webfonts/pro-fa-regular-400-5.12.0.ttf","a35f2115af518dee000bb7c6c658ab08"],["asset/webfonts/pro-fa-regular-400-5.12.0.woff","f85bf3b099fa59aeaa8c99921bd97c98"],["asset/webfonts/pro-fa-regular-400-5.12.0.woff2","4d2d37fdd70203fe44f94d36656b5965"],["asset/webfonts/pro-fa-regular-400-5.12.1.eot","6c9baa6ec534e7e0e05e527252bf4de7"],["asset/webfonts/pro-fa-regular-400-5.12.1.svg","1b3b8935bb7a27d501cf918f94a8aab5"],["asset/webfonts/pro-fa-regular-400-5.12.1.ttf","53c9e0c7effb4ff581e798abbbd74d17"],["asset/webfonts/pro-fa-regular-400-5.12.1.woff","f53e604c7a78bb492540410c4fc4c33c"],["asset/webfonts/pro-fa-regular-400-5.12.1.woff2","3e6f9cffb1d153e4c1e5b202ed37c561"],["asset/webfonts/pro-fa-regular-400-5.13.0.eot","8b677be641ebb1e8cc9b8dd392894575"],["asset/webfonts/pro-fa-regular-400-5.13.0.svg","abcdcf44f3ab20e620ec2713bca44a44"],["asset/webfonts/pro-fa-regular-400-5.13.0.ttf","e5e3bd9327e162b072b4b0b26769f30a"],["asset/webfonts/pro-fa-regular-400-5.13.0.woff","1590c45e6bc56b24f03c8011af4d459a"],["asset/webfonts/pro-fa-regular-400-5.13.0.woff2","d2d97d6b17ff20c81b42e9612e262a75"],["asset/webfonts/pro-fa-regular-400-5.14.0.eot","ab9030e5cd0693a21e21176481ce260c"],["asset/webfonts/pro-fa-regular-400-5.14.0.svg","3a598e723c1d0531e7a353ed8d0d6674"],["asset/webfonts/pro-fa-regular-400-5.14.0.ttf","4a73e1d8134d2db1e4e2bf5d8f5f7c5f"],["asset/webfonts/pro-fa-regular-400-5.14.0.woff","7e74d8abcd8f4d642c6eb8671423e83f"],["asset/webfonts/pro-fa-regular-400-5.14.0.woff2","7f239adcaf605274c9eb382f695aff40"],["asset/webfonts/pro-fa-regular-400-5.15.1.eot","b5f31c6104467466c296aa39be8c2c00"],["asset/webfonts/pro-fa-regular-400-5.15.1.svg","eb2ccf616d0352546f5f46d9546e8992"],["asset/webfonts/pro-fa-regular-400-5.15.1.ttf","2c6ef9f885b64e23e30faed090e82ce0"],["asset/webfonts/pro-fa-regular-400-5.15.1.woff","0e639c892c0e7f2a86a3ea6e6bfd0218"],["asset/webfonts/pro-fa-regular-400-5.15.1.woff2","86202163aee0f6fc3f658f033d7e0692"],["asset/webfonts/pro-fa-regular-400-5.15.3.eot","f7c9065d45fe7c72473bb01fdb83eb21"],["asset/webfonts/pro-fa-regular-400-5.15.3.svg","114a8c75324972e7e8a113cf73334447"],["asset/webfonts/pro-fa-regular-400-5.15.3.ttf","f2af2534f2d62e2f142f1dc0f71d0826"],["asset/webfonts/pro-fa-regular-400-5.15.3.woff","8df86f20d60c7a52d1a17f8e7ef6f7e1"],["asset/webfonts/pro-fa-regular-400-5.15.3.woff2","1f3f0848d6eb5d73234d8ddb67b0026e"],["asset/webfonts/pro-fa-regular-400-5.15.4.eot","d2f854e95c5d6eef64ac51ff2f39acc5"],["asset/webfonts/pro-fa-regular-400-5.15.4.svg","8cebcf6af3739fec846eb69a8dda7df5"],["asset/webfonts/pro-fa-regular-400-5.15.4.ttf","14e1fb93a67208114efaa5838465349c"],["asset/webfonts/pro-fa-regular-400-5.15.4.woff","68c5754129c88071c39233be9f4213bc"],["asset/webfonts/pro-fa-regular-400-5.15.4.woff2","0cc76214ef016eb9e7c51781019deb29"],["asset/webfonts/pro-fa-regular-400-5.2.0.eot","a4b8010c093d47ee0bc4852a2c71934f"],["asset/webfonts/pro-fa-regular-400-5.2.0.svg","c3fe8ca0c63faf252942bc8a10c24450"],["asset/webfonts/pro-fa-regular-400-5.2.0.ttf","d26f7e84f7b24ab4f842c19e00352333"],["asset/webfonts/pro-fa-regular-400-5.2.0.woff","55b77ed6a6bc3add9e9bdce0eda2204b"],["asset/webfonts/pro-fa-regular-400-5.2.0.woff2","403dbb088d60dc26f394060d679ce6d7"],["asset/webfonts/pro-fa-regular-400-5.3.0.eot","7602ba726fd518de00989b729b17b302"],["asset/webfonts/pro-fa-regular-400-5.3.0.svg","cca68032cc9bd02fe0ef8a5c529ce46b"],["asset/webfonts/pro-fa-regular-400-5.3.0.ttf","d89fe7cbcc22bb73cd5c45dc6dc37bc7"],["asset/webfonts/pro-fa-regular-400-5.3.0.woff","289492843fd69288a8135af6560f8697"],["asset/webfonts/pro-fa-regular-400-5.3.0.woff2","68a3aabf76d3260b017be2b49d284a33"],["asset/webfonts/pro-fa-regular-400-5.4.0.eot","dd8fbe017ad29f7c07b24e567b9490af"],["asset/webfonts/pro-fa-regular-400-5.4.0.svg","d7eb63992064d792932fe45e04020599"],["asset/webfonts/pro-fa-regular-400-5.4.0.ttf","735678b7de16f99bf7644a531baa9be9"],["asset/webfonts/pro-fa-regular-400-5.4.0.woff","d353acaabdac2d3ea413559acaa34c78"],["asset/webfonts/pro-fa-regular-400-5.4.0.woff2","d9205543873b8334365876cfd23a1daa"],["asset/webfonts/pro-fa-regular-400-5.4.1.eot","5e8ae32f626de9b1b5b29a172454d5d0"],["asset/webfonts/pro-fa-regular-400-5.4.1.svg","1bf2563ac7317a48258fce6a5efd7095"],["asset/webfonts/pro-fa-regular-400-5.4.1.ttf","e652c177f4181f98cb158c65ebfcc8c6"],["asset/webfonts/pro-fa-regular-400-5.4.1.woff","4cef0bcebe2ec1bdbb67f152f9da76fd"],["asset/webfonts/pro-fa-regular-400-5.4.1.woff2","c82cc1dfc62f4a6e7f8560ec137f9524"],["asset/webfonts/pro-fa-regular-400-5.5.0.eot","74c2674edb2595cad5c106da599ffea6"],["asset/webfonts/pro-fa-regular-400-5.5.0.svg","d8672f024a99a7176542e1f4a0a8930c"],["asset/webfonts/pro-fa-regular-400-5.5.0.ttf","324626b72472039130b2b161ba93ce30"],["asset/webfonts/pro-fa-regular-400-5.5.0.woff","88078e4a73f811a7a811ceaadef03e35"],["asset/webfonts/pro-fa-regular-400-5.5.0.woff2","7632ee248e466f2d9680c635144f0f8a"],["asset/webfonts/pro-fa-regular-400-5.6.0.eot","f95a23c1ac5033dfc356466254fc63d3"],["asset/webfonts/pro-fa-regular-400-5.6.0.svg","e6808f7e80a849c3621ef2f2454bfcb2"],["asset/webfonts/pro-fa-regular-400-5.6.0.ttf","6cd461a023e5e76ec63578cb792beefa"],["asset/webfonts/pro-fa-regular-400-5.6.0.woff","5465e64bf7f23993a4fdae56c2ef865d"],["asset/webfonts/pro-fa-regular-400-5.6.0.woff2","f66d9938a5cb171b9ca08b2bcd334b1f"],["asset/webfonts/pro-fa-regular-400-5.6.1.eot","2c48087580a3f0219800d955b4c7bbe7"],["asset/webfonts/pro-fa-regular-400-5.6.1.svg","83ad448bac2ccb29c840d1bc432d1648"],["asset/webfonts/pro-fa-regular-400-5.6.1.ttf","d4cf4225c5b22cad74360bb902c1f190"],["asset/webfonts/pro-fa-regular-400-5.6.1.woff","8dda4eed71371a264a9fc89c8523c72e"],["asset/webfonts/pro-fa-regular-400-5.6.1.woff2","0e59a7a31deca71a0a4c3bb5d7c51130"],["asset/webfonts/pro-fa-regular-400-5.6.3.eot","0b81a2fd0709c6016ac62f7cadf759db"],["asset/webfonts/pro-fa-regular-400-5.6.3.svg","00e796437aaafb9877828116630507be"],["asset/webfonts/pro-fa-regular-400-5.6.3.ttf","58593dae101df39ced67771e0a37ba44"],["asset/webfonts/pro-fa-regular-400-5.6.3.woff","7f7e3c2e851dc4c874fd40d94302f1e1"],["asset/webfonts/pro-fa-regular-400-5.6.3.woff2","5deb51feec62df91542311972daff4f4"],["asset/webfonts/pro-fa-regular-400-5.7.0.eot","7355163f829aba3149e1ad2544519dc3"],["asset/webfonts/pro-fa-regular-400-5.7.0.svg","c35af2412b9908b956507ab3d0e998ca"],["asset/webfonts/pro-fa-regular-400-5.7.0.ttf","7eeee40402791510a330b0e9f86b5bf8"],["asset/webfonts/pro-fa-regular-400-5.7.0.woff","bbf446f1f16eda4628262d5d33364899"],["asset/webfonts/pro-fa-regular-400-5.7.0.woff2","aee873508b726f814df2d3c68556a371"],["asset/webfonts/pro-fa-regular-400-5.7.1.eot","6edc947ee5f5bcc9f4a1dac57b726041"],["asset/webfonts/pro-fa-regular-400-5.7.1.svg","1bfe07d9b6d86adf7d28372dbedd4bb4"],["asset/webfonts/pro-fa-regular-400-5.7.1.ttf","5f027fd1ffb0538ffe35049f22c45e1b"],["asset/webfonts/pro-fa-regular-400-5.7.1.woff","b3f9e9e0aec8d3e6cf0af6c17d2d64a4"],["asset/webfonts/pro-fa-regular-400-5.7.1.woff2","a86a0818fb81fea4141c8b77cbb0ff9e"],["asset/webfonts/pro-fa-regular-400-5.8.0.eot","087cf8349d311ce8c9ef62a25b7765ec"],["asset/webfonts/pro-fa-regular-400-5.8.0.svg","0bca0d538e37204dcffd97487b82221a"],["asset/webfonts/pro-fa-regular-400-5.8.0.ttf","736ab1831fcbcd2b366408afacd911f1"],["asset/webfonts/pro-fa-regular-400-5.8.0.woff","b0b5d9e46451ec12917a64a96c5a1e7b"],["asset/webfonts/pro-fa-regular-400-5.8.0.woff2","c6d627339078cd6c4b3775a8cb092730"],["asset/webfonts/pro-fa-regular-400-5.8.2.eot","5f987a98cb022773d3011b4107342548"],["asset/webfonts/pro-fa-regular-400-5.8.2.svg","ff250cf577f60c5ba9c66772f3477249"],["asset/webfonts/pro-fa-regular-400-5.8.2.ttf","08e76014b78e6e39b033d7b5a2a2efe6"],["asset/webfonts/pro-fa-regular-400-5.8.2.woff","fe5fb62a0bec6714b01f2e87bcba2e8c"],["asset/webfonts/pro-fa-regular-400-5.8.2.woff2","8a7785f570ee8c5e99db20320fcdfeba"],["asset/webfonts/pro-fa-regular-400-5.9.0.eot","471f94234a44e5f52f7b36b68209a460"],["asset/webfonts/pro-fa-regular-400-5.9.0.svg","2241a6046deb2f8c286244a560906d31"],["asset/webfonts/pro-fa-regular-400-5.9.0.ttf","4e65658f85336cfbe455ab9a701877ea"],["asset/webfonts/pro-fa-regular-400-5.9.0.woff","4cbb0a3285e795e65663c2f9727eb370"],["asset/webfonts/pro-fa-regular-400-5.9.0.woff2","1b5ebc35cd0c072d039a4162c2319075"],["index.html","399635ad91e97df8afc7549725e1c1ee"],["manifest.json","e78801023ab3daa7ef6665a86a7465ac"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







