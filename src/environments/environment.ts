// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBb7X9JAaQINrm6jkuK7Zk9eZtmr-eSJzc",
    authDomain: "playvisualtv.firebaseapp.com",
    databaseURL: "https://playvisualtv.firebaseio.com",
    projectId: "playvisualtv",
    storageBucket: "playvisualtv.appspot.com",
    messagingSenderId: "711374795469"
  }
};