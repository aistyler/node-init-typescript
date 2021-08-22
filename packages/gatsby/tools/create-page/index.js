#!/usr/bin/env node
/* eslint-disable no-console */

const path = require("path");
const createPage = require("./page");

function usage() {
  console.log("Usage: ./create-page {name} {mvc} {viewExt}");
  console.log("");
  console.log("  name               page name to create");
  console.log("  mvc                page creation mode.");
  console.log("                     *m | mv | v | c");
  console.log("  viewExt            view file extension.");
  console.log("                     *jsx | tsx");
  console.log("");
  console.log("Example: ./create-page Login c jsx");
  console.log("");
}

if (process.argv.length < 3) {
  usage();
  process.exit(1);
}

const name = process.argv[2];
const mvc = process.argv.length > 3 ? process.argv[3] : "m";
const viewExt = process.argv.length > 4 ? process.argv[4] : "jsx";

(() => {
  createPage({
    name,
    viewExt,
    mvc,
    outputDir: path.join(__dirname, "..", "..", "src"),
  });
})();

/*
m: query
v: view
c: controller(page)

- controller is always created.
- m: create a page file(m,c) and a view file
- mv: create a page file(m,v,c)
- v: create a page file(v,c)
- c: create a page file(c) and a view file

*/
