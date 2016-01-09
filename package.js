Package.describe({
  name: 'raix:localforage',
  version: '1.2.4-spanmo',
  summary: "Offline storage - Wraps SQLite, IndexedDB, WebSQL, or localStorage using a simple powerful API."
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@1.2-rc.4');
  api.use('ecmascript', 'client');

  api.use('raix:localforage-localstorage@1.2.4-rc.1', 'web');
//   api.use('raix:localforage-websql@1.2.4-rc.1', 'web');
  api.use('raix:localforage-indexeddb@1.2.4-rc.1', 'web');
  // Specially added driver for cordova
//   api.use('raix:localforage-sqlite@1.0.0-rc.3', 'web.cordova');

  // LocalForage
  api.addFiles('localforage.js', 'client');
  api.export('localForage', 'client');

  // Also export the LocalForage class
  api.export('LocalForage', 'client');
});
