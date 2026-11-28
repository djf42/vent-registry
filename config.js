/* Ventilation Registry settings. Keep this file next to index.html.
   When the app is updated, replace only index.html; this file stays as it is.
   These Firebase web settings are meant to be public: the Firestore security rules protect the data. */
window.REGISTRY_CONFIG = {
  appName: 'Ventilation Registry',
  saverSite: '5',        // SAVER registry study site code (5 = Cornell University)
  studyPrefix: 'CU',     // prefix for registry study IDs (CU-01, CU-02, ...)
  firebase: {
    apiKey: 'AIzaSyAmKtE7hejvSrtbbOnkjqk4hhh8UaOPWVU',
    authDomain: 'ventilation-registry.firebaseapp.com',
    projectId: 'ventilation-registry',
    storageBucket: 'ventilation-registry.firebasestorage.app',
    messagingSenderId: '246007378247',
    appId: '1:246007378247:web:0f8b2d5f92e47c04b95c62'
  }
};
