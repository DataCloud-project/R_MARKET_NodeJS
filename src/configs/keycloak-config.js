// var session = require('express-session');
// var Keycloak = require('keycloak-connect');

// let _keycloak;


// var keycloakConfig = {
//     clientId: 'testclient',
//     bearerOnly: true,
//     serverUrl: 'https://datacloud-auth.euprojects.net/auth/',
//     realm: 'user-authentication',
//     credentials: {
//         secret: '82762617-1adf-440e-8e73-73e7f407f297'
//     }
// };

// function initKeycloak() {
//     if (_keycloak) {
//         console.warn("Trying to init Keycloak again!");
//         return _keycloak;
//     } 
//     else {
//         console.log("Initializing Keycloak...");
//         var memoryStore = new session.MemoryStore();
//         _keycloak = new Keycloak({ store: memoryStore }, keycloakConfig);
//         return _keycloak;
//     }
// }

// function getKeycloak() {
//     if (!_keycloak){
//         console.error('Keycloak has not been initialized. Please called init first.');
//     } 
//     return _keycloak;
// }

// module.exports = {
//     initKeycloak,
//     getKeycloak
// };
