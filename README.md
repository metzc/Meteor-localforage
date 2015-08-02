raix:localforage
==================

Offline storage, improved. Wraps IndexedDB, WebSQL, or localStorage using a simple but powerful API. On cordova we also support SQLite.

[Mozilla's LocalForage](https://github.com/mozilla/localForage)

#### Note
This package exports the `LocalForage` class and the default `localForage` instance:

```js
  localForage = new LocalForage();
```

Also note that SQLite is added to the list when using `LocalForage` on cordova applications.
