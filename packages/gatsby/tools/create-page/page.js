// create/page.js

const fs = require("fs");
const path = require("path");
const _ = require("lodash");

module.exports = async ({
  name,
  viewExt = "jsx",
  mvc = "mvc", // mvc
  outputDir,
}) => {
  const pageName = _.capitalize(_.camelCase(name));

  if (mvc.indexOf("v") === -1) {
    // generate view file
    const viewTmpl = fs.readFileSync(path.join(__dirname, `page-view.${viewExt}.template`));
    const viewCompiled = _.template(viewTmpl);
    const viewOutput = viewCompiled({ title: name });
    const outputFile = path.join(outputDir, "views", `${name}.${viewExt}`);
    fs.writeFileSync(outputFile, viewOutput);
    // eslint-disable-next-line no-console
    console.log("View file created:", outputFile);
  }
  let pageTmplName;
  if (mvc.indexOf("m") !== -1) {
    // m | mv
    if (mvc.indexOf("v") !== -1) pageTmplName = "page-mv.tsx.template";
    else pageTmplName = "page-m.tsx.template";
  } else {
    // v | c
    // eslint-disable-next-line no-lonely-if
    if (mvc.indexOf("v") !== -1) pageTmplName = "page-v.tsx.template";
    else pageTmplName = "page-c.tsx.template";
  }

  const pageTmpl = fs.readFileSync(path.join(__dirname, pageTmplName));
  const pageCompiled = _.template(pageTmpl);
  const pageOutput = pageCompiled({ name, title: name, pageName });
  const outputFile = path.join(outputDir, "pages", `${name}.tsx`);
  fs.writeFileSync(outputFile, pageOutput);
  // eslint-disable-next-line no-console
  console.log("Page file created:", outputFile);
};
