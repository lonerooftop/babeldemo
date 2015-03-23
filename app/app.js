/* globals require: false, console: false, fetch */
/* eslint-disable no-console */
require("babel/polyfill");
require("es6-promise").polyfill();
require("isomorphic-fetch");

async function run() {
    var zones = await (await fetch("/data/zones")).json();
    console.log(zones);
    var floorinfo = await (await fetch("/data/floors")).json();
    console.log(floorinfo);
}

require("domready")(run);
