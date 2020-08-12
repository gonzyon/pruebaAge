// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

//Author: Yonathan Gonzalez

//In this file will be hosted all URLs to connect with HTTP methods

export const environment = {
  production: false,
  apiUrl: '/api/v1',
  apiEndpointCivilizations: '/civilizations',
  apiEndpointUnits: '/units',
  apiEndpointStructures: '/structures',
  apiEndpointTecnologies: '/technologies'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
