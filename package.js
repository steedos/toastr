Package.describe({
  name: "steedos:toastr",
  summary: "ToastrJS is a JavaScript library for Gnome.",
  version: "2.1.3",
  git: 'https://github.com/vakata/jstree',
  homepage: "http://www.toastrjs.com"
});

Package.onUse(function(api) {


  api.addFiles([
    'toastr.js',
    'build/toastr.css'
  ], 'client');


});
