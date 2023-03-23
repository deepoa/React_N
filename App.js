import React from "react";
import ReactDOM from "react-dom/client";

console.log("deepesh");
const heading = React.createElement(
  "h1",
  {
    id: "heading",
  },
  "hello world"
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

// Imp notes Regarding package lock.json

/*
Package lock.json  is a very imp file it locks the version , you never have to keep in gitignore,

It maintains the hash on the app ensures what version running in the local server and local production server

We should parcel.cache in gitignore

Transitive Dependencies =>  dependencies have their own dependencies

*/

/*
What Parcel do


*/
