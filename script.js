#!/usr/bin/env osascript -l JavaScript


// Reference blog -> https://medium.com/@bit2pixel/how-i-navigate-hundreds-of-tabs-on-chrome-with-jxa-and-alfred-9bbf971af02b#id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6ImY0NTEzNDVmYWQwODEwMWJmYjM0NWNmNjQyYTJkYTkyNjdiOWViZWIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYmYiOjE2NjgxMjMxMDQsImF1ZCI6IjIxNjI5NjAzNTgzNC1rMWs2cWUwNjBzMnRwMmEyamFtNGxqZGNtczAwc3R0Zy5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjEwMTk2NzY4MzkwMjA5NjI3MTg3MyIsImVtYWlsIjoiaGFuay5sZWUucWVkQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhenAiOiIyMTYyOTYwMzU4MzQtazFrNnFlMDYwczJ0cDJhMmphbTRsamRjbXMwMHN0dGcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJuYW1lIjoiSm9uZyBIeXVuIExlZSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BTG01d3Uwal9iU1BqVDF1VzNESzMyYzhlUmlBUGdGemkxaGUyZGdKWlZ3QT1zOTYtYyIsImdpdmVuX25hbWUiOiJKb25nIEh5dW4iLCJmYW1pbHlfbmFtZSI6IkxlZSIsImlhdCI6MTY2ODEyMzQwNCwiZXhwIjoxNjY4MTI3MDA0LCJqdGkiOiJmOGMxNzljMmYyZDBmOTYyYzA2NjdkMzk0MDE3NWI5M2U3NTA5ODZhIn0.KK4vL-dRRiMYlhLYRNtaTCcwXXj-aN0G_Y9_h5qlNW8FmgyuqKAR0JYguPbJgXas6gI7GV9pvo2KrdjKN1sob1_V2QwJSakuYQtxBCrqIWHV40drKIW6twj3aQpjXQOl5qHOw6j8uHLEqBBc3hCtrFzJ_lUsKfShfrEY7F2mMNPQ6bTTC8JOsQhUwaXJ7dZbv_MBp2SZjV3-L8Ju5oikvs3cwhcA1TXz0w-zUp5GNFnMtl1wH48P9sIqn_TcYr0Its-lVL97R5t0B3Ks-fjofQPC-OFdTJovC5uy-0Bq8Vf633Yh6FGT1gB8HKYtcW-oFVgxYKkjUUHl1RHNZ7ydJw
const chromeApp = Application("Google Chrome");
chromeApp.includeStandardAdditions = true;

// listing all tabs
function listAllTabs(chromeAppInstance) {
    const chromeWindows = chromeAppInstance.windows();
    const allTabs = chromeWindows.map((window) => window.tabs()).flat();
    allTabs.forEach(tab => {
        console.log(tab.title() + " - " + tab.url());
    });
    return allTabs;
}


console.log("hello world");
// console.log(`chrome app: ${chromeApp}`);
console.log(listAllTabs(chromeApp));
// console.log(`All tabs: ${listAllTabs(chromeApp)}`);
