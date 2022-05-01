const fs = require("fs");
const args = process.argv;
const vars = {
  mode:process.env["NODE_MODE"],
  env:process.env["NODE_ENV"],
  id:process.env["cctx_appid"],
  appname:process.env["npm_package_name"],
  version:process.env["npm_package_version"]
};
const path = "src/environments/vars.ts";
const script = `
export class AppVars {
  static readonly appname = '${vars.appname}';
  static readonly id = '${vars.id}';
  static readonly version = '${vars.version}';
  static readonly env = '${vars.env}';
  static readonly mode = '${vars.mode}';
}`;
fs.writeFile(path,script,(err,file) => {
  if(err) throw err;
  console.log("file saved @",path);
})