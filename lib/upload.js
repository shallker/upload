var Http = require('http');
var supportProto = Object.getPrototypeOf({__proto__: null}) === null;

module.exports = Upload;

function Upload() {
  Http.call(this);
}

if (supportProto) {
  Upload.prototype.__proto__ = Http.prototype;
} else {
  Upload.prototype = Object.create(Http.prototype);
}

Upload.prototype.file = function (file) {
  this.payload = file;

  return this;
}

Upload.prototype.to = function (url) {
  var upload = this;

  this.url(url);
  this.data(this.payload);
  this.method('POST');
  this.upload.addEventListener('progress', onProgress);
  this.request();

  function onProgress(ev) {
    upload.trigger('progress', ev.loaded / ev.total);
  }
}
