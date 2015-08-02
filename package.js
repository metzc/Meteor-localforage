Package.describe({
  name: 'raix:localforage',
  version: '1.2.4',
  summary: "Offline storage, improved. Wraps SQLite, IndexedDB, WebSQL, or localStorage using a simple but powerful API."
});

Package.on_use(function (api) {
  // api.versionsFrom('1.2');
  api.use('ecmascript', 'client');

  api.use('raix:localforage-localstorage@1.2.4', 'client');
  api.use('raix:localforage-websql@1.2.4', 'client');
  api.use('raix:localforage-indexeddb@1.2.4', 'client');
  // Specially added driver for cordova
  api.use('raix:localforage-sqlite@1.0.0', 'web.cordova');

  // LocalForage
  api.addFiles('localforage.js', 'client');
  api.export('localForage', 'client');

  // Also export the LocalForage class
  api.export('LocalForage', 'client');
});
