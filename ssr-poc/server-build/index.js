(()=>{var n={252:n=>{"use strict";n.exports=require("express")}},t={};function e(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return n[o](i,i.exports,e),i.exports}(()=>{const n=e(252)();n.get("/",((n,t)=>{t.send("\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <title>My App</title>\n      </head>\n      <body>\n        <div id=\"root\"></div>\n        <script>\n          document.addEventListener('DOMContentLoaded', function() {\n            document.getElementById('root').innerHTML = '<h1>Hello world</h1>';\n          });\n        <\/script>\n      </body>\n    </html>\n  ")})),n.listen(9001,(()=>{console.log("Server is running at http://localhost:".concat(9001))}))})()})();